const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

//Parse user input into array of froyo flavors, based on user input.
let froyoFlavors = userInputString.split(",");

console.log(froyoFlavors);

//Count
let flavorCount = {};

//Loop thorugh array and count each flavor
for (let i = 0; i < froyoFlavors.length; i++) {
  let flavor = froyoFlavors[i];

  // If the flavor already exists, add 1 to its count
  if (flavorCount[flavor]) {
    flavorCount[flavor]++;
  } else {
    // If it's new, start count at 1
    flavorCount[flavor] = 1;
  }
}
console.log("Flavor count tracker:", flavorCount);

/* ** How should that object be updated as you iterate through the array of flavors? ***

The object is updated one flavor at a time as you loop through the array. Each flavor acts like a label (or key) in the object, and you’re increasing its count each time you spot it. */
