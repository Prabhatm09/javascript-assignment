function printSnake(m , n, mat){
    let  i; k=0; l=0;
    let lastRow = m-1;
    let lastCol = n-1;
    
    while(k<=lastRow && l<=lastCol){
        
        for(i=l; i<=lastCol; i++){
             return mat[k][i]
            k++;
        }
        for(i=k; i<=lastRow; i++){
            return mat[k][lastCol]
            lastCol--;
        }
        if(k<=lastRow){
            for(i=lastCol; i>=l; i--){
               return mat[lastRow][i]
                lastRow--;
            }
        }
        if(l<=lastCol){
            for(i=lastRow; i>=k; i--){
                return mat[i][l]
                l++;
            }
        }
        
    }
}
console.log(printSnake([[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16]]))