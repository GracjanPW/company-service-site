"use client";
import { About } from '@/components/home/about';
import { Hero } from '@/components/home/hero';
import { Services } from '@/components/home/services';
import { useFadeIn } from '@/hooks/useFadeIn';
import React from 'react';

export default function HomePage() {
  useFadeIn();
  return (
    <>
      <Hero />
      <About />
      <Services />
      
    </>
  );
}
