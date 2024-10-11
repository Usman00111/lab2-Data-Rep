import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Read from './Components/read';
import Create from './Components/create';
import Movies from './Components/movies';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* all this does is basically changes the url to locallhoast300/ component name rather than 
        requesting again and overloading *
        all of this done in routes everything in it, are changed based on url */}
        <Route path="/" element={<Content />} /> 
        <Route path="/read" element={<Read/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;