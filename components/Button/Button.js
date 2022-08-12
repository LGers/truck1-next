import styles from './Button.module.scss';

export const Button = ({ text }) => {
  return (
    <button className={styles.searchButton}>
      {text}
    </button>
  );
};
