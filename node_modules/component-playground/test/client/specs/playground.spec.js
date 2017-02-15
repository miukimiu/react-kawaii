/**
 * Client tests
 */
import React from "react";
import { renderIntoDocument, findRenderedDOMComponentWithClass,
  createRenderer } from "react-addons-test-utils";
import Component from "../../../src/components/playground";

describe("components/playground", function () {

  it("has expected content with deep render", function () {
    // This is a "deep" render that renders children + all into an actual
    // browser DOM node.
    //
    // https://facebook.github.io/react/docs/test-utils.html#renderintodocument
    const rendered = renderIntoDocument(<Component />);

    // This is a real DOM node to assert on.
    const divNode = findRenderedDOMComponentWithClass(rendered, "playgroundCode");
    expect(divNode).to.not.be.undefined; //eslint-disable-line no-unused-expressions
  });

  it("has expected content with shallow render", function () {
    // This is a "shallow" render that renders only the current component
    // without using the actual DOM.
    //
    // https://facebook.github.io/react/docs/test-utils.html#shallow-rendering
    const renderer = createRenderer();
    renderer.render(<Component />);
    const output = renderer.getRenderOutput();
    expect(output.type).to.equal("div");
  });
});
