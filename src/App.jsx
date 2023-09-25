import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home"
import ProjectGallery from "./pages/ProjectGallery"
import Contact from "./pages/Contact"
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projectGallery" component={ProjectGallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projectCard" component={ProjectCard} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
