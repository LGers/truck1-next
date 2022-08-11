import styles from './Breadcrumbs.module.scss';
import { catalogData } from '../../___mock___/pagesData';
import { A } from '../A';

export const Breadcrumbs = () => {
  const total = catalogData.breadcrumbs.length;
  const breadcrumbs = catalogData.breadcrumbs.slice(0, total - 1);
  const lastBreadcrumb = catalogData.breadcrumbs[total - 1];

  return (
    <div className={styles.breadcrumbs}>
      <ul>
        {breadcrumbs.map((b, idx) => {
          return (
            <li key={idx}>
              <A href={b.href} text={b.text} />
              <div className={styles.arrow}>></div>
            </li>
          )
        })}
        <li>
          {lastBreadcrumb.text}
        </li>
      </ul>
    </div>
  )
};
