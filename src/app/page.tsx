import dynamic from 'next/dynamic';
import Head from 'next/head'

// Import your component using dynamic import
const WenChart = dynamic(
  () => import('./components/wenchart'),
  { ssr: false } // This will disable server-side rendering for this component
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>$Wen/USDC X S.O.S</title>
        <meta name="description" content="Helps you know what is going on with $wen/USDC" />
        <meta property="og:title" content="$Wen/USDC X S.O.S" />
        <meta property="og:description" content="$Wen/USDC X S.O.S" />
        <meta property="og:image" content={`https://wenchart-sos-being-nice.vercel.app/OG.png`} />
        <meta property="og:url" content='https://wenchart-sos-being-nice.vercel.app/' />
        <meta property="og:type" content="website" />
        {/* Other meta tags as needed */}
      </Head>
      <WenChart />
    </div>
  );
}
