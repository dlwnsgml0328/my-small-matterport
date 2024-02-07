'use client';

import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={'/'}>/</Link>
        </li>
        <li>
          <Link href={'/hey'}>/hey</Link>
        </li>
        <li>
          <Link href={'/matterport'}>/matterport</Link>
        </li>
        <li>
          <Link href={'/matterport/jobs/sales'}>/matterport/jobs/sales</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
