import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  const [data, setData] = React.useState<string>("");

  React.useEffect(() => {
    fetch('https://4i3qvu8esj.execute-api.eu-central-1.amazonaws.com/dev/about')
      .then(response => response.json())
      .then(data => setData(data[0].fields.title));
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/about' Component={AboutPage} />
        <Route path='/projects' Component={ProjectsPage} />
        <Route path='*' Component={NotFoundPage} />
      </Routes>
    </div>
  )
}

export default App;
