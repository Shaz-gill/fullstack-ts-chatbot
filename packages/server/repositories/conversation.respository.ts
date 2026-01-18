// NOTE: Public Interface vs Implementation Detail
//
// Conversation data is stored in memory.
// This storage choice (in-memory Map) is an implementation detail
// and can be changed later (e.g., database, cache) without affecting users.
// This is a kind of data access code.
//
// Only the public interface of the repository is exported.
// Consumers interact through methods, not with how or where data is stored.
//
// Implementation Detail:
// conversationId -> lastResponseId
// conv1 -> 100
// conv1 -> 200
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
