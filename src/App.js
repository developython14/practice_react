import logo from './logo.svg';
import './App.css';
import { Welcome } from './componant/componant';
import Menu from './componant/MenuComponent';
import Header from './componant/header';
import Footer from './componant/footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
