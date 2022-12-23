import './App.css'
import MainDash from './Components/MainDash/MainDash';
import Sidebar from './Components/Sidebar/Sidebar';
import RightSide from './Components/RightSide/RightSide';
import Auth from './Components/auth/Auth';
function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          {/* <Sidebar/> */}
          {/* <MainDash/>
          <RightSide/> */}
          <Auth/>
        </div>
    </div>
  );
}

export default App;

