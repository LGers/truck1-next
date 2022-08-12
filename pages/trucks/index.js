import styles from './trucks.module.scss';
import { Wrapper } from '../../components/Wrapper';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { mainPageData } from '../../___mock___/pagesData';
import { A } from '../../components/A';

export const Index = () => {
  const {h1, ...metaData } = mainPageData;
  const breadcrumbs = [
    {
      "href": "/",
      "text": "Home"
    },
    {
      "href": "trucks",
      "text": "Trucks"
    },
  ];

  return (
    <Wrapper {...metaData}>
      <Breadcrumbs breadcrumbs={breadcrumbs}/>
      <h1>{h1}</h1>
      <A href={'trucks/daf'} text={'Only DAF now here. See DAF...'}/>
    </Wrapper>
  );
};

export default Index;