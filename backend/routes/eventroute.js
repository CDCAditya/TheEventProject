import  express  from "express";
import Event from "../models/eventmodel.js";
import {validateEventData} from "../middlewares/eventMiddleware.js";
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const {title,mentorName,email,category,DateAndTime,location,eventType,Highlight,Button,image,link,description,host,sponsors,tragetaudience} = req.body;
        const event = new Event({title,mentorName,email,category,DateAndTime,location,eventType,Highlight,Button,image,link,description,host,sponsors,tragetaudience});
        const savedEvent = await event.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



// READ: Route to get all events
router.get('/get', async (req, res) => {
    try {
        const events = await Event.find();
       const resp =  res.json(events);
        console.log(resp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// // READ: Route to get a specific event by ID
// router.get('/events/:id', getEvent, (req, res) => {
//     res.json(res.event);
// });

// // UPDATE: Route to update a specific event by ID
// router.patch('/events/:id', getEvent, async (req, res) => {
//     if (req.body.title != null) {
//         res.event.title = req.body.title;
//     }
//     if (req.body.description != null) {
//         res.event.description = req.body.description;
//     }
//     // Update other fields as needed

//     try {
//         const updatedEvent = await res.event.save();
//         res.json(updatedEvent);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // DELETE: Route to delete a specific event by ID
// router.delete('/events/:id', getEvent, async (req, res) => {
//     try {
//         await res.event.remove();
//         res.json({ message: 'Event deleted' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

export default router;