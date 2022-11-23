import styles from './footer.module.scss';

const FCA =
  'Midas Leasing Ltd is Authorised & Regulated by the FCA under Interim Permission Number 418410';
const COPYWRITE = '© Midas Leasing 2022';

const Footer: React.FC = () => {
  return (
    <footer className="container">
      <div className={styles.footer}>
        <p>{FCA}</p>
        <p>{COPYWRITE}</p>
      </div>
    </footer>
  );
};

export default Footer;
