const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0;

function batteries(array){
    return array.reduce(((total, element) => total + element), totalBatteries);
}