'use client';

import Content from './components/Content';
import CarbonHeader from './components/Header/page';
import { Theme } from '@carbon/react';
 
export function Providers({ children }) {
  return (
    <div>
        <Theme theme='g100'>
            <CarbonHeader />
        </Theme>
        <Content>{children}</Content>
    </div>
  );
}