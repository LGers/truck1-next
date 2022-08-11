import styles from './Header.module.scss';
import { Navigation } from '../Navigation';
import { A } from '../A';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <A href={'/'} text={'Truck1.eu - Best Trucks'} />
      </div>
      <Navigation />
    </header>
  );
};
