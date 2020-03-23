
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo'); // 10 個裡面都填 nemo

function findNemo(fish) {
  let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
      break; 
    }
  }
  let t1 = performance.now(); // 取現在時間，目的是要計算執行時間
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

// 也可以用箭頭函示 易讀性提高
const findNemo2 = array => {
    array.forEach(fish => {
        if(fish === 'nemo'){
            console.log('Found NEMO!');
        }
    })
}

const findNemo3 = array => {
    for(let fish of array){
        if(fish === 'nemo'){
            console.log('Found NEMO!');
        }
    }
}

findNemo(everyone) // O(n) --> Linear Time number of inputs
findNemo2(everyone);
findNemo3(everyone);

/** 
const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes){
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)
*/
/** 
// Log all pairs of array
const boxes = [1,2,3,4,5];

function logAllPairsOfArray(array){
    for(let i = 0; i < array.length; i++){
        for(let j=0; j < array.length; j++ ){
            console.log(array[i], array[j]);
        }   // i=0 j=0,1,2..
    }
}

logAllPairsOfArray(boxes);
*/
// 如果是兩個相對的用 + 
// 如果是巢狀用 *

/** 
function printAllNumbersThenAllPairSums(numbers){

    console.log('there are the number: ');
    numbers.forEach(function(number){
        console.log(number);
    });

    console.log('and these are their sums');
    numbers.forEach(function(firstNumber){ // 陣列第一個數字
        numbers.forEach(function(secondNumber){ // 陣列第二個數字
            console.log(firstNumber + secondNumber);
        });
    });
};

printAllNumbersThenAllPairSums([1,2,3,4,5]);

// O(n²)
*/

/** 
function booooo(n){
    for(let i=0; i<n.length; i++){
        console.log('booooo!');
    }
}

booooo([1,2,3,4,5]); // 我們不能控制這 input 有多大，但他就是一個 function
                     // O(1)
function arrayOfHiNTimes(n){
    let hiArray = [];
    for(let i=0; i<n; i++){
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6); // 呼叫一個陣列，放入 n 個 i 所以空間複雜度是 O(n)
*/

