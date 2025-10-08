"use client";

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export const ParticlesTS = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (_engine: unknown) => {
      await loadSlim(_engine as any);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: 'push' },
            onHover: { enable: true, mode: 'repulse' },
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: '#ffffff' },
          links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.5, width: 1 },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: false,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true }, value: 80 },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesTS;
