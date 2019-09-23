var $ = function (id) 
{
    return document.getElementById(id);
};


/*
 *start
   declare floatCakePayment, intLoanTerm, floatTotalCost
   get floatCakePayment
   get intLoanTerm
   calculate floatTotalCost = floatCakePayment * intLoanTerm
   output floatTotalCost
  end
*/
 var calculate = function()
 {
  var floatCakePayment, intLoanTerm, floatTotalCost;
  floatCakePayment = parseFloat( $("cake_payment").value);
  intLoanTerm = parseInt($("loan_length").value);
  floatTotalCost = parseFloat(floatCakePayment * intLoanTerm);
  $("total_cost").value = floatTotalCost;   
 };
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("cake_payment").focus();
};