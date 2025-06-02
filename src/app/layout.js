import Bar from 'nyan/components/bar.js';
import Feets from 'nyan/components/feets.js';
import 'nyan/styles/all.scss';

const v = 'v1.0.0'; // x.x.x

export default function html({ children }) {
  return (
    <html>
      <head>
        <link rel='icon' type='image/png' href='/pantsu.png' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Jua'
        />
        <title>{'nyanpantsu: read eromanga(s) online for free! 💦'}</title>
        <meta name='og:title' content='nyanpantsu~' />
        <meta name='og:image' content='/pantsu-ass.png' />
        <meta name='twitter:card' content='summary' />
        <meta
          name='twitter:title'
          content='nyanpantsu: read eromanga(s) online for free! 💦'
        />
        <meta name='twitter:image' content='/pantsu-ass.png' />
      </head>
      <body id='appWrap'>
        <div id='app' style={{ minHeight: '100vh' }}>
          <Bar />
          {children}
        </div>
        <Feets v={v} />
      </body>
    </html>
  );
}
