import exp from 'constants';
import { Event } from '../model/entity/types';

const events: Event[] = [
    {
      id: 1,
      category: "Music",
      title: "Concert",
      description: "A live concert",
      location: "London",
      date: "2021-07-01",
      time: "19:00",
      petsAllowed: false,
      organizer: "Live Nation"
    },
    {
      id: 2,
      category: "Music",
      title: "Festival",
      description: "A music festival",
      location: "Manchester",
      date: "2021-07-15",
      time: "12:00",
      petsAllowed: true,
      organizer: "Festival Republic"
    },
    {
      id: 3,
      category: "Sports",
      title: "Football Match",
      description: "A football match",
      location: "Liverpool",
      date: "2021-08-01",
      time: "15:00",
      petsAllowed: false,
      organizer: "Premier League"
    },

    {
      id: 4,
      category: "Music",
      title: "Jazz Night",
      description: "An evening of smooth jazz",
      location: "New Orleans",
      date: "2021-09-10",
      time: "19:00",
      petsAllowed: true,
      organizer: "Jazz Fest"
    },
    {
      id: 5,
      category: "Theatre",
      title: "Shakespeare in the Park",
      description: "A performance of Hamlet",
      location: "Central Park",
      date: "2021-10-05",
      time: "18:00",
      petsAllowed: false,
      organizer: "NYC Theatre Group"
    },
    {
      id: 6,
      category: "Food",
      title: "Food Truck Festival",
      description: "A variety of food trucks offering delicious meals",
      location: "San Francisco",
      date: "2021-11-20",
      time: "12:00",
      petsAllowed: true,
      organizer: "Foodie Events"
    }
  ];

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