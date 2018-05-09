const args = process.argv;
let fs = require('fs');
let inputFile = args[2] || 'kindur_prices.txt';
let inputBalance = args[3] || 2500;

// find closest pair sum to target value
// assumes correct format is 'item name, price\n'...
// assumes file is always correct format

// finds exact pair only Time: O(n) Space: O(n)
function findPair(file, balance){
    if(!file || !balance) return 'Please check your inputs.';

    let prices = fs.readFileSync(file, 'utf8').trim().split('\n').map(ele => ele.split(', ')); //Time: O(n) Space: O(n)
    let pricesMap = new Map();
    balance = Number(balance);

    for(let item of prices){ //Time: O(n) Space: O(1)
        let name = item[0],
          cost = Number(item[1]),
          diff = balance - cost;

        if(cost > balance) break;

        if(!pricesMap.has(cost)){ //Time: O(1)
            pricesMap.set(cost, name);
        }

        if(pricesMap.has(diff)){ //Time: O(1)
            return `${pricesMap.get(diff)} ${diff}, ${pricesMap.get(cost)} ${cost}`;
        }
    }

    return 'Not possible'
}

function checkInput(file,balance){
    if(!file || !file.length || (!balance && balance !== 0) || (!Number(balance) && balance !== 0) || file[0] === ',') return false;

    let start = 0,
      end = file.length-1;

    for(let i=0; i<file.length; i++){
        start = i;
        let item = file.slice(start, end);
        let newline = item.indexOf('\n');
        let comma = item.indexOf(', ');
        let name, cost;

        if(newline > 0) end = newline;
        if(comma < 0) return false;

        name = item.slice(0, comma);
        cost = Number(item.slice(comma+2, end));
        if(!name.length || !cost) return false;

        i += end+1;
        end = file.length-1;
    }

    return true;
}

console.log(findPair(inputFile,inputBalance));

module.exports = { findPair, checkInput };

