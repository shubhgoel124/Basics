// export function Page2() {
//     return (
//       <div className="min-h-screen bg-[#1A1B2F] text-white overflow-hidden">
//         <div className="w-[90%] max-w-[1900px] mx-auto bg-[#111325] min-h-screen relative overflow-x-visible">
//           {/* Header */}
//           <div className="w-[50%] bg-[#3E4A7B] h-[81px] flex items-center justify-between px-6">
//             <img 
//               src="../public/logo.png" 
//               alt="Hot Wheels Logo" 
//               className="h-[100px] pt-5 object-contain"
//             />
//             <button className="flex items-center gap-2 text-white">
//               <svg 
//                 className="w-8 h-8" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//               <span className="text-xl font-bold tracking-wide">Menu</span>
//             </button>
//           </div>
  
//           {/* Main Grid */}
//           <div className="grid grid-cols-2 pb-0">
//             {/* Left: Text Info */}
//             <div className="p-12 pb-2">
//               <p className="pl-30 text-[100px] leading-tight text-white">
//                 Nissan<br />Skyline<br />2000GT
//               </p>
  
//               <div className="flex ml-30 gap-6 mt-6">
//                 <button className="text-red-400 text-lg font-medium underline underline-offset-4">
//                   Specs
//                 </button>
//                 <button className="text-white/70 text-lg">
//                   ▶ Watch video
//                 </button>
//               </div>
//             </div>
  
//             {/* Right: Car Image */}
//             <div className="relative p-4 overflow-x-visible">
//               {/* Price + Cart */}
//               <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
//                 <span className="text-2xl font-[Impact] text-white">₹2499</span>
//                 <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-md cursor-pointer">
//                   🛒
//                 </div>
//               </div>
  
//               {/* Car Image */}
//               <img 
//                 src="../public/car.png" 
//                 alt="Nissan Skyline 2000GT" 
//                 className="absolute right-[-200px] scale-200 mr-80 top-[150px] w-[150%] object-contain z-0"
//               />
//             </div>
//           </div>
  
//           {/* Bottom Image Grid - Pulled Up */}
//           <main className="-mt-50">
//             <div className="grid grid-cols-2 gap-8">
//               <img 
//                 src="../public/car_side.png"
//                 alt="Nissan Skyline Side View" 
//                 className="scale-350 ml-100"
//               />
//               <img 
//                 src="../public/card.png"
//                 alt="Nissan Skyline Card Package" 
//                 className="scale-250"
//               />
//             </div>
//           </main>
  
//           {/* Back Button */}
//           <button className="fixed left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
//             <span className="text-3xl text-white/40">←</span>
//           </button>
//         </div>
//       </div>
//     )
//   }



import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export function Page2() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen bg-[#1A1B2F] text-white overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-[90%] max-w-[1900px] mx-auto bg-[#111325] min-h-screen relative overflow-x-visible">

        {/* Header */}
        <div className="w-[50%] bg-[#3E4A7B] h-[81px] flex items-center justify-between px-6">
          <img 
            src="../public/logo.png" 
            alt="Hot Wheels Logo" 
            className="h-[100px] pt-5 object-contain"
          />
          <button className="flex items-center gap-2 text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-xl font-bold tracking-wide">Menu</span>
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 pb-0">
          {/* Left: Text Info */}
          <motion.div 
            className="p-12 pb-2"
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="pl-30 text-[100px] leading-tight text-white">
              Nissan<br />Skyline<br />2000GT
            </p>
            <div className="flex ml-30 gap-6 mt-6">
              <button className="text-red-400 text-lg font-medium underline underline-offset-4">
                Specs
              </button>
              <button className="text-white/70 text-lg">▶ Watch video</button>
            </div>
          </motion.div>

          {/* Right: Car Image */}
          <motion.div 
            className="relative p-4 overflow-x-visible"
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
              <span className="text-2xl font-[Impact] text-white">₹2499</span>
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-md cursor-pointer">
                🛒
              </div>
            </div>
            <img 
              src="../public/car.png" 
              alt="Nissan Skyline 2000GT" 
              className="absolute right-[-200px] scale-200 mr-80 top-[150px] w-[150%] object-contain z-0"
            />
          </motion.div>
        </div>

        {/* Bottom Image Grid - Pulled Up */}
        <motion.main 
          className="-mt-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="grid grid-cols-2 gap-8">
            <img src="../public/car_side.png" alt="Side View" className="scale-350 ml-100" />
            <img src="../public/card.png" alt="Package" className="scale-250" />
          </div>
        </motion.main>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="fixed left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <span className="text-3xl text-white/40">←</span>
        </button>

        {/* Next Button */}
        <button
          onClick={() => navigate("/page3")} // 👉 Replace with your next route
          className="fixed right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <span className="text-3xl text-white/40">→</span>
        </button>
      </div>
    </motion.div>
  );
}

  

  