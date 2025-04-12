import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function HomePage() {
    const navigate = useNavigate();
  
    const goToNext = () => {
      navigate('/next');
    };
  
    return (
      <motion.div
        className="min-h-screen pt-[65px] bg-[#A7C8FB]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[90%] max-w-[1900px] mx-auto bg-white min-h-screen relative overflow-x-visible">
          {/* Header */}
          <div className="w-full bg-[#267EE2] h-[81px] flex items-center justify-between px-6">
            <img 
              src="../public/logo.png" 
              alt="Hot Wheels Logo" 
              className="h-[150px] pt-10 object-contain"
            />
            <button className="flex items-center gap-2 text-black">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="text-xl font-bold tracking-wide">Menu</span>
            </button>
          </div>
  
          {/* Content */}
          <div className="grid grid-cols-2 mt-10">
            <div className="p-12">
              <h1 className="text-[70px] font-bold text-black leading-tight">
                FUEL THE FIRE.<br />RULE THE ROAD
              </h1>
            </div>
            <div className="relative p-6">
            <img 
                src="../public/nissan-r35.png" 
                alt="Fast & Furious Nissan R35" 
                className="absolute top-[-63px]  right-0 w-[400px] mr-30 scale-[1.6]  ml-10  object-contain z-10"
              />
            </div>
          </div>
  
          {/* Product Grid */}
          <div className="bg-[#A7C8FB]">
            <div className="max-w-[1900px] mx-auto bg-white shadow-lg rounded-lg p-6">
              <div className="grid grid-cols-4 gap-6 pt-60">
                <div className="col-span-1 text-center">
                  <img src="../public/skyline.png" className="w-full mb-[-30px]" />
                  <p className="text-gray-700 mt-1">Skyline 2000 GT</p>
                </div>
                <div className="col-span-1 text-center">
                  <img src="../public/tin_car.png" className="w-full" />
                  <p className="text-gray-700 mt-4">BACK TO THE FUTURE TIME MACHINE</p>
                </div>
                <div className="col-span-1 text-center">
                  <img src="../public/avengers.png" className="w-full" />
                  <p className="text-gray-700 mt-4">AVENGERS OLD SCHOOL VAN</p>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center border-l-2 pl-4">
                  <h2 className="text-6xl text-[#DE6127] font-bold mb-4 text-right leading-tight">
                    More Than a <br /> Toy <br /> It’s a Track <br /> Star.
                  </h2>
                  <button className="bg-[#BF4C3F] text-white px-6 py-2 rounded-full hover:bg-[#a33d33] transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Right Arrow Button */}
          <button 
            onClick={goToNext}
            className="fixed right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors"
          >
            <span className="text-3xl text-black/40">→</span>
          </button>
        </div>
      </motion.div>



    );
  }