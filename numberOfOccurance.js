let arr = [2, 5, 8, 8, 8, 8, 8, 9, 12, 12];
let target=8;

function numberOfOccurance(arr,target){
   let start=0;
   let end = arr.length-1;
   let mid;
   let count=0;
   while(start<=end){
      mid = Math.floor((start + end) / 2);
  
  if (arr[mid] === target) {
    count++;
  }

  for (let i = mid - 1; i >= 0; i--) {

    if (arr[i] === target) {
      count++;
    }
  }
  for (let i = mid + 1; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
   
  }
  return count;
   } 
}

console.log(numberOfOccurance(arr,8))