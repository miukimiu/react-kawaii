import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Normalize } from 'styled-normalize';
import Home from '../components/home';
import UseCases from '../components/useCases';
import Tester from '../components/tester';
import Install from '../components/install';
import Contribute from '../components/contribute';
import { contributors } from '../data/contributors';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Normalize />
    <Home />
    <UseCases />
    <Tester />
    <Install />
    <Contribute
      contributors={contributors.map((c, index) => ({ ...c, id: index + 1 }))}
    />
  </Layout>
);

export default IndexPage;
