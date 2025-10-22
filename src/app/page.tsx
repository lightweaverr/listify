import { Suspense } from 'react';
import SpotifyApp from '@/components/SpotifyApp';

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <SpotifyApp />
    </Suspense>
  );
}