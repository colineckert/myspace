import { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About',
  description: 'The greatest social media company in the world!',
};

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>We are a social media company!</p>
    </main>
  );
}
