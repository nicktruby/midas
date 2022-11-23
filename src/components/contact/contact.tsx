import styles from './contact.module.scss';

const HEADER = 'Contact';
const ADDRESS =
  'Midas House, 7 Maes Delfryn, LLanelli, Carmarthenshire, SA14 9PX';
const EMAIL = 'vince@midasleasing.co.uk';
const LANDLINE = '01554 788806';
const MOBILE = '07803 188788';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2>{HEADER}</h2>
        <p>{EMAIL}</p>
        <p>{MOBILE}</p>
        <p>{LANDLINE}</p>
        <p>{ADDRESS}</p>
      </div>
    </section>
  );
};

export default Contact;
