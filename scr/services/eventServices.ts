import { Event } from '../models/event';
import * as repo from '../repository/eventRepositoryDb';


async function getEventsByCategory(category: string): Promise<Event[]> {
    const filteredEvents = await repo.getEventsByCategory(category);
    return filteredEvents;
}

async function getAllEvents(): Promise<Event[]> {
    const allEvents = await repo.getAllEvents();
    return allEvents;
}

async function getEventById(id: number): Promise<Event | undefined> {
    const event = await repo.getEventById(id);
    return event;
}

async function addEvent(event: Event): Promise<Event> {
    const addedEvent = await repo.addEvent(event);
    return addedEvent;
}


export { getEventsByCategory, getAllEvents, getEventById, addEvent };