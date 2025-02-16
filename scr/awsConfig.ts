import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
      credentials: {
        accessKeyId: "39a671aaf2a9d1f810580c5c56ba9c09",
        secretAccessKey:
          "8fccb2840230c97a0a2ed2a2c9bbe9d37d5de55bd78010609111bf25f6d52e47"
      },
      endpoint: "https://whjonuylkfmvzcvptywe.supabase.co/storage/v1/s3",
      region: "ap-southeast-1",
      forcePathStyle: true
      
      
    });

export default s3Client;