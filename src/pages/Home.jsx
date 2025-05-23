import Layout from '../components/templates/Layout';
import Hero from '../components/organisms/Hero';
import About from '../components/organisms/About';
import Projects from '../components/organisms/Projects';
import Contact from '../components/organisms/Contact';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
