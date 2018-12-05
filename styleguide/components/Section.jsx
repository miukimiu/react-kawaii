import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import { createGlobalStyle } from 'styled-components';
import remcalc from 'remcalc';
import SectionHeading from 'rsg-components/SectionHeading';
import Markdown from 'rsg-components/Markdown';
import LandingPage from './LandingPage';
import Wrapper from './common/Wrapper';

const styles = ({ fontFamily, color, space }) => ({
  headingSpacer: {
    marginBottom: space[2]
  },
  descriptionText: {
    marginTop: space[0],
    fontFamily: fontFamily.base
  }
});

const GlobalStyles = createGlobalStyle`
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
    nav {
      ul {
        margin-top: 0;
      }
      li {
        font-size: 18px;
      }
    }
    .logo h1 {
      margin-top: 0.625rem;
    }
  } // #root

`;

export function SectionRenderer(allProps) {
  const {
    classes,
    name,
    slug,
    content,
    components,
    sections,
    depth,
    description,
    pagePerSection
  } = allProps;
  return (
    <React.Fragment>
      <GlobalStyles />
      {slug === 'react-kawaii' ? (
        <LandingPage />
      ) : (
        <Wrapper>
          <Row>
            <Col xs={12}>
              <section className={classes.root}>
                {name && (
                  <SectionHeading
                    depth={depth}
                    id={slug}
                    slotName="sectionToolbar"
                    pagePerSection={pagePerSection}
                    slotProps={allProps}
                  >
                    {name}
                  </SectionHeading>
                )}
                {description && <Markdown text={description} />}
                {content}
                {sections}
                {components}
              </section>
            </Col>
          </Row>
        </Wrapper>
      )}
    </React.Fragment>
  );
}

SectionRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default Styled(styles)(SectionRenderer);
