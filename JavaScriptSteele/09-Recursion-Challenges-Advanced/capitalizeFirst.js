function capitalizeFirst(strArray) {
  return strArray.map((a) => a.charAt(0).toUpperCase() + a.slice(1));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
