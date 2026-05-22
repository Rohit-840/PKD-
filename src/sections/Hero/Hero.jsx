import { motion } from 'framer-motion';
import { profile } from '../../data/site.js';
import './Hero.css';


const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__text">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {profile.location}
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="hero__role"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {profile.title} <span className="hero__dot">·</span> Real Estate Strategist
            <span className="hero__dot">·</span> Mentor
          </motion.p>

          <motion.p
            className="hero__tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#contact" className="btn btn-primary">
              Schedule a Conversation
            </a>
            <a href="#about" className="btn btn-ghost">
              Learn More
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="hero__portrait-frame">
            <img
              src="/2.jpg"
              alt={`${profile.name} — ${profile.title}`}
              className="hero__portrait-img"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.aside>
      </div>

    </section>
  );
};

export default Hero;
