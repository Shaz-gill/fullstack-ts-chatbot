import type { Request, Response } from 'express';
import { chatService } from '../services/chat.service';
import z from 'zod';

// NOTE: Public Interface vs Implementation Detail
//
// This file separates implementation details from the public interface.
//
// - Implementation Detail:
//   The request validation logic (schema) is internal.
//   It defines how input is validated and can change without affecting other parts of the app.
//
// - Public Interface:
//   The controller is the public interface of this module.
//   It defines how external clients interact with the system via HTTP requests and responses.
//
// The goal is to hide internal logic and expose only what is necessary.

// Implementation Detail
const chatSchema = z.object({
   prompt: z
      .string()
      .trim()
      .min(1, 'Prompt is required.')
      .max(1000, 'Prompt is too long (max 1000 characters).'),
   conversationId: z.string().uuid(),
});

// Public Interface
export const chatController = {
   async sendMessage(req: Request, res: Response) {
      const parseResult = chatSchema.safeParse(req.body);

      if (!parseResult.success) {
         res.status(400).json(parseResult.error.format());
         return;
      }

      try {
         const { prompt, conversationId } = req.body;
         const response = await chatService.sendMessage(prompt, conversationId);

         res.json({ message: response.message });
      } catch (error) {
         res.status(500).json({ error: 'Failed to generate a response.' });
         return;
      }
   },
};
