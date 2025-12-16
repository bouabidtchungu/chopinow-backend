# Chopinow Backend (NestJS + Prisma)

## Setup
1. Copy `.env.example` to `.env` and fill in your environment variables.
2. Run `npm install`.
3. Initialize Prisma and migrate the database:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate