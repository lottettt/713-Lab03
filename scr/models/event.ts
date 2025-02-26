import e from "express";
import { Organizer } from "./organizer";
interface Event {
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    organizer?: Organizer | null;
  }

export { Event };