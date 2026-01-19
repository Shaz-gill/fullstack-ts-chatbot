import axios from 'axios';
import { useRef, type KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from './ui/button';

type FormData = {
   prompt: string;
};

export const ChatBot = () => {
   // We used 'ref hook' because 'conversationId' should be created once and should not change and re-render, that is the difference between the ref and state hooks.
   // With 'ref hook', we can store values that should not cause a re-render. It's good for timers, IDs.
   const conversationId = useRef(crypto.randomUUID());
   const { register, handleSubmit, reset, formState } = useForm<FormData>();

   const onSubmit = async ({ prompt }: FormData) => {
      reset();

      const { data } = await axios.post('/api/chat', {
         prompt,
         conversationId: conversationId.current,
      });

      console.log('Data:', data);
   };

   const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         submit(); // 'submit' returns a function named 'handleSubmit', so, we have to explicitly call that function.
      }
   };

   const submit = handleSubmit(onSubmit);

   return (
      <form
         onSubmit={submit} // returns a function
         onKeyDown={onKeyDown}
         className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
      >
         <textarea
            {...register('prompt', {
               required: true,
               validate: (data) => data.trim().length > 0,
            })}
            className="w-full border-0 focus:outline-0 resize-none"
            placeholder="Ask anything"
            maxLength={1000}
         />
         <Button disabled={!formState.isValid} className="rounded-full w-9 h-9">
            <FaArrowUp />
         </Button>
      </form>
   );
};
