import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Consultoria from './components/Consultoria';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
function App() {  
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <About />
        <Services/>
        <Consultoria/>
        <Benefits/>
        <Contact/>
      </main>
    </div>
  );  
}

export default App;
