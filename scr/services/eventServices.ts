import { Event } from '../models/event';
// import * as repo from '../repository/eventRepositoryDb';
import * as repo from '../repository/eventRepositoryPrisma';

async function getEventsByCategory(category: string){
    const filteredEvents = await repo.getEventByCategory(category);
    return filteredEvents;
}

async function getAllEvents(){
    const allEvents = await repo.getAllEventsWithOrganizer();
    return allEvents;
}

async function getEventById(id: number){
    const event = await repo.getEventByIdWithOrganizer(id);
    return event;
}

async function addEvent(event: Event){
    const addedEvent = await repo.addEvent(event);
    return addedEvent;
}


export { getEventsByCategory, getAllEvents, getEventById, addEvent };