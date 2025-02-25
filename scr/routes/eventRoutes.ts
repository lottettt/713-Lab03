import express, { Request, Response } from "express";
import { getAllEvents, getEventsByCategory, getEventById, addEvent } from "../services/eventServices";
import type { Event } from "../models/event";
import exp from "constants";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = await getEventsByCategory(category as string);
    res.json(filteredEvents);
    } else {
    res.json(await getAllEvents());
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const event = await getEventById(id);
    if (event) {
    res.json(event);
    } else {
    res.status(404).send("Event not found");
    }
});  
 
router.post("/", async (req: Request, res: Response) => {  
    const newEvent: Event = req.body;    
    await addEvent(newEvent);
    res.json(newEvent);
});

export default router;
