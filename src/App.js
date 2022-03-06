import logo from "./logo.svg";
import "./App.css";
import Basic1 from "./components/Basic1";
import Basic2 from "./components/Basic2";
import Basic3 from "./components/Basic3";
import Basic4 from "./components/Basic4";

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <Basic1 name='aaa' price='10000' />
                <Basic2 />
                <Basic3 />
                <Basic4 />
            </header>
        </div>
    );
}

export default App;
