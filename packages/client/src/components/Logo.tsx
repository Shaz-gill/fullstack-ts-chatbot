import { PiParkLight } from 'react-icons/pi';

const Logo = () => {
   return (
      <div className="flex justify-center mb-6">
         <div className="flex items-center gap-3 select-none">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white shadow-lg">
               <PiParkLight className="w-7 h-7" />
            </div>
            <div className="leading-tight">
               <h1 className="text-xl font-bold text-gray-900">
                  Wonder<span className="text-indigo-600">Land</span>
               </h1>
               <p className="text-xs text-gray-500">Theme Park Assistant</p>
            </div>
         </div>
      </div>
   );
};

export default Logo;
