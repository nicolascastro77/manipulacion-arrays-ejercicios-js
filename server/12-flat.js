//El método flat es inmutable que consiste en retornar un array donde los sub-arrays han sido aplanados hasta una profundidad especificada. El aplanamiento consiste en transformar un array de arrays a una sola dimensión.


const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ]
  
  const flatArray = []
  
  for(let i=0; i<matrix.length; i++){
    const array = matrix[i]
    for(let j=0; j<array.length; j++){
      flatArray.push(matrix[i][j])
    }
  }
  
  console.log(flatArray)
  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  

const array = [1,2,[3,4],5,6]
const result = array.flat() 
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
result2// [1, 2, 3, 4, [5, 6]]
