import Head from 'next/head';
import styles from './Wrapper.module.scss';

export const Wrapper = ({ children, keywords, title, description }) => {
  return (
    <>
      <Head>
        <meta name="language" http-equiv="content-language" content="EN" />
        <meta name="keywords" lang="en" content={keywords} />
        <meta name="description" lang="en" content={description} />
        <link rel="stylesheet" href="../../styles/reset.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet" />
        <title>{title}</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {children}
        </div>
      </div>
    </>
  );
};
