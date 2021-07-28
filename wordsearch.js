// function to transpose the matrix and switch colums with rows.
const transpose = function(matrix) {
  let array = [];

  for (let i = 0; i < matrix[0].length; i++) {
    array.push([])

    for (let j = 0; j < matrix.length; j++) {
      array[i][j] = matrix[j][i];
    }
  }
  return array;
};

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  const verticalJoin = transpose(letters).map(ls => ls.join('')); 
  
  for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
  }
  
  for(const l of verticalJoin) {
    if(l.includes(word)) return true;
  }

  return false;
}

module.exports = wordSearch;



   