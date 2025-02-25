import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from "express";
import { Event } from "./models/event";
import * as repo from "./services/eventServices";
import multer from 'multer';
import { uploadFile } from './services/uploadFileService';


const app = express();
app.use(express.json());
const port = 3000;



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

const getEventsByCategory = async (category: string): Promise<Event[]> => {
  const events = await repo.getEventsByCategory(category);
  return events;
};

app.get("/events", async (req, res) => {
    if (req.query.category) {
    const category = req.query.category as string;
    
    const filteredEvents = await getEventsByCategory(category);
    
    res.json(filteredEvents);
    } else {
    const result = await repo.getAllEvents();
    res.json(result);
    }
});


app.get("/events/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    const event = await repo.getEventById(id);

    if (event) {
    res.json(event);
    } else {
    res.status(404).send("Event not found");
    }
});  


app.post("/events", async (req, res) => {    
    console.log(req.body);
    const newEvent: Event = req.body;    

    const addedEvent = await repo.addEvent(newEvent);

    res.status(201);
    res.json(newEvent);
});

const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('file'), async (req: any, res: any) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(400).send('No file uploaded.');
    }
    // const bucket = 'images';
    // const filePath = `uploads`;
    const bucket = process.env.SUPABASE_BUCKET_NAME as string;
    const filePath = process.env.UPLOAD_DIR as string;
    // console.log('bucket:', bucket);
    // console.log('filePath:', filePath);

    const outputUrl = await uploadFile(bucket, filePath, file);

    res.status(200).send(outputUrl);
  } catch (error) {
    res.status(500).send('Error uploading file');
}
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

