//console.log(linearSearch(linearArr,target));

//------------Binary Serach. it only ocurs sorted value in array
// for ascending number search
/*let binaryArr=[10,20,30,40,50,60,70,80,90,100]

function binaryArrSearch(arr,target){
  let start=0;
  let end=arr.length-1;
  let mid= Math.floor((start+end)/2)
 
  while(start<=end){
    if(arr[mid]===target){
      return 'Data found at index ' + mid
    }else if(arr[mid]<target){
      start=mid +1
      mid= Math.floor((start+end)/2)
    }else{
      end=mid-1
      mid= Math.floor((start+end)/2)
    }
  }
}
console.log(binaryArrSearch(binaryArr,80));*/


// binary number search for ascending or descending

const arr2=[10, 20,30,50,60,70,80]

function binarySearch(arr,target){
  let start=0;
  let end =arr.length-1;
  let mid;
  let asc;
  if(arr[start]<arr[end]){
    asc=true;
  }else{
    asc=false
  }
  while (start<=end) {
    mid=Math.floor((start+end)/2);
    if(arr[mid]===target){
      return 'Data found at index ' + mid
    }
    if(asc){
      if(arr[mid]<target){
        start = mid +1;
      }else{
        end = mid -1 
    }
  }
    else{
      if(arr[mid]>target){
        start=mid+1
      }else{
        end = mid -1
      }
      }
    }
    
  return 'data not found'
}

 console.log(binarySearch(arr2,50));
console.log(binarySearch([30,25,20,15,10,5],25));