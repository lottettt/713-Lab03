import { S3Client } from "@aws-sdk/client-s3";

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const endpoint = process.env.SUPABASE_ENDPOINT_URL;
const region = process.env.AWS_REGION;

if (!accessKeyId || !secretAccessKey || !endpoint || !region) {
  throw new Error("Missing required environment variables for AWS S3 configuration");
}

const s3Client = new S3Client({
      credentials: {
        accessKeyId,
        secretAccessKey
        // accessKeyId: "39a671aaf2a9d1f810580c5c56ba9c09",
        // secretAccessKey:
        //   "8fccb2840230c97a0a2ed2a2c9bbe9d37d5de55bd78010609111bf25f6d52e47"
      },
      endpoint,
      region,
      // endpoint: "https://whjonuylkfmvzcvptywe.supabase.co/storage/v1/s3",
      // region: "ap-southeast-1",
      forcePathStyle: true
      
      
    });

export default s3Client;