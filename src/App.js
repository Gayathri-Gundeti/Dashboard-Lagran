import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { MainDashboard } from './components/main-dashboard/main-dashboard';
import { Sidebar } from './components/side-bar/sidebar';
import { Users } from './components/Users/users';
import { Categories } from './components/Categories/categories';
import { Pages } from './components/Pages/pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sidebar/>}/>
      <Route path="/Dashboard" element={<MainDashboard/>}/>
      <Route path="/Users" element={<Users/>}/>
      <Route path="/Categories" element={<Categories/>}/>
      <Route path="/Pages" element={<Pages/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
