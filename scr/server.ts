import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from "express";
import multer from 'multer';
import { uploadFile } from './services/uploadFileService';
import eventsRoute from './routes/eventRoutes';


const app = express();
app.use(express.json());
// app.use('/', eventsRoute);
app.use('/events', eventsRoute);
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

