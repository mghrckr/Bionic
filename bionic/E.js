// Nomor 1

function generatePattern(n) {
    for (let i = 1; i <= n; i++) {
      let pattern = '';
      for (let j = 1; j <= i; j++) {
        pattern += j;
      }
      pattern += '**';
      for (let k = i + 1; k <= n+1; k++) {
        pattern += k+2;
      }
      console.log(pattern);
    }
  }
  
  
  generatePattern(5);
  generatePattern(4);
  
    
  
  
  
  

// Nomor 2
function selisih(harga) {
    let maxDifference = 0;
    let minPrice = harga[0];
  
    for (let i = 1; i < harga.length; i++) {
      const currentPrice = harga[i];
      const currentDifference = currentPrice - minPrice;
  
      if (currentDifference > maxDifference) {
        maxDifference = currentDifference;
      }
  
      if (currentPrice < minPrice) {
        minPrice = currentPrice;
      }
    }
  
    return maxDifference;
  }
  
  const harga = [10, 7, 5, 8, 11, 9, 1];
  console.log(selisih(harga)); 
  
