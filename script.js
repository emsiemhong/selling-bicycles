/**
 * Getting data from server
 */
async function fetchData() {
  const response = await fetch(
    "https://emsiemhong.github.io/learning-resources/selling-bicycles/bicycles.json"
  );
  return await response.json();
}

/**
 * Adding data to HTML UL list
 */
function addDataToList(bicycles) {
  // Assuming you have a div with the id 'bicycle-list' in your HTML
  const bicycleListElement = document.getElementById("bicycle-list");
  bicycles.forEach((bicycle) => {
    // Create elements to display each bicycle
    const bicycleCardElement = document.createElement("div");
    bicycleCardElement.classList.add("bicycle-card");

    const imageElement = document.createElement("img");
    imageElement.src = bicycle.image;
    imageElement.alt = `${bicycle.brand} ${bicycle.model}`;

    const brandModelElement = document.createElement("p");
    brandModelElement.textContent = `${bicycle.brand} ${bicycle.model}`;

    const priceElement = document.createElement("p");
    priceElement.textContent = `$${bicycle.price}`;

    // Append elements to the bicycle card
    bicycleCardElement.appendChild(imageElement);
    bicycleCardElement.appendChild(brandModelElement);
    bicycleCardElement.appendChild(priceElement);

    // Append the bicycle card to the list
    bicycleListElement.appendChild(bicycleCardElement);
  });
}

// Call the async function
fetchData()
  .then(data => {
    addDataToList(data.bicycles);
  })
  .catch(error => {
    console.error(error);
  });
