'use client'; // This marks the component as a Client Component

import { Provider } from 'react-redux';
import store from '../store/store';
import React from 'react';


const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;