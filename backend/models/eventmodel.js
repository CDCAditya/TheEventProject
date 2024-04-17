
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