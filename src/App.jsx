import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

import Hero from './sections/Hero/Hero.jsx';
import About from './sections/About/About.jsx';
import Journey from './sections/Journey/Journey.jsx';
import Expertise from './sections/Expertise/Expertise.jsx';
import Ventures from './sections/Ventures/Ventures.jsx';
import Achievements from './sections/Achievements/Achievements.jsx';
import Press from './sections/Press/Press.jsx';
import Contact from './sections/Contact/Contact.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="hairline" />
        <About />
        <Journey />
        <Expertise />
        <Ventures />
        <Achievements />
        <Press />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
