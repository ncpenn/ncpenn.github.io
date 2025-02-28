// breadcrumb.js - For dynamically updating the breadcrumb text
document.addEventListener("DOMContentLoaded", function () {
  // Get the current page title
  const pageTitle = document.title;

  // Find the breadcrumb text element (the case study name)
  const breadcrumbTextElement = document.querySelector(
    "[data-breadcrumb-text]"
  );

  if (breadcrumbTextElement) {
    // Set a default case study text if none is provided
    let caseStudyText = breadcrumbTextElement.getAttribute(
      "data-breadcrumb-text"
    );

    if (!caseStudyText) {
      // Extract from page title if no explicit text is provided
      const titleParts = pageTitle.split(" - ");
      if (titleParts.length > 1) {
        caseStudyText = titleParts[0];
      } else {
        caseStudyText = "Case Study";
      }
    }

    // Update the breadcrumb text
    breadcrumbTextElement.textContent = caseStudyText;
  }
});
