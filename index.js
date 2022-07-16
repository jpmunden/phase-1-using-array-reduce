const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
 
/* Attempt 1
function totalBatteries(batteryBatches) {
    const countedBatteries = batteryBatches.reduce(function(accumulator, element){
        return element += accumulator
    })
    return countedBatteries;
}

console.log(totalBatteries);
*/

const totalBatteries = batteryBatches.reduce((accumulator, number) => {
    return accumulator + number;
}, 0);