import { Route, Routes } from 'react-router-dom';
import WeatherComponent from './Weather/Weather.component';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<WeatherComponent />}></Route>


      </Routes>


    </div>
  );
}

export default App;
