import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('webhook/stripe')
export class StripeController {
  @Post()
  handleStripeWebhook(@Req() req: Request, @Res() res: Response) {
    // TODO: verify signature and handle events
    console.log('Received Stripe webhook event:', req.body);
    res.status(200).send('Received');
  }
}