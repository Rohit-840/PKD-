import { FiArrowUpRight } from 'react-icons/fi';
import { ventures } from '../../data/site.js';
import { useReveal } from '../../hooks/useReveal.js';
import './Ventures.css';

const Ventures = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="ventures" className="section ventures" ref={ref}>
      <div className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <header className="ventures__header">
          <span className="eyebrow">Ventures</span>
          <h2>Two ventures, one philosophy.</h2>
          <p className="lede">
            Veva Realty and VSpaces by Veva are two sides of the same belief — that premium
            real estate deserves curation, conviction, and a longer view than the market
            typically allows.
          </p>
        </header>

        <div className="ventures__grid">
          {ventures.map((v) => (
            <article key={v.name} className="venture">
              <div className="venture__top">
                <h3>{v.name}</h3>
                <span className="venture__role">{v.role}</span>
              </div>
              <p>{v.description}</p>
              <a
                className="venture__link"
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{v.label}</span>
                <FiArrowUpRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
