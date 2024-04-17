import Event from "../models/eventmodel.js";
import { mongoose } from "mongoose";

// Controller function to handle creating a new event
export const createEvent = async (req, res) => {
  try {
    const {
      title,
      mentorName,
      email,
      category,
      DateAndTime,
      location,
      eventType,
      Highlight,
      Button,
      image,
      link,
      description,
      host,
      sponsors,
      tragetaudience,
    } = req.body;
    const event = new Event({
      title,
      mentorName,
      email,
      category,
      DateAndTime,
      location,
      eventType,
      Highlight,
      Button,
      image,
      link,
      description,
      host,
      sponsors,
      tragetaudience,
    });
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get event by ID
export const getEventById = async (req, res) => {
  try {
    const eventId = req.params.id;

    if (!mongoose.isValidObjectId(eventId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ Message: "Server Error" });
  }
};

// Controller function to get events by category
export const getEventsByCategory = async (req, res) => {
  const category = req.params.category;

  try {
    const events = await Event.find({ category: category });

    if (!events || events.length === 0) {
      return res
        .status(404)
        .json({ message: "No events found for this category" });
    }

    res.json(events);
  } catch (error) {
    console.error("Error fetching events by category:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};