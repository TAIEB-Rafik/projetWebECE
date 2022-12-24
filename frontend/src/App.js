import './App.css'
import Auth from './Components/auth/Auth';
import MainDash from './Components/MainDash/MainDash';
import RightSide from './Components/RightSide/RightSide';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
        
      </div>
       */}
       <Auth/>
    </div>
  );
}

export default App;