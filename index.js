function calculate(){
    var pAmount = document.getElementById("amount").value;
    if(parseInt(pAmount)<= 0 || pAmount.length===0){
        alert('Please Input a valid Amount')
    }else{
    
    var interest = document.getElementById("interest").value;
   
    var years = document.getElementById("years").value ;

    var cYear = new Date().getFullYear();
    var resultYear = parseInt(years) + parseInt(cYear);
    
    var interest = (parseInt(pAmount)*parseInt(interest)*parseInt(years))/100;
    
    document.getElementById("para").innerHTML = `If you deposit &#8377 ${pAmount}
    You will get &#8377 ${interest}
     in year ${resultYear}.`;
    }
}