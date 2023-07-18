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

function PrimeFactors(number){
    let primeFactors = new Array();

    while( number % 2 == 0){
        primeFactors.push(2);
        number = number / 2;
    }

    for(let i = 3 ; i * i <= number; i++){
        while(number % i == 0){
            primeFactors.push(i);
            number = number/i;
        }
    }
    if( number > 2){
        primeFactors.push(number);
    }
    return primeFactors;
}

const number = 85;

const primeFactorArray = PrimeFactors(number);

console.log("PrimeFactor of number "+number+" is: "+primeFactorArray)

function SumOfThreeNumberAddsToZero(array){
    let sum = new Array();

    for(let i = 0;i < array.length -2 ; i++){
        for(let j = i + 1; j < array.length -1;j++ ){
            for(let k = j + 1; k < array.length ; k++ ){
                if(array[i] + array[j] + array[k] == 0){
                    sum.push(array[i],array[j],array[k]);
                }
            }
        }
    }
    return sum;
}

let numberArray = [1,-2,2,5,-1,-4,0,4,-3];
const sumOfArray = SumOfThreeNumberAddsToZero(numberArray);

if(sumOfArray.length > 0){
    sumOfArray.forEach(function(element){
        console.log(element);
    });
}else{
    console.log("No elements found to get the sum zero");
}


function RepeatingNumbersInRange(start,end){
    let repeatingNumber = new Array();

    for(let num = start; num<=end;num++){
        let numString = num.toString();
    

    for(let i = 0;i <numString.length;i++){
        const digit = numString[i];
        if(numString.indexOf(digit) != numString.lastIndexOf(digit)){
            repeatingNumber.push(num);
            break;
        }
    }
    }
    return repeatingNumber;
}

let startRange = 0;
let endRange = 100;

let repeatedNumber = RepeatingNumbersInRange(startRange,endRange);

repeatedNumber.forEach(function(element){
    console.log(element);
});