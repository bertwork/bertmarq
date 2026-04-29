export const allowedOrigins = process.env.CORS_ORIGIN?.split(",") ?? [
  "http://localhost:3000",
  "http://localhost:3001",
]
