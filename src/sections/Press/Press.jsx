import { press } from '../../data/site.js';
import { useReveal } from '../../hooks/useReveal.js';
import './Press.css';


const Press = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="press" ref={ref}>
      <div className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <div className="press__row">
          <span className="press__label">She speaks on</span>
          <ul className="press__list">
            {press.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Press;
