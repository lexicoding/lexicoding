function addRecommendation() {
  // Get the value of the new recommendation from the textarea
  let recommendation = document.getElementById("new_recommendation").value;

  // Check if the recommendation is not empty
  if (recommendation.trim() !== "") {
      // Create a new recommendation element
      let newRecommendation = document.createElement("div");
      newRecommendation.classList.add("recommendation");
      newRecommendation.innerHTML = `
          <p>"${recommendation}"</p>
          <p>- New Recommender</p>
      `;

      // Append the new recommendation to the recommendations section
      let recommendationsSection = document.getElementById("all_recommendations");
      recommendationsSection.appendChild(newRecommendation);

      // Reset the value of the textarea
      document.getElementById("new_recommendation").value = "";

      // Show confirmation popup
      showPopup();
  } else {
      // If the recommendation is empty, optionally display an alert or handle as needed
      console.log("Please enter a recommendation");
  }
}

function showPopup() {
  // Show the popup
  document.getElementById("popup").style.visibility = "visible";

  // Add an event listener to the popup to hide it when clicked
  document.getElementById("popup").addEventListener("click", function() {
      // Hide the popup when clicked
      document.getElementById("popup").style.visibility = "hidden";

      // Remove the event listener to prevent multiple clicks
      document.getElementById("popup").removeEventListener("click", showPopup);
  });
}
