
import './App.css';
import ThemeProvider from './components/ThemeProvider';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThemeSwitch from './components/ThemeSwitch';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Books from './components/Books';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
       <ThemeProvider>
          <ThemeSwitch />
          <Header /> 
          <HeroSection />
          
          <footer style={{position:'absolute',bottom:'-20px',width:'100%'}}>
            <Footer />
          </footer>
        </ThemeProvider>
    </div>
  );
}

export default App;
