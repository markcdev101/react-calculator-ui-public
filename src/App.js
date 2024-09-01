import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CalculatorPage from './pages/CalculatorPage';
import '@mantine/core/styles.css';

function App() {
  return (
    <div>

      <div className="App">
        <header className="App-header">
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/v1/calculator" />} />
              <Route path="*" element={<Navigate to="/v1/calculator" />} />
              <Route path="/v1/calculator" element={<CalculatorPage></CalculatorPage>}></Route>
            </Routes>
          </Router>
        </header>
      </div>
    </div>


  );
}

export default App;
