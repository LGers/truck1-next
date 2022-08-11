import styles from './Navigation.module.scss';
import { catalogData } from '../../___mock___/pagesData';
import { A } from '../A';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {catalogData.nav.map((n, idx) => <li key={n.text + idx}><A {...n} /></li>)}
      </ul>
    </nav>
  );
};
