function isPangram(string){
    
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x))
      
}
console.log(isPangram('abefghijklmnopqrstuvwxyz'));

