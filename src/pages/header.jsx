
import { useState, useEffect } from 'react';

export default function Header() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Rafaela Costa';


  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);


  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);



  return (
    <div className="relative overflow-hidden">

      <div className="relative flex flex-col items-center justify-center h-screen 
        bg-gradient-to-b from-[#196877] via-[#1a5a6b] to-[#193555] border-4 border-[#00FFCC] 
        rounded-xl overflow-hidden shadow-[0_0_30px_#00FFCC,0_0_60px_#00FFCC40]">
        

        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(#00FFCC 1px, transparent 1px), linear-gradient(90deg, #00FFCC 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>


        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#FF99B6]/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#00FFCC]/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#4DC1D7]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>


        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#00FFCC] rounded-full animate-float-particle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}


        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 space-y-6">


          <div className="relative">
            <h1 className="font-joystix text-5xl md:text-7xl lg:text-8xl text-[#FF99B6] drop-shadow-[0_0_20px_#FF99B6]">
              {displayText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </h1>
            
 
            <div className="absolute inset-0 font-joystix text-5xl md:text-7xl lg:text-8xl text-[#FF99B6] blur-xl opacity-50 pointer-events-none">
              {displayText}
            </div>
          </div>

 
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#4DC1D7]"></div>
            <p className="font-joystix text-lg md:text-xl text-[#4DC1D7] animate-pulse">
              Engenheira de Software
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#4DC1D7]"></div>
          </div>


          <p className="font-sans text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
            Prazer em conhecer você! 
            <span className="text-[#FF99B6] animate-pulse"> ✨</span>
          </p>


          <div className="flex flex-col items-center gap-3 mt-4">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 md:w-12 md:h-12"
                  style={{
                    animation: `heartbeat 1.5s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  <div className="w-full h-full relative">

                    <div className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl"
                      style={{
                        filter: 'drop-shadow(0 0 10px #FF99B6)'
                      }}
                    >
                      ❤️
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="font-joystix text-[#FF99B6] text-sm">
              HP: 100/100
            </div>
          </div>


          <div className="mt-6">
            <button 
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
              className="px-8 py-4 bg-gradient-to-r from-[#FF99B6] to-[#FF6B9D] border-3 border-[#FF99B6] rounded-lg font-joystix text-white text-base hover:scale-110 transition-all duration-300 shadow-[0_0_25px_#FF99B680] hover:shadow-[0_0_40px_#FF99B6] active:scale-95 cursor-pointer"
            >
              [ START GAME ]
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes cloud-float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(10px); }
        }
        .animate-cloud-float {
          animation: cloud-float 6s ease-in-out infinite;
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.8; }
        }
        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}