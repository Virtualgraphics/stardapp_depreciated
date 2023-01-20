import { FC, ReactNode } from 'react';

import { NavBar } from '@/components/modules/navbar';

import Head from 'next/head';


const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName} `}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

<NavBar/>
   

    <div className="w-full p-0 m-0">
      {children}
    </div>
   
  </>
);

export default Default;