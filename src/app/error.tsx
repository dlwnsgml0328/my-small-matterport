'use client';

import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Not found',
};

const Error = () => {
  return <h1>Error occurred in the app</h1>;
};

export default Error;
