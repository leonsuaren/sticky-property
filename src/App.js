import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/navbar';
import { Sticky } from './views/sticky';
import { Positioning } from './views/positioning';
import { Relative } from './views/relative';
import { Absolute } from './views/absolute';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/sticky' element={<Sticky />} />
            <Route path='/positioning' element={<Positioning />} />
            <Route path='/relative' element={<Relative />} />
            <Route path='/absolute' element={<Absolute />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
