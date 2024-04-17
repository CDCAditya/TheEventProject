import  express  from "express";
import { createEvent, getAllEvents, getEventById, getEventsByCategory } from "../controller/eventController.js";
const router = express.Router();

router.post('/', createEvent);
router.get('/get', getAllEvents);
router.get('/get/:id', getEventById);
router.get('/getCategoryEvent/:category', getEventsByCategory);

export default router;