import './template/assets/reset.css'
import './template/assets/style.css';
import Home from './template/Home';
import TopBar from './template/TopBar';
function App() {

  return (
    <div className="landing-page">
      <TopBar />
      <Home />
    </div>
  );
}

export default App;
