import './template/assets/reset.css'
import './template/assets/style.css';
import Footer from './template/Footer';
import Home from './template/Home';
import TopBar from './template/TopBar';
function App() {

  return (
    <div className="landing-page">
      <TopBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
