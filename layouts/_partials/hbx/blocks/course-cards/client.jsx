import { render } from "preact";

// Import your Preact component
import { CourseCardsBlock } from "./component.jsx";

function renderCourseCardsBlocks() {
  // Select all DOM elements that act as placeholders for your Course Cards block
  // HugoBlox will typically add a data attribute like 'data-block-type="course-cards"'
  const blocks = document.querySelectorAll('[data-block-type="course-cards"]');

  blocks.forEach((block) => {
    // Extract the props (content, design, etc.) that HugoBlox would have
    // serialized into a data attribute on the placeholder element.
    const props = JSON.parse(block.dataset.props);

    // Render (hydrate) your Preact component into the placeholder element
    render(<CourseCardsBlock {...props} />, block);
  });
}

// Ensure the rendering function is called when the DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderCourseCardsBlocks);
} else {
  renderCourseCardsBlocks();
}