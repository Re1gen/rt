import './App.css';
import User from "./pages/user/User";
import Input from "./pages/Input/Input";
import Button from "./components/button/Button";
import Example from "./components/Example/Example";
import Buttondiv from "./components/Buttondiv/Buttondiv";
import MainPage from "./pages/mainPage/MainPage";
import DZ1 from "./DZ/DZ1";

function App() {
  return (
    <div className={"App"}>
      <MainPage/>
        <DZ1 me={"My name is MAULEN"}/>
    </div>
  );
}
export default App;
