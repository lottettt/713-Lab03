import { Event } from '../models/event';
// import * as repo from '../repository/eventRepositoryDb';
import * as repo from '../repository/eventRepositoryPrisma';

async function getEventsByCategory(category: string): Promise<Event[]> {
    const filteredEvents = await repo.getEventByCategory(category);
    return filteredEvents;
}

async function getAllEvents(): Promise<Event[]> {
    const allEvents = await repo.getAllEvents();
    return allEvents;
}

async function getEventById(id: number){
    const event = await repo.getEventById(id);
    return event;
}

async function addEvent(event: Event): Promise<Event> {
    const addedEvent = await repo.addEvent(event);
    return addedEvent;
}


export { getEventsByCategory, getAllEvents, getEventById, addEvent };