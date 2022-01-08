import { Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/dashboard';
import ExperiencePage from './pages/experience';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="experience/:experienceId" element={<ExperiencePage />} />
      </Route>
    </Routes>
  );
}

export default App;
