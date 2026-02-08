import './App.css';
import BackgroundImage from './assets/background.jpg';
import ChatBot from './components/chat/ChatBot';
import Logo from './components/Logo';

function App() {
   return (
      <div
         className="fixed inset-0"
         style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
      >
         <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
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
