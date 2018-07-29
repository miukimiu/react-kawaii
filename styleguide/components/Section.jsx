import React from "react";
import PropTypes from "prop-types";
import Styled from "rsg-components/Styled";
import SectionHeading from "rsg-components/SectionHeading";
import Markdown from "rsg-components/Markdown";
import LandingPage from "./LandingPage";

const styles = ({ fontFamily, color, space }) => ({
  headingSpacer: {
    marginBottom: space[2]
  },
  descriptionText: {
    marginTop: space[0],
    fontFamily: fontFamily.base
  }
});

export function SectionRenderer({
  name,
  depth,
  slug,
  classes,
  pagePerSection,
  allProps,
  description,
  content,
  sections,
  components
}) {
  return (
    <div>
      {slug === "landingpage" ? (
        <LandingPage />
      ) : (
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
      )}
    </div>
  );
}

SectionRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default Styled(styles)(SectionRenderer);
