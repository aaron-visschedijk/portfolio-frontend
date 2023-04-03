import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';
import Dropdown from './components/Dropdown';
import HomePage from './pages/HomePage';


const mainPaths = [
  { path: '/', component: HomePage, name: 'Home', classPrefix: 'home', key: 'home' },
  { path: '/about', component: AboutPage, name: 'About', classPrefix: 'about', key: 'about' },
  { path: '/projects', component: ProjectsPage, name: 'Projects', classPrefix: 'projects', key: 'projects' },
];


const topLevelPath = (path: string) => {
  return "/" + path.split('/')[1];
}

function App() {
  const [mobile, setMobile] = useState(false);
  const location = useLocation().pathname;
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  console.log(transitionStage);


  useEffect(() => {
    if (topLevelPath(location) !== topLevelPath(displayLocation)) {
      setTransistionStage("fadeOut");
    } else {
      setDisplayLocation(location);
    }
  }, [location, displayLocation]);

  
  useEffect(() => {
    const handleWindowResize = () => {
      setMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div className="App">
      <p>{mobile}</p>
      {mobile ? <Dropdown paths={mainPaths} /> : <></>}
      <div className='Page'>
        {!mobile ? <Navbar paths={mainPaths} /> : <></>}

        <div className={`${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              setTransistionStage("fadeIn");
              setDisplayLocation(location);
            }
          }}>

          <Routes location={displayLocation}>
            {mainPaths.map((path) => (
              <Route key={path.key} path={path.path} Component={path.component} />)
            )}
            <Route key="project" path='/projects/:projectId' Component={ProjectsPage} />
            <Route key="error" path='*' Component={NotFoundPage} />
          </Routes>
        </div>

      </div>
    </div>
  )
}


export default App;
