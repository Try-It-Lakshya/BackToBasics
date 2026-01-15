display = document.getElementById("display-H1");
decrease = document.getElementById("decrease");
reset = document.getElementById("reset");
increase = document.getElementById("increase");



num = 0

/*
decrease.addEventListener("click", function(){
    num-=1;
    document.getElementById("display-H1").textContent = num;
})

increase.addEventListener("click", function(){
    num+=1;
    document.getElementById("display-H1").textContent = num;
})

reset.addEventListener("click", function(){
    num=0;
    document.getElementById("display-H1").textContent = num;
})

*/


/**
 * IF YOU WANT TO CHANGE THE CONTENT --->
 * 
 * display = document.getElementById("display-H1"); ---- works
 * display.textContent = num
 * ------------------------------------------------------------------------------------===============
 * display = document.getElementById("display-H1").textContent; -------- doesn't work
 * display = num
 */


decrease.onclick = function(){
    num--;
    display.textContent = num;
}

increase.onclick = function(){
    num++;
    display.textContent = num;
}

reset.onclick = function(){
    num=0;
    display.textContent = num;
}
