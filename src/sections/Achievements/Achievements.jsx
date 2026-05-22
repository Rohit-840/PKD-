import { achievements } from '../../data/site.js';
import { useReveal } from '../../hooks/useReveal.js';
import './Achievements.css';

const Achievements = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="achievements" className="section achievements" ref={ref}>
      <div className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <header className="achievements__header">
          <span className="eyebrow">Leadership</span>
          <h2>
            Four pillars that anchor
            <br />
            her work today.
          </h2>
        </header>

        <ul className="pillars">
          {achievements.map((a) => (
            <li key={a.headline} className="pillar">
              <span className="pillar__bar" aria-hidden="true" />
              <h3>{a.headline}</h3>
              <p>{a.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
