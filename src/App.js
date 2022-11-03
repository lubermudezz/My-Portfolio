import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <div id='home'>
        <Home/>
      </div>
      <hr/>
      <div className='divSectionContainer' id='projects'>
        <h2 className='titleSection'>👩‍🎨 Mi Portfolio</h2>
        <Projects/>
      </div>
      <hr/>
      <div className='divSectionContainer' id='skills'>
        <h2 className='titleSection'>👩‍💻 Mis Habilidades</h2>
        <Skills/>
      </div>
      <hr/>
      <div className='divSectionContainer' id='about'>
        <h2 className='titleSection'>🙋‍♀️ Sobre Mi</h2>
        <About/>
      </div>
      <hr/>
      <div className='divSectionContainer' id='contact'>
        <h2 className='titleSection'>💁‍♀️ Contactame!</h2> 
        <Contact/> 
      </div>      
      <hr/>

    </div>
  );
}

export default App;
