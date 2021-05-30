const nemo = ['nemo']
const large = new Array(100000).fill('nemo');
function findNemo(array){
  //let t0= performance.now();
  for(let i=0;i<array.length;i++){
    if(array[i]==='nemo'){
      console.log('found nemo'); 
    }
  }
  //let t1= performance.now();
  //console.log('call to find nemo took '+(t1-t0)+ ' millseconds'); 
}

findNemo(large); // O(n) --> Linear time