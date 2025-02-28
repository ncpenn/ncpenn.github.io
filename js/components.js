// components.js - Place this in a JavaScript file
document.addEventListener("DOMContentLoaded", function () {
  // Load all components marked for inclusion
  loadComponents();
});

async function loadComponents() {
  // Find all elements with data-component attribute
  const componentElements = document.querySelectorAll("[data-component]");

  // Process each component
  for (const element of componentElements) {
    const componentName = element.getAttribute("data-component");

    try {
      // Fetch the component HTML
      const response = await fetch(`/components/${componentName}.html`);

      if (!response.ok) {
        throw new Error(`Failed to load component: ${componentName}`);
      }

      const html = await response.text();

      // Insert the component HTML
      element.innerHTML = html;

      // Execute any scripts within the component
      const scripts = element.querySelectorAll("script");
      for (const script of scripts) {
        eval(script.textContent);
      }
    } catch (error) {
      console.error(`Error loading component ${componentName}:`, error);
      element.innerHTML = `<div class="bg-red-100 p-4 text-red-700">Failed to load component: ${componentName}</div>`;
    }
  }
}
