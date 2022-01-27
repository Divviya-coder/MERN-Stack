import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "93vh" }}></main>
      <Footer />
    </div>
  );
}

export default App;
