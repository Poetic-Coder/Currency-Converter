//output3.detail();

//===========================start=====================
document.getElementById("output").style.visibility = "hidden";   //this line of code hides other forms from site
document.getElementById("amtInput").addEventListener("input", function(e){   // this line of code performs the mathematical functions on the inputed amount
    document.getElementById("output").style.visibility= "visible";           // this line of function makes the results visible to after the mathematical function is performed on the amount entered 
    var amt = e.target.value;                                                // here e stands for the amount entered and its also saved in a variable called amt
    document.getElementById("dollarEquivalent").innerHTML = amt*0.00258166;         // this line of code converts naira to dollar
    document.getElementById("poundsEquivalent").innerHTML = amt*0.00237;      // this converts the naira to the pounds equivalent
    document.getElementById("euroEquivalent").innerHTML = amt*0.00207;        // Finally this convertss it to the euro equivalent.

})