// Link - https://github.com/Hany-Raaj/assignment




// 1. kilometerToMeter
function kilometerToMeter(num){
    var meter = num * 1000;
    if(num <= 0){
        return "Error!!! Input unexpected value.";
    }
    return meter;
}




// 2. budgetCalculator
function budgetCalculator(ghari, phone, laptop){
    var ghari = ghari * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
    var total = ghari + phone + laptop;
    if(ghari, phone, laptop <= 0){
        return "Error!!! Input unexpected value.";
    }
    return total;
}




// 3. hotelCost  ||  1 - 10 = 100;  11 - 20 = 80;  21 - infinite = 50 [per day cost]
function hotelCost(day){
    var bill = 0;
    if(day <= 0){
        return "Error!!! Input unexpected value.";
    }
    if(day <= 10){
        var bill = day * 100;
    }
    else if(day <= 20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        var bill = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        var bill = firstPart + secondPart + thirdPart;
    }
    return bill;
}




// 4. megaFriend
function megaFriend(friends){
    var longestName = "";
    if(friends == " "){
        return "Error!!! White space isn't a name. Please input a valid name.";
    }
    for(var i = 0; i < friends.length; i++){
        if(longestName.length < friends[i].length){
            longestName = friends[i];
        }
    }
    return longestName;
}