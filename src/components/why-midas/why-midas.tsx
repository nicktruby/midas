import styles from './why-midas.module.scss';

const HEADER = 'Why Midas';

const WhyMidas: React.FC = () => {
  return (
    <section id="why-midas" className={styles.whyMidas}>
      <div className="container">
        <h2>{HEADER}</h2>
      </div>
    </section>
  );
};

export default WhyMidas;
