
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

// imported the components 4 .js files 

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <NavigationBar />
    </div>
  )
}

export default App;
