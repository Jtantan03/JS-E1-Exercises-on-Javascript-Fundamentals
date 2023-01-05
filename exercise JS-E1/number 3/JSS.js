let car = {
    manufacturer: "Toyota",
    model: "Camry",
    engine: "2.5L I4",
    bodyType: "Sedan"
}

// Get the container element
let container = document.getElementById("car-container");

// Create the image element and set its src attribute to the specified image URL
let image = document.createElement("img");
image.src = "camry.jpg";

// Create the details element and set its innerHTML to the car object's properties
let details = document.createElement("div");
details.innerHTML = `
    <p>Manufacturer: ${car.manufacturer}</p>
    <p>Make and Model: ${car.model}</p>
    <p>Engine: ${car.engine}</p>
    <p>Body Type: ${car.bodyType}</p>
`;
details.style.cssText = "border: 1px solid black; padding: 10px; width: 50%;";

// Append the image and details elements to the container element
container.appendChild(image);
container.appendChild(details);