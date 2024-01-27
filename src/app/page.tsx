import dynamic from 'next/dynamic';

// Import your component using dynamic import
const WenChart = dynamic(
  () => import('./components/wenchart'),
  { ssr: false } // This will disable server-side rendering for this component
);

export default function Home() {
  return (
    <div>
      <WenChart />
    </div>
  );
}
