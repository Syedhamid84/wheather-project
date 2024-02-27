import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import { MainComponent } from './Maincomponent/MainComponent';
import WeatherComponent from './Weather/Weather.component';
import Location from './WeatherLocation/WeatherLocation';
import { ChildComponent } from './Childcomponent/ChildComponent';
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <WeatherComponent/>
      <MainComponent/>
      {/* <div className='mt-4'> 
      <Location/>
      </div> */}
      <Routes>
        <Route path="/" element={<WeatherComponent />}></Route>
        <Route path="parent" element={<MainComponent />}> </Route>
        <Route path="child" element={<ChildComponent />}></Route>

      </Routes>


    </div>
  );
}

export default App;
