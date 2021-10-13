import './template/assets/reset.css'
import './template/assets/style.css';
import Footer from './template/Footer';
import Home from './template/Home';
import TopBar from './template/TopBar';
import Post from './template/Post';
import Category from './template/Category';
import Faq from './template/Faq';
import NotFound from './template/404';
import {BrowserRouter as Router, Route , Switch  } from 'react-router-dom';



function App() {

  return (
    <Router>
      <div className="landing-page">
        <TopBar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/blogs/:id"><Post /></Route>
          <Route path="/cat/:tag"><Category /></Route>
          <Route path="/FAQ"><Faq /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
