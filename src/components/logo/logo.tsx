import styles from './logo.module.scss';

interface Props {
  size?: number;
  includeText?: boolean;
}

const Logo: React.FC<Props> = ({ size = 80, includeText = false }) => {
  return (
    <div className={styles.wrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width={size}
        // height={size}
        viewBox="0 0 150 150"
        fill="none"
        className={styles.svg}
      >
        <rect width="150" height="150" fill="#132734" />
        <rect x="25" y="117" width="100" height="14" fill="#007CC7" />
        <path
          d="M101.446 105V49.08L79.6059 90.72H70.3659L48.5259 49.08V105H31.9659V19.8H49.7259L74.9259 68.28L100.366 19.8H118.006V105H101.446Z"
          fill="#EEFBFB"
        />
      </svg>
      {includeText && (
        <div className={styles.companyName}>
          <span className={styles.bold}>Midas</span>
          <span>Leasing</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
