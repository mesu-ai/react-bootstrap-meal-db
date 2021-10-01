
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './components/newsapi/News';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <News></News>
      
    </div>
  );
}

export default App;
