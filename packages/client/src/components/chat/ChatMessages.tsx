import { useEffect, useRef, type ClipboardEvent } from 'react';
import ReactMarkdown from 'react-markdown';

export type Message = {
   content: string;
   role: 'user' | 'bot';
};

type Props = {
   messages: Message[];
};

const ChatMessages = ({ messages }: Props) => {
   const lastMessageRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
   }, [messages]);

   const onCopyMessage = (e: ClipboardEvent<HTMLParagraphElement>) => {
      const selection = window.getSelection()?.toString().trim();
      if (selection) {
         e.preventDefault();
         e.clipboardData.setData('text/plain', selection);
      }
   };

   return (
      <div className="flex flex-col gap-3">
         {messages.map((message, index) => (
            <div
               key={index}
               onCopy={onCopyMessage}
               ref={index === messages.length - 1 ? lastMessageRef : null}
               className={`px-3 py-1 max-w-2xl rounded-xl ${
                  message.role === 'user'
                     ? 'bg-blue-600 text-white self-end text-right'
                     : 'bg-gray-100 text-black self-start text-left'
               }`}
            >
               <ReactMarkdown
                  components={{
                     ul: ({ node, ...props }) => (
                        <ul className="list-disc pl-5" {...props} />
                     ),
                     a: ({ node, ...props }) => (
                        <a
                           className="text-blue-600 underline hover:text-blue-800"
                           target="_blank"
                           rel="noopener noreferrer"
                           {...props}
                        />
                     ),
                  }}
               >
                  {message.content}
               </ReactMarkdown>
            </div>
         ))}
      </div>
   );
};

export default ChatMessages;
