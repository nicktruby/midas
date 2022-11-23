import styles from './about-us.module.scss';

const HEADING = 'About Us';
const PARA_1 =
  'Midas Leasing Ltd was formed in 1996 and it has grown to become one of the UK’s leading finance brokers. The key to the development and growth of Midas has been the promise to offer a specific proven financial solutions to all of our equipment suppliers and our customers.';
const PARA_2 =
  'Many thousands of our customers have benefitted by regular use of many facilities.';
const PARA_3 =
  'We know each bsuiness has individual needs and to be successfull Midas will identify their specific requires and set up bespoke finance packages';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <div className="container">
        <h2>{HEADING}</h2>
        <p>{PARA_1}</p>
        <p>{PARA_2}</p>
        <p>{PARA_3}</p>
      </div>
    </section>
  );
};

export default AboutUs;
