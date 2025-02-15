import exp from 'constants';
import { Event } from '../models/event';
import { events } from '../repository/eventRepository';


function getEventsByCategory(category: string): Promise<Event[]> {
    const filteredEvents = events.filter((event) => event.category === category);
    return Promise.resolve(filteredEvents);
}

function getAllEvents(): Promise<Event[]> {
    return Promise.resolve(events);
}

function getEventById(id: number): Promise<Event | undefined> {
    return Promise.resolve(events.find((event) => event.id === id));
}

function addEvent(event: Event): Promise<Event> {
    event.id = events.length + 1;
    events.push(event);
    return Promise.resolve(event);
}

export { getEventsByCategory, getAllEvents, getEventById, addEvent };