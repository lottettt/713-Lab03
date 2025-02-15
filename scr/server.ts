import express, { Request, Response } from "express";
import { Event } from "./model/entity/types";
import { getEventsByCategory, getEventById, addEvent, getAllEvents } from "./services/eventServices";
import { get } from "http";


const app = express();
app.use(express.json());
const port = 3000;

// interface Event {
//   id: number;
//   category: string;
//   title: string;
//   description: string;
//   location: string;
//   date: string;
//   time: string;
//   petsAllowed: boolean;
//   organizer: string;
// }

// const events: Event[] = [
//   {
//     id: 1,
//     category: "Music",
//     title: "Concert",
//     description: "A live concert",
//     location: "London",
//     date: "2021-07-01",
//     time: "19:00",
//     petsAllowed: false,
//     organizer: "Live Nation"
//   },
//   {
//     id: 2,
//     category: "Music",
//     title: "Festival",
//     description: "A music festival",
//     location: "Manchester",
//     date: "2021-07-15",
//     time: "12:00",
//     petsAllowed: true,
//     organizer: "Festival Republic"
//   },
//   {
//     id: 3,
//     category: "Sports",
//     title: "Football Match",
//     description: "A football match",
//     location: "Liverpool",
//     date: "2021-08-01",
//     time: "15:00",
//     petsAllowed: false,
//     organizer: "Premier League"
//   },
//   // ...existing code...
//   {
//     id: 4,
//     category: "Music",
//     title: "Jazz Night",
//     description: "An evening of smooth jazz",
//     location: "New Orleans",
//     date: "2021-09-10",
//     time: "19:00",
//     petsAllowed: true,
//     organizer: "Jazz Fest"
//   },
//   {
//     id: 5,
//     category: "Theatre",
//     title: "Shakespeare in the Park",
//     description: "A performance of Hamlet",
//     location: "Central Park",
//     date: "2021-10-05",
//     time: "18:00",
//     petsAllowed: false,
//     organizer: "NYC Theatre Group"
//   },
//   {
//     id: 6,
//     category: "Food",
//     title: "Food Truck Festival",
//     description: "A variety of food trucks offering delicious meals",
//     location: "San Francisco",
//     date: "2021-11-20",
//     time: "12:00",
//     petsAllowed: true,
//     organizer: "Foodie Events"
//   }
// ];

// function getEventsByCategory(category: string): Event[] {
//     const filteredEvents = events.filter((event) => event.category === category);
//     return filteredEvents;
// }

// function allEvents(): Event[] {
//     return events;
// }

// function getEventById(id: number): Event | undefined {
//     return events.find((event) => event.id === id);
// }

// function addEvent(event: Event): Event {
//     event.id = events.length + 1;
//     events.push(event);
//     return event;
// }

// หน้่าที่่ของ API แค่รับ request และส่ง response กลับไป เท่านั้น
// ไม่ควรมีการคำนวณหรือการทำงานอื่นๆ ในส่วนนี้
// ให้เรียกใช้ function ที่เขียนไว้ข้างนอก
// และส่งค่าที่ได้จาก function นั้นไปใน response


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  const id = req.query.id;

  const output = `id: ${id}`;
  res.send(output);
});


app.get("/events", (req, res) => {
    if (req.query.category) {
    const category = req.query.category as string;
    
    const filteredEvents = getEventsByCategory(category);
    
    res.json(filteredEvents);
    } else {
    const result = getAllEvents();
    res.json(result);
    }
});


app.get("/events/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const event = getEventById(id);

    if (event) {
    res.json(event);
    } else {
    res.status(404).send("Event not found");
    }
});  


app.post("/events", (req, res) => {    
    console.log(req.body);
    const newEvent: Event = req.body;    

    const addedEvent = addEvent(newEvent);

    res.status(201);
    res.json(newEvent);
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
