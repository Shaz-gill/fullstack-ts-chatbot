// In this we are storing data in memory and this is called "implementation detail".
// In this we will only export the public interface of the model.

const conversations = new Map<string, string>();

export const conversationRepository = {
   getLastResponseId(conversationId: string) {
      return conversations.get(conversationId);
   },

   setLastResponseId(conversationId: string, responseId: string) {
      conversations.set(conversationId, responseId);
   },
};
