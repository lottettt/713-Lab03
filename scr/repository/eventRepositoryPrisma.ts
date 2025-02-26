import { PrismaClient } from '@prisma/client';
import type { Event } from '../models/event';

const prisma = new PrismaClient();

export function getEventByCategory(category: string){
  return prisma.event.findMany({
    where: { category },
  });
}

export function getAllEvents(){
  return prisma.event.findMany();
}

export function getEventById(id: number){
  return prisma.event.findUnique({
    where: { id },
  });
}

export function addEvent(newEvent: Event){
  return prisma.event.create({
    data: {
      category: newEvent.category || '',
      title: newEvent.title || '',
      description: newEvent.description || '',
      location: newEvent.location || '',
      date: newEvent.date || '',
      time: newEvent.time || '',
      petsAllowed: newEvent.petsAllowed || false
        
      }
  });
}

export function getAllEventsWithOrganizer() {
  return prisma.event.findMany({
    select: {
      id: true,
      category: true,
      organizerId: false,
      organizer: {
        select: {
          name: true,
        },
    },
  },
  });
}

export function getEventByIdWithOrganizer(id: number) {
  return prisma.event.findUnique({
    select: {
      title: true,
      time: true,
      date: true,
      organizerId: true,
    },
    where: { id },
  });
}