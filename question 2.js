//Dot product procedure
function dot_product(v1, v2) {
  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}

//Determining if n pairs of vectors are orthogonal using the dot_product procedure
function are_vectors_orthogonal(vectors) {
  for (let i = 0; i < vectors.length; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
      const dot_prod = dot_product(vectors[i], vectors[j]);
      
      if (dot_prod !== 0) {
        return false;
      }
    }
  }
  
  return true;
}


//Modified algorithm to use the dot_product function instead of a procedure
function dot_product(v1, v2) {
  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}

function are_vectors_orthogonal(vectors) {
  for (let i = 0; i < vectors.length; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
      const dot_prod = dot_product(vectors[i], vectors[j]);
      
      if (dot_prod !== 0) {
        return false;
      }
    }
  }
  
  return true;
}