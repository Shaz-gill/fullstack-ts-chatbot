import OpenAI from 'openai';
import { conversationRepository } from '../repositories/conversation.respository';

// Implementation Detail
const client = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

type ChatResponse = {
   id: string;
   message: string;
};

// Public Interface
// "Leaky Abstraction" -> (This is abstraction over OpenAI because it hides the complexity,
// it hides the details, the consumers of this module,
// like our index module, don't know what LLM we are using under the hood, so the chatService is an abstraction over OpenAI,
// but it's a Leaky Abstraction because some of the details are being exposed to the outside, to the consumers).
// Below we are returning the response object which is specific to the OpenAI platform,
// that's why we say this service is a "Leaky Abstraction".
export const chatService = {
   async sendMessage(
      prompt: string,
      conversationId: string
   ): Promise<ChatResponse> {
      const response = await client.responses.create({
         model: 'gpt-4o-mini',
         input: prompt,
         temperature: 0.2, // This is actually for creative responses
         max_output_tokens: 100,
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
