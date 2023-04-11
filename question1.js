function sumDistinct(set1, set2) {
  let distinctElements = [];

  // Iterate through set1 and add to distinctElements if not present in set2
  for (let i = 0; i < set1.length; i++) {
    if (!set2.includes(set1[i]) && !distinctElements.includes(set1[i])) {
      distinctElements.push(set1[i]);
    }
  }

  // Iterate through set2 and add to distinctElements if not present in set1
  for (let i = 0; i < set2.length; i++) {
    if (!set1.includes(set2[i]) && !distinctElements.includes(set2[i])) {
      distinctElements.push(set2[i]);
    }
  }

  // Sum up all distinct elements
  let sum = 0;
  for (let i = 0; i < distinctElements.length; i++) {
    sum += distinctElements[i];
  }
  
  return sum;
}

// Test the function
const set1 = [3, 1, 7, 9], set2 = [2, 4, 1, 9, 3];
console.log(sumDistinct(set1, set2)); // Output: 13