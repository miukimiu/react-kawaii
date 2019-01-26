import React from 'react';
import Contribute from './landing-sections/Contribute';
import Home from './landing-sections/Home';
import Install from './landing-sections/Install';
import Tester from './landing-sections/Tester';
import UseCases from './landing-sections/UseCases';

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
  },
  {
    name: 'uselessdev',
    githubUsername: 'uselessdev',
    githubUrl: 'https://github.com/uselessdev',
    imageUrl: 'https://avatars1.githubusercontent.com/u/6943919?s=400&v=4'
  },
  {
    name: 'serotonyn',
    githubUsername: 'serotonyn',
    githubUrl: 'https://github.com/serotonyn',
    imageUrl: 'https://avatars1.githubusercontent.com/u/22910212?s=400&v=4'
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
