/** @type {import('next').NextConfig} */
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig = {
  images: {
    remotePatterns: [
     {
        protocol: "https",
        hostname: "**.public.blob.vercel-storage.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
}

export default withPayload(nextConfig)
