import axios from 'axios';
import { useRef, useState } from 'react';
import ChatInput, { type ChatFormData } from './ChatInput';
import type { Message } from './ChatMessages';
import ChatMessages from './ChatMessages';
import TypingIndicator from './TypingIndicator';

type ChatResponse = {
   message: string;
};

const ChatBot = () => {
   const [messages, setMessage] = useState<Message[]>([]);
   const [isBotTyping, setIsBotTyping] = useState(false);
   const [error, setError] = useState('');

   // We used 'ref hook' because 'conversationId' should be created once and should not change and re-render, that is the difference between the ref and state hooks.
   // With 'ref hook', we can store values that should not cause a re-render. It's good for timers, IDs.
   const conversationId = useRef(crypto.randomUUID());

   const onSubmit = async ({ prompt }: ChatFormData) => {
      try {
         setMessage((prev) => [
            ...prev,
            {
               content: prompt,
               role: 'user',
            },
         ]);

         setIsBotTyping(true);
         setError('');

         const { data } = await axios.post<ChatResponse>('/api/chat', {
            prompt,
            conversationId: conversationId.current,
         });

         setMessage((prev) => [
            ...prev,
            {
               content: data.message,
               role: 'bot',
            },
         ]);
      } catch (error) {
         setError('Something went wrong, try again!');
      } finally {
         setIsBotTyping(false);
      }
   };

   return (
      <div className="flex flex-col h-full">
         <div className="flex flex-col flex-1 gap-3 mb-10 overflow-y-auto">
            <ChatMessages messages={messages} />
            {isBotTyping && <TypingIndicator />}
            {error && <p className="text-red-500">{error}</p>}
         </div>
         <ChatInput onSubmit={onSubmit} />
      </div>
   );
};

export default ChatBot;
