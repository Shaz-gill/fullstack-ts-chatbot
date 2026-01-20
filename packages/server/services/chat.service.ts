import OpenAI from 'openai';
import { conversationRepository } from '../repositories/conversation.respository';

// - Implementation Detail
const client = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

type ChatResponse = {
   id: string;
   message: string;
};

// NOTE: Public Interface & Leaky Abstraction
//
// This service acts as a public interface for sending chat messages.
// It hides the complexity of interacting with OpenAI (model choice,
// request structure, and conversation handling).
//
// However, it is a leaky abstraction because it still exposes
// OpenAI-specific concepts (such as response IDs and message format)
// to its consumers.
//
// If the underlying LLM provider changes, consumers of this service
// may also need changes, which is why this abstraction is considered "leaky".
// Below is our application logic.
export const chatService = {
   async sendMessage(
      prompt: string,
      conversationId: string
   ): Promise<ChatResponse> {
      const response = await client.responses.create({
         model: 'gpt-4o-mini',
         input: prompt,
         temperature: 0.2, // This is actually for creative responses
         max_output_tokens: 200,
         previous_response_id:
            conversationRepository.getLastResponseId(conversationId),
      });

      conversationRepository.setLastResponseId(conversationId, response.id);

      return {
         id: response.id,
         message: response.output_text,
      };
   },
};
