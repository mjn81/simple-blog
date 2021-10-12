import './template/assets/reset.css'
import './template/assets/style.css';
import Footer from './template/Footer';
import Home from './template/Home';
import TopBar from './template/TopBar';
import Post from './template/Post';
import {BrowserRouter as Router, Route , Switch  } from 'react-router-dom';



function App() {

  return (
    <Router>
      <div className="landing-page">
        <TopBar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/blogs/:id"><Post /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
