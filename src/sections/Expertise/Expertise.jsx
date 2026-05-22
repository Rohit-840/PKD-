import { expertise } from '../../data/site.js';
import { useReveal } from '../../hooks/useReveal.js';
import './Expertise.css';

const Expertise = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="expertise" className="section expertise" ref={ref}>
      <div className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <header className="expertise__header">
          <span className="eyebrow">Expertise</span>
          <h2>Where her advisory matters most.</h2>
        </header>

        <div className="expertise__grid">
          {expertise.map((item, i) => (
            <article key={item.title} className="expertise__card">
              <span className="expertise__num">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
