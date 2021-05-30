//1: Travelling in a Jungle and counting wild animals
function animalCounter(depth) {
    if (depth < 0) {
        return "value can't be Negative";
    }

    var animal = 0;
    if (depth <= 10) {
        animal = depth * 50;  //if you go first Ten Miles
    }
    else if (depth <= 20) {
        var firstTenMiles = 10 * 50;
        var remaining = depth - 10;
        var secondTenMiles = remaining * 100;
        animal = firstTenMiles + secondTenMiles;  //if you go second Ten Miles
    }
    else {
        var firstTenMiles = 10 * 50;
        var secondTenMiles = 10 * 100;
        var remaining = depth - 20;
        var thirdTenMiles = remaining * 300;
        animal = firstTenMiles + secondTenMiles + thirdTenMiles;  //if you go after 20 Miles
    }
    return animal;
}



//2:
function budgetCalculator(watchCount, phoneCount, laptopCount) {
    if (watchCount < 0 || phoneCount < 0 || laptopCount < 0) {
        return "value can't be Negative";
    }
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    var watchCost = watchCount * watchPrice;
    var phoneCost = phoneCount * phonePrice;
    var laptopCost = laptopCount * laptopPrice;

    var totalCost = watchCost + phoneCost + laptopCost;

    return totalCost;
}



//3: Find the largest string of an array
function megaFriend(names) {
    if (names.length <= 0) {
        return "Array can't be Empty";
    }
    var largestName = '';
    for (var i = 0; i < names.length; i++) {
        if (names[i].length > largestName.length) {
            largestName = names[i];
        }
    }
    return largestName;
}




