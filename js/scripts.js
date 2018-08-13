var prices = [5,2.53,7.5,2,4.75,7.25];
var total = 0;
var groceryList = ["item1", "item2", "item3", "item4", "item5", "item6"];
var grocery;

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    prices.forEach(function(price, index) {
      grocery = $("#" + groceryList[index]).val();
      total += price * parseFloat(grocery);
    });
$("#totalPrice").append("$" + total);
  });
});
