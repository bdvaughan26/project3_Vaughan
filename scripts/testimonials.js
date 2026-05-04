window.onload = function () {
let reviewers = ["Elizabeth", "Catherine", "Victoria"];
let roles = ["Client", "Business Owner", "Client"];
let stars = [5, 5, 5];
let reviews = [
  "Bailey was wonderful to work with. She was creative, professional, and brought my vision to life beautifully.",
  "Her design work was thoughtful and polished. Communication was great, and the final result exceeded my expectations.",
  "Bailey created something that felt both professional and personal. I would absolutely recommend her to anyone."
];

function starIcons(rating) {
  let starText = "";
  for (let i = 1; i <= rating; i++) {
    starText += "<span>★</span>";
  }
  return starText;
}

let output = "";

for (let i = 0; i < reviewers.length; i++) {
  output += "<div class='testimonial-card'>";
  output += "<div class='stars'>" + starIcons(stars[i]) + "</div>";
  output += "<p class='review-text'>" + reviews[i] + "</p>";
  output += "<h3>" + reviewers[i] + "</h3>";
  output += "<span class='review-role'>" + roles[i] + "</span>";
  output += "</div>";
}

document.getElementById("testimonial-container").innerHTML = output;
}