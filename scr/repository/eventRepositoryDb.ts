import type { Event } from "../models/event";
import connection from "../db";

export async function getEventsByCategory(category: string): Promise<Event[]> {
  const [rows] = await connection.execute('SELECT * FROM events WHERE category = ?', [category]);
  return rows as Event[];
}

export async function getAllEvents(): Promise<Event[]> {
  const [rows] = await connection.execute('SELECT * FROM events');
  return rows as Event[];
}

export async function getEventById(id: number): Promise<Event | undefined> {
  const [rows] = await connection.execute('SELECT * FROM events WHERE id = ?', [id]);
  const events = rows as Event[];
  return events.length > 0 ? events[0] : undefined;
}

export async function addEvent(newEvent: Event): Promise<Event> {
  const {category, title, description, location, date, time, petsAllowed, organizer } = newEvent;
try {
    const [result] = await connection.execute(
        'INSERT INTO events (category, title, description, location, date, time, petsAllowed, organizer) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [category, title, description, location, date, time, petsAllowed, organizer]
    );
    newEvent.id = (result as any).insertId;
} catch (error) {
    console.error('Error inserting event:', error);
    throw new Error('Could not insert event');
}
  return newEvent;
}
