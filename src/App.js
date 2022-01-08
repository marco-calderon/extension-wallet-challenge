import { Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/dashboard';
import ExperiencePage from './pages/experience';
import { Route } from 'react-router-dom';
import DashboardContainer from './containers/dashboard-container';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<DashboardContainer />}></Route>
          <Route path="experience/:experienceId" element={<ExperiencePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
