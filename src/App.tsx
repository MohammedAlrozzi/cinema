import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CharacterGallery from './components/CharacterGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <CharacterGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
