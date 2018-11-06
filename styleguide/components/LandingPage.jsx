import React from 'react';
import remcalc from 'remcalc';
import { injectGlobal } from 'styled-components';
import Contribute from './landing-sections/Contribute';
import Home from './landing-sections/Home';
import Install from './landing-sections/Install';
import Tester from './landing-sections/Tester';
import UseCases from './landing-sections/UseCases';

injectGlobal`
  /*! http://devinhunt.github.io/typebase.css/ v0.1.0 | MIT License */
  /* Setup */
  html {
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif !important;
    font-size: 122%;
    color: #4B4E6A;
    -webkit-font-smoothing: antialiased;
  }

  *,
  html {
      box-sizing: border-box;
  }
  *, *:before, *:after {
      box-sizing: inherit;
  }

  #rsg-root {
    main {
      a {
        // font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif !important;
        font-weight: 600 !important;
        color: #6168B5;
      }
    }
    /* Copy & Lists */
    ul,
    ol {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      font-size: ${remcalc(14)};
    }
    ul li,
    ol li {
      line-height: 1.5rem;
    }
    ul ul,
    ol ul,
    ul ol,
    ol ol {
      margin-top: 0;
      margin-bottom: 0;
    }
    blockquote {
      line-height: 1.5rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
    /* Headings */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 1.5rem;
      margin-bottom: 0;
      line-height: 1.5rem;
    }
    h1 {
      font-size: ${remcalc(32)};
      line-height: ${remcalc(28 * 1.5)};
      margin-top: 2rem;
      margin-bottom: ${remcalc(10)};;
    }
    h2 {
      font-size: ${remcalc(28)};
      line-height: ${remcalc(28 * 1.3)};
      margin-top: 2rem;
    }
    h3 {
      font-size: ${remcalc(20)};
    }
    h4 {
      font-size: ${remcalc(16)};
      font-weight: 600;
    }
    h5 {
      font-size: ${remcalc(14)};
      font-weight: 600;
    }
    h6 {
      font-size: 0.3535rem;
    }
    .text-right {
      text-align: right;
    }
    .text-center {
      text-align: center;
    }
    .cm-s-base16-light span.cm-string {
      color: #4B4E6A;
    }
    .landingPage {
      overflow: hidden;
    }
  } // #root

`;

const contributors = [
  {
    name: 'Elizabet Oliveira',
    githubUsername: 'miukimiu',
    githubUrl: 'https://github.com/miukimiu',
    imageUrl: 'https://avatars1.githubusercontent.com/u/2750668?s=460&v=4'
  },
  {
    name: 'Alicia Catalina',
    githubUsername: 'aliciacatalina',
    githubUrl: 'https://github.com/aliciacatalina',
    imageUrl: 'https://avatars1.githubusercontent.com/u/1421493?s=460&v=4'
  },
  {
    name: 'Sara Vieira',
    githubUsername: 'SaraVieira',
    githubUrl: 'https://github.com/SaraVieira',
    imageUrl: 'https://avatars1.githubusercontent.com/u/1051509?s=400&v=4'
  },
  {
    name: 'Vincent Lemeunier',
    githubUsername: 'kombucha',
    githubUrl: 'https://github.com/kombucha',
    imageUrl: 'https://avatars0.githubusercontent.com/u/1584370?s=460&v=4'
  },
  {
    name: 'Ricardo Abreu',
    githubUsername: 'codenakama',
    githubUrl: 'https://github.com/codenakama',
    imageUrl: 'https://avatars1.githubusercontent.com/u/5193050?s=460&v=4'
  },
  {
    name: 'Yuan Chuan',
    githubUsername: 'yuanchuan',
    githubUrl: 'https://github.com/yuanchuan',
    imageUrl: 'https://avatars3.githubusercontent.com/u/250426?s=460&v=4'
  },
  {
    name: 'Karin Hendrikse',
    githubUsername: 'khendrikse',
    githubUrl: 'https://github.com/khendrikse',
    imageUrl: 'https://avatars3.githubusercontent.com/u/30577427?s=460&v=4'
  },
  {
    name: 'Italo Aurelio',
    githubUsername: 'Italox',
    githubUrl: 'https://github.com/Italox',
    imageUrl: 'https://avatars2.githubusercontent.com/u/11761170?s=460&v=4'
  },
  {
    name: 'Vincent',
    githubUsername: 'Vinnl',
    githubUrl: 'https://github.com/Vinnl',
    imageUrl: 'https://avatars0.githubusercontent.com/u/4251?s=460&v=4'
  },
  {
    name: 'eliasparis',
    githubUsername: 'eliasparis',
    githubUrl: 'https://github.com/eliasparis',
    imageUrl: 'https://avatars2.githubusercontent.com/u/13252924?s=460&v=4'
  }
];

const LandingPage = () => (
  <div className="landingPage">
    <Home />
    <UseCases />
    <Tester />
    <Install />
    <Contribute
      contributors={contributors.map((c, index) => ({ ...c, id: index + 1 }))}
    />
  </div>
);

export default LandingPage;
