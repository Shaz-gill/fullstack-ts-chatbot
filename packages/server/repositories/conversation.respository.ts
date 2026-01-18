// In this we are storing data in memory and this is called "implementation detail".
// In this we will only export the public interface of the model.

// Implementation Detail
const conversations = new Map<string, string>();

// Public Interface
export const conversationRepository = {
   getLastResponseId(conversationId: string) {
      return conversations.get(conversationId);
   },

   setLastResponseId(conversationId: string, responseId: string) {
      conversations.set(conversationId, responseId);
   },
};
