import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flow RJ RP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-animated"></div>

      <div className="box-maintenance">
        <img src="/img/logo.png" alt="Flow RP" className="img-responsive" style={{ width: '400px', margin: 'auto' }} />

        <h1>
          Flow RJ Roleplay
        </h1>

        <h2>
          Site em Construção
        </h2>

        <p>
          Discord: <a href="http://discord.gg/tzdhgprV2R" target="_blank">http://discord.gg/tzdhgprV2R</a>
        </p>
      </div>

      <style jsx>{`
      @keyframes changeBackgroundColor {
        0% {
          background-color: #202225;
        }
        15% {
          background-color: #202225;
        }
        50% {
          background-color: #692699;
        }
        85% {
          background-color: #202225;
        }
        100% {
          background-color: #202225;
        }
      }
      @keyframes changeColor {
        0% {
          color: #923CCF;
        }
        15% {
          color: #923CCF;
        }
        50% {
          color: #fff;
        }
        85% {
          color: #923CCF;
        }
        100% {
          color: #923CCF;
        }
      }
      @keyframes changeSize {
        0% {
          -moz-transform: scale(1);
          -webkit-transform: scale(1);
          -o-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
        }
        15% {
          -moz-transform: scale(1);
          -webkit-transform: scale(1);
          -o-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
        }
        50% {
          -moz-transform: scale(1.1);
          -webkit-transform: scale(1.1);
          -o-transform: scale(1.1);
          -ms-transform: scale(1.1);
          transform: scale(1.1);
        }
        85% {
          -moz-transform: scale(1);
          -webkit-transform: scale(1);
          -o-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
        }
        100% {
          -moz-transform: scale(1);
          -webkit-transform: scale(1);
          -o-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
        }
      }
      .bg-animated {
        width: 100vw;
        height: 100vh;
        animation: changeBackgroundColor 14s infinite;
        opacity: 0.5;
      }
      .box-maintenance {
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        padding: 15px;
        text-align: center;
        text-transform: uppercase;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.8);
      }
      .box-maintenance img {
        animation: changeSize 8s infinite;
      }
      .box-maintenance h1 {
        font-size: 14px;
      }
      .box-maintenance h2 {
        font-size: 20px;
        font-weight: bold;
      }
      .box-maintenance p {
        font-size: 14px;
      }
      .box-maintenance a {
        text-decoration: underline;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        animation: changeColor 14s infinite;
      }
      @media screen and (min-width: 768px) {
        .box-maintenance {
          position: fixed;
          top: 50%;
          left: 50%;
          padding: 0;
          margin-top: -210px;
          margin-left: -300px;
          width: 600px;
          height: 420px;
        }
        .box-maintenance h1 {
          font-size: 24px;
        }
        .box-maintenance h2 {
          font-size: 48px;
        }
        .box-maintenance p {
          font-size: 18px;
        }
      }
      `}</style>

      <style jsx global>{`
      @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofAnsSkZg.ttf) format('truetype');
      }
      .font-nunito {
        font-family: 'Nunito', sans-serif;
      }
      .underline {
        text-decoration: underline;
      }
      .color-ds-1 {
        color: #36393F;
      }
      .color-ds-2 {
        color: #2F3136;
      }
      .color-ds-3 {
        color: #202225;
      }
      .color-ds-4 {
        color: #40444B;
      }
      .color-logo-1 {
        color: #923CCF;
      }
      .color-logo-2 {
        color: #FAAA0E;
      }
      .font-size-14 {
        font-size: 14px;
      }
      .font-size-18 {
        font-size: 18px;
      }
      .font-size-22 {
        font-size: 22px;
      }
      .font-size-26 {
        font-size: 26px;
      }
      .font-size-30 {
        font-size: 30px;
      }
      body::-webkit-scrollbar {
        width: 8px;
      }
      body::-webkit-scrollbar-track {
        background-color: #36393F;
      }
      body::-webkit-scrollbar-corner {
        background-color: #36393F;
      }
      body::-webkit-scrollbar-thumb {
        background-color: #923CCF;
      }
      .btn {
        outline: none;
      }
      .pattern-1 {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAL0lEQVQYV2M0s7T//+rlMwZGBghgVFBS/Q/j/IcJgGTExKUYwCoVlVRBEmAAYgAA/gQNnlK88bUAAAAASUVORK5CYII=');
      }
      .pattern-2 {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAANUlEQVQYV2M0s7T/zwAFfPwCDIzmlvb/QSL8/AIMHz9+gAiAZD59/ABWx+ji4f8fxGGEagMAGjMQ6Haee2EAAAAASUVORK5CYII=');
      }
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
      }
      body {
        background-color: #202225;
        color: #fff;
        font-family: 'Nunito', sans-serif;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAANUlEQVQYV2M0s7T/zwAFfPwCDIzmlvb/QSL8/AIMHz9+gAiAZD59/ABWx+ji4f8fxGGEagMAGjMQ6Haee2EAAAAASUVORK5CYII=');
      }
      `}</style>
    </>
  )
}
