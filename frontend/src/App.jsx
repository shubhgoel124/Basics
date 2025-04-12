import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {Page2} from './components/Page2';
import {Page3} from './components/Page3';
import { HomePage } from './components/HomePage';



function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/next" element={<Page2 />} />
          <Route path="page3" element={<Page3/>}/>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
