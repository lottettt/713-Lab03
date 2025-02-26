import type { Event } from './event';

export interface Organizer {
    id?: number;
    name: string;
    events?: Event[];
}
