console.log("Welcome To JavaScript Programming Constructs!\n");

let arr = new Array();

console.log("Unsorted array: ");

for(let i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (999-100+1) + 100);
    console.log(arr[i]);
}

console.log("\nAfter sorting: ");

arr.sort();
arr.forEach(function(element){
    console.log(element);
});

SecondLargestNumber(arr);
console.log("Second smallest number is : "+arr[1]);

function SecondLargestNumber(arr){
    let largestNumber = arr[0];
    let secondLargestNumber = arr[0];

    for(let i = 0;i < arr.length ;i++){
        if(arr[i] > largestNumber){
            secondLargestNumber = largestNumber;
            largestNumber = arr[i];
        }
        else if( arr[i] > secondLargestNumber){
            secondLargestNumber = arr[i];
        }
    }
    console.log("Second largest number is : "+secondLargestNumber);
}


function SeconSmallestNumber(arr){
    let smallestNumber = arr[0];
    let secondSmallestNumber = arr[0];

    for(let i = 0;i <arr.length;i++){
        if(arr[i] < smallestNumber){
            secondSmallestNumber = smallestNumber;
            smallestNumber = arr[i];
        }
        else if(arr[i] < secondSmallestNumber){
            secondSmallestNumber = arr[i];
        }
    }
    console.log("Second smallest number is : "+secondSmallestNumber);
}



