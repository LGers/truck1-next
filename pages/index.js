import { Wrapper } from '../components/Wrapper';
import { mainPageData } from '../___mock___/pagesData';
import { Breadcrumbs } from '../components/Breadcrumbs';

const Index = () => {
  const {h1, ...metaData } = mainPageData;

  return (
    <Wrapper {...metaData}>
      <Breadcrumbs />
        <h1>{h1}</h1>
    </Wrapper>
  );
};

export default Index;
