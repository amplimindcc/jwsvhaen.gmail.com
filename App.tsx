import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { State } from './pages/State';
import { CustomHook } from './pages/CustomHook';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <NavLink to="/state">
            State
        </NavLink>
        <span style={{margin: "20px"}}></span>
        <NavLink to="/custom-hook">
            Custom Hook
        </NavLink>

        <Routes>
          <Route 
            path="/state"
            element={
              <State />
            }
            />
          <Route 
            path="/custom-hook"
            element={
              <CustomHook />
            }
            />
        </Routes>
      </Router>
    </>
  )
}

export default App
