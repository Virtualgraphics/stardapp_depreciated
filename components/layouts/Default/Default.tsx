import { FC, ReactNode } from 'react';



import Head from 'next/head';
import Sidebar from '@/components/modules/Sidebar';

const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName} `}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>


   

    <div className="w-full p-0 m-0">
      {children}
    </div>
   
  </>
);

export default Default;