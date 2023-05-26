function calcularDeterminante() {
    
  
    const matrixText = document.getElementById('matrix').value.trim();
  
    const matrixRows = matrixText.split('\n');
    const matrix = matrixRows.map(row => row.trim().split(' ').map(Number));
  

    const numRows = matrix.length;
    const numColumns = matrix[0].length;
    if (numRows !== numColumns) {
      mostrarResultado('La matriz debe ser cuadrada');
      return;
    }
  
  
    const determinante = calcularDeterminanteRecursivo(matrix);

    mostrarResultado(`El determinante es: ${determinante}`);
  }
  
  function calcularDeterminanteRecursivo(matrix) {
    const numRows = matrix.length;
  
 
    if (numRows === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
  
    let determinante = 0;
  
   
    for (let j = 0; j < numRows; j++) {
      const subMatrix = [];
      for (let i = 1; i < numRows; i++) {
        const row = matrix[i].filter((_, index) => index !== j);
        subMatrix.push(row);
      }
      const cofactor = matrix[0][j] * calcularDeterminanteRecursivo(subMatrix);
      determinante += (j % 2 === 0 ? cofactor : -cofactor);
    }
  
    return determinante;
  }
  
  function mostrarResultado(resultado) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = resultado;
  }