import './App.css';
import ChatBot from './components/chat/ChatBot';
import Logo from './components/Logo';

const backgroundImageUrl =
   'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=1600&q=80';

function App() {
   return (
      <div
         className="fixed inset-0"
         style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
      >
         <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
         <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-4xl h-[90vh] min-h-[520px] max-h-[760px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col p-8">
               <Logo />
               <div className="flex-1 bg-gray-50 rounded-xl p-5 overflow-y-auto shadow-inner">
                  <ChatBot />
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
