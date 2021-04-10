import logo from './logo.svg';
import './App.css';
import ButtonCl from './Components/ButtonCl/ButtonCl'
import ButtonFc from './Components/ButtonFc/ButtonFc'
import Navbar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer/>
      <header className="App-header">
        <ButtonFc text={'Soy el boton'} color={'red'} padding={'15px'}/> 
      </header>
    </div>
  );
}

export default App;
