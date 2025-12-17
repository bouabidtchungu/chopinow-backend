import { createServer } from 'http';
import { parse } from 'url';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

let server: any;

async function bootstrap() {
  if (!server) {
    const expressApp = express();
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );
    app.enableCors();
    await app.init();
    server = createServer(expressApp);
  }
  return server;
}

export default async (req: any, res: any) => {
  const parsedUrl = parse(req.url!, true);
  const httpServer = await bootstrap();
  httpServer.emit('request', req, res);
};
