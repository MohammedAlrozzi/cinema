import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Journey from './components/Journey';
import Blog from './components/Blog';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <AboutUs />
        <Journey />
        <Blog />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;
