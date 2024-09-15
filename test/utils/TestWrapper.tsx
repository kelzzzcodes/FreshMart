// test/utils/TestWrapper.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootLayout from '../../src/_root/RootLayout';

interface TestWrapperProps {
  children: React.ReactNode;
}

const TestWrapper: React.FC<TestWrapperProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <RootLayout>
        {children}
      </RootLayout>
    </BrowserRouter>
  );
}

export default TestWrapper;
