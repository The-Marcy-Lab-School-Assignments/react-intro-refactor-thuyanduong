import './App.css';
import Header from './Header'
import NavBar from './NavBar'
import CardContainer from './CardContainer'

const pageData = [{text: "About", link: "/about"}, {text: "Our Team", link: "/team"}, {text: "Pricing", link: "/pricing"}];

function App() {
  return (
    <div className="App">
      <NavBar pages={pageData}/>
      <Header title="hi"/>
      <CardContainer />
    </div>
  );
}

export default App;
