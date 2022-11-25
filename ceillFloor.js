// find ceiling and floor number in Binary Search algorithm---for sorted array

let arr=[10,20,30,40,50,60,70] // target value=45

function binarySearchCeilFloor(arr,target){
   let start=0;
let end=arr.length-1;
let mid;

while(start<=end){
   mid=Math.floor((start+end)/2)
   if(arr[mid]===target){
      return 'Data fornd at index ' + mid
   }else if(arr[mid]<target){
      start=mid+1
   }else{
      end=mid-1
   }
}
return `Ceiling ${arr[mid]} and Flooring ${arr[mid-1]}`
}

console.log(binarySearchCeilFloor(arr,65));
