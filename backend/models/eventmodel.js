
// Import mongoose
import mongoose from "mongoose";

// Define the event schema
const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    mentorName:{
        type :String,
        required:true
    },
    email:{
        type :String,
        required:true
    },
    category:{
        type:String,
        enum : ['Spirituality','Technology','Business','Sports'],
        default: 'Spirituality',
        required:true
    },
    DateAndTime:{
        type: {
            startDateandTime: {
                type: String,
                required: true
            },
            endDateandTime: {
                type: String,
                required: true
            },
        },
        required: true
    },
    location:{
        type:String
    },
    eventType:{
        type:String,
        enum : ['Upcoming','Pre-recorded','Live'],
        default: 'Upcoming',
        required:true
    },
    Highlight:{
        type:String,
    },
    Button:{
        type:String,
        default:"Watch Now"
    },
    image:{
        type:String
    },
    link:{
        type:String
    },
    description:{
        type:String
    },
    host:{
        type:String
    },
    sponsors:[
        {type: String}
    ],
    targetaudience:{
        type:String
    }
});
// Create the Event model
const Event = mongoose.model('Event', eventSchema);

// Export the model
export default Event;















// const Event = mongoose.model('Event', eventSchema);

// // Middleware setup
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Routes
// // Get all events
// app.get('/events', async (req, res) => {
//     try {
//         const events = await Event.find();
//         res.json(events);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Create a new event
// app.post('/events', async (req, res) => {
//     const event = new Event({
//         title: req.body.title,
//         description: req.body.description,
//         date: req.body.date,
//         location: req.body.location
//     });

//     try {
//         const newEvent = await event.save();
//         res.status(201).json(newEvent);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // Update an existing event
// app.put('/events/:id', async (req, res) => {
//     try {
//         const event = await Event.findById(req.params.id);
//         if (event) {
//             event.title = req.body.title || event.title;
//             event.description = req.body.description || event.description;
//             event.date = req.body.date || event.date;
//             event.location = req.body.location || event.location;

//             const updatedEvent = await event.save();
//             res.json(updatedEvent);
//         } else {
//             res.status(404).json({ message: 'Event not found' });
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Delete an event
// app.delete('/events/:id', async (req, res) => {
//     try {
//         const event = await Event.findById(req.params.id);
//         if (event) {
//             await event.remove();
//             res.json({ message: 'Event deleted' });
//         } else {
//             res.status(404).json({ message: 'Event not found' });
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(Server is listening on port ${port});
// });