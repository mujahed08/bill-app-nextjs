import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import  AppWrapper from '@/context' 


interface Props {
    children: React.ReactNode;
}
  

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <AppWrapper>
        {children}
      </AppWrapper>
    </div>
  );
};

export default Layout;
