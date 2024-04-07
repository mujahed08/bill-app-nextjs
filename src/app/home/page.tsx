import Header from '@/components/Header';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
        <h1 className="text-3xl font-bold mt-8 p-6">Your Page Content</h1>
        <p>This is where your page content goes...</p>
        <div className="flex flex-col">
            <div className="p-4">I</div>
            <div className="p-4">II</div>
        </div>
    </div>
  );
};

export default Home;
