import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';


const mainPaths = [
  { path: '/', component: HomePage, name: 'Home', classPrefix: 'home', key: 'home' },
  { path: '/about', component: AboutPage, name: 'About', classPrefix: 'about', key: 'about' },
  { path: '/projects', component: ProjectsPage, name: 'Projects', classPrefix: 'projects', key: 'projects' },
];


function App() {
  return (
    <div className="App">
      <Navbar paths={mainPaths}/>
      <Routes>
        {mainPaths.map((path) => (
          <Route key={path.key} path={path.path} Component={path.component} />)
        )}
        <Route key="error" path='*' Component={NotFoundPage} />
      </Routes>
    </div>
  )
}

export default App;
