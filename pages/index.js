import { Wrapper } from '../components/Wrapper';
import { mainPageData } from '../___mock___/pagesData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { A } from '../components/A';

const Index = () => {
  const {h1, ...metaData } = mainPageData;

  return (
    <Wrapper {...metaData}>
      <Breadcrumbs breadcrumbs={[{ href: '/', text: 'Home' }]}/>
        <h1>{h1}</h1>
        <div>Content will be later</div>
        <A href={'trucks'} text={'May be you want to see trucks'}/>
    </Wrapper>
  );
};

export default Index;
