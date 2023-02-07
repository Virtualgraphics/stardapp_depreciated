
import { Default } from '@/components/layouts/Default';
import Webtoon from '@/components/templates/webtoon/Webtoon';

import type { NextPage } from 'next';

const WEBTOON: NextPage = () => {
  return (

    <Default pageName="WEBTOON">
    <Webtoon/>
  </Default>
  
  );
};

export default WEBTOON;