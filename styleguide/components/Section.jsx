import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
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
