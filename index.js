let paraEl1 = document.getElementById("home-el")

let num1 = 0;
function add1(){
    num1 = num1 +1
    paraEl1.textContent=num1
    }
    
    function add2(){
    num1 = num1 +2
    paraEl1.textContent=num1
    }
    
    function add3(){
    num1 = num1 +3
    paraEl1.textContent=num1
    }
    
    
    
    let paraEl2 = document.getElementById("guest-el")
    let num2 = 0;
function add11(){
    num2 = num2 +1
    paraEl2.textContent=num2
    }
    
    function add22(){
    num2 = num2 +2
    paraEl2.textContent=num2
    }
    
    function add33(){
    num2 = num2 +3
    paraEl2.textContent=num2
    }
    
    function setZero(){
        num1 = 0
    paraEl1.textContent=0
    
    num2 = 0
    paraEl2.textContent=0
    }
    
    function foulHome(){
        num1 = num1 - 1
    paraEl1.textContent=num1
    }
    
    function foulGuest(){
         num2 = num2 - 1
    paraEl2.textContent=num2
    }
    