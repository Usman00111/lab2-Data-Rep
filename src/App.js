import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* when you click home the element from content would show */}
        <Route path="/ " element={<Content />} /> 
        <Route path="/read" element={<Header></Header>} />
        <Route path="/create" element={<Footer></Footer>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;