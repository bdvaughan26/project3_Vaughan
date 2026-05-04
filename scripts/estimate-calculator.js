/* 
      Filename: jsproject1.js
 */

// declare global constants for the application
const LOGO_COST = 400;
const BRAND_COST = 800;
const WEB_COST = 1000;

// setup the form when the page loads
window.addEventListener("load", setupForm);

// set the formˈs default values
function setupForm() {
  document.getElementById("logoSuite").value = 0;
  document.getElementById("brandPack").value = 0;
  document.getElementById("basicWeb").value = 0;

  getEstimate();

  // Add event handlers for each input control
  document.getElementById("logoSuite").onchange = getEstimate;
  document.getElementById("brandPack").onchange = getEstimate;
  document.getElementById("basicWeb").onchange = getEstimate;
}

// estimate the total cost of the service
function getEstimate() {
  let totalCost = 0;
  let logoCount = document.getElementById("logoSuite").value;
  let brandCount = document.getElementById("brandPack").value;
  let websiteCount = document.getElementById("basicWeb").value;

  // Add the cost of logo suites
  totalCost += logoCount * LOGO_COST;

  // Add the cost of brand packages
  totalCost += brandCount * BRAND_COST;

  // Add the cost of basic websites
  totalCost += websiteCount * WEB_COST;

  // Display the total cost estimate
  document.getElementById("estimate").innerHTML = "$" + totalCost;
}
