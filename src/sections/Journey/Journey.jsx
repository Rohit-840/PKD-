import { journey } from '../../data/site.js';
import { useReveal } from '../../hooks/useReveal.js';
import './Journey.css';

const Journey = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="journey" className="section journey" ref={ref}>
      <div className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <header className="journey__header">
          <span className="eyebrow">Journey</span>
          <h2>The path to building Veva.</h2>
          <p className="lede">
            From early commercial roles to founding one of Hyderabad’s most considered real
            estate firms — a quiet, deliberate climb.
          </p>
        </header>

        <ol className="timeline">
          {journey.map((stage, i) => (
            <li key={stage.title} className="timeline__item">
              <span className="timeline__index">{String(i + 1).padStart(2, '0')}</span>
              <div className="timeline__content">
                <span className="timeline__year">{stage.year}</span>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Journey;
