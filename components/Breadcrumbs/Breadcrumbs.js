import styles from './Breadcrumbs.module.scss';
import { A } from '../A';

export const Breadcrumbs = ({ breadcrumbs }) => {
  const total = breadcrumbs.length;
  const firstBreadcrumbs = breadcrumbs.slice(0, total - 1);
  const lastBreadcrumb = breadcrumbs[total - 1];

  return (
    <div className={styles.breadcrumbs}>
      <ul>
        {firstBreadcrumbs.map((b, idx) => {
          const href = b.href === '/' ? '/' : `/${b.href}`;
          return (
            <li key={idx}>
              <A href={href} text={b.text} />
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
