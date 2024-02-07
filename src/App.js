import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './Routes';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            )
          })

          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
