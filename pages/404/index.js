import { Wrapper } from '../../components/Wrapper';
import { mainPageData } from '../../___mock___/pagesData';
import styles from "./404.module.scss";

export const Index = () => {
  const {h1, ...metaData } = mainPageData;

  return (
    <Wrapper {...metaData}>
      <div className={styles.error}>
        <h1>Oooops!... , This page not found</h1>
      </div>
    </Wrapper>
  );
};

export default Index;
