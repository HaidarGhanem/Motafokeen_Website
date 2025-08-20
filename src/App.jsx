
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Activity from './pages/Activity/Activity';
import News from './pages/New/New';
import Join from './pages/Join/Join';
import About from './pages/About/About';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/news" element={<News />} />
        <Route path="/join" element={<Join />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
