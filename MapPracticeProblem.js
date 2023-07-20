const NUM_OF_TIMES_DIE_ROLL = 10;
let totalDieRoll = 0;
let RollDieMap = new Map();

while(true){
    totalDieRoll++;

    let rollDie = Math.floor(Math.random() * 6) + 1;
    
    if(RollDieMap.has(rollDie)){
        RollDieMap.set(rollDie,RollDieMap.get(rollDie)+1);
    }
    else{
        RollDieMap.set(rollDie,1);
    }


    if(RollDieMap.get(rollDie) == NUM_OF_TIMES_DIE_ROLL){
        break;
    }
}

let maxCount = -1;
let minCount = Infinity;
let maxNumber;
let minNumber;

RollDieMap.forEach((count,number) => {
    if(count > maxCount){
        maxCount = count;
        maxNumber = number;
    }

    if (count < minCount) {
        minCount = count;
        minNumber = number;
      }
});

console.log(`Number that reached maximum times: ${maxNumber} (occurrences: ${maxCount})`);
console.log(`Number that reached minimum times: ${minNumber} (occurrences: ${minCount})`);
