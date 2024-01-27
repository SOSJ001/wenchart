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

        <title>WenChart</title>
        <meta name="title" content="WenChart" />
        <meta name="description" content="Helps you know what is going on with $wen/USDC" />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wenchart-sos-being-nice.vercel.app/" />
        <meta property="og:title" content="WenChart" />
        <meta property="og:description" content="Helps you know what is going on with $wen/USDC" />
        <meta property="og:image" content="https://wenchart-sos-being-nice.vercel.app/OG.png" />


        <meta property="twitter:card" content="$wen/USDC" />
        <meta property="twitter:url" content="https://wenchart-sos-being-nice.vercel.app/" />
        <meta property="twitter:title" content="WenChart" />
        <meta property="twitter:description" content="Helps you know what is going on with $wen/USDC" />
        <meta property="twitter:image" content="https://wenchart-sos-being-nice.vercel.app/OG.png" />


      </Head>
      <WenChart />
    </div>
  );
}
