import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import { Outlet } from 'react-router';
import BasicNavbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route
          element={
            <>
              <BasicNavbar />
              <Outlet />
            </>
          }
        >
            <Route path='/' element= { <Landing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
