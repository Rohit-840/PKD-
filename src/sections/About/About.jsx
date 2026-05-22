import { about, profile } from '../../data/site.js';
import { useReveal } from '../../hooks/useReveal.js';
import './About.css';

const About = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className={`container about__inner reveal ${visible ? 'is-visible' : ''}`}>
        <div className="about__heading">
          <span className="eyebrow">About</span>
          <h2>
            A measured voice in an industry
            <br />
            that rewards conviction.
          </h2>
        </div>

        <div className="about__body">
          <p className="lede">{about.intro}</p>
          <p>{about.body}</p>

          <figure className="about__quote">
            <blockquote>“{about.pullquote}”</blockquote>
            <figcaption>— {profile.shortName} Kar Dutta</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
