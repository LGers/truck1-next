import styles from './Navigation.module.scss';
import { catalogData } from '../../___mock___/pagesData';
import { A } from '../A';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {catalogData.nav.map((n, idx) => {
          const href = n.href === '/' ? '/' : `/${n.href}`;
          return <li key={n.text + idx}>
            <A href={href} text={n.text} />
          </li>
        })}
      </ul>
    </nav>
  );
};
