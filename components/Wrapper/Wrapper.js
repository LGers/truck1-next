import Head from 'next/head';
import styles from './Wrapper.module.scss';
import { Header } from '../Header';

export const Wrapper = ({ children, keywords, title, description }) => {
  return (
    <>
      <Head>
        <meta name="language" httpEquiv="content-language" content="EN" />
        <meta name="keywords" lang="en" content={keywords} />
        <meta name="description" lang="en" content={description} />
        <title>{title}</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};
