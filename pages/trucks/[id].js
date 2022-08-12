import styles from './trucks.module.scss';
import { Wrapper } from '../../components/Wrapper';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { catalogData } from '../../___mock___/pagesData';
import { useRouter } from 'next/router';
import { TruckSearchBar } from '../../components/TruckSearchBar';

const searchTypes = [...new Set(catalogData.stock.map((truck) => truck.type))];
const searchAxleConfiguration = [...new Set(catalogData.stock.map((truck) => truck.axle_configuration))];
const totalItems=catalogData.stock.length;

export const Index = () => {
  const { query } = useRouter();
  const h1 = catalogData.page_meta.h1;

  const metaData = {
    keywords: catalogData.page_meta.meta_keywords,
    description: catalogData.page_meta.meta_description,
    title: catalogData.page_meta.title,
  }
  const breadcrumbs = catalogData.breadcrumbs;

  return (
    <Wrapper {...metaData}>
      <Breadcrumbs breadcrumbs={breadcrumbs}/>
      <main>
        <h1 className={styles.h1}>{h1}</h1>
        <TruckSearchBar
          total={totalItems}
          searchTypes={searchTypes}
          searchAxleConfiguration={searchAxleConfiguration}
        />
      </main>
    </Wrapper>
  );
};

export default Index;
