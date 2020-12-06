import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Flow RJ RP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Flow RJ RP
      </h1>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
