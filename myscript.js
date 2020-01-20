var headOne=document.querySelector("#one")
var headTwo=document.querySelector("#two")
var headThree=document.querySelector("#three")


headOne.addEventListener('mouseover',function(){
	headOne.textContent="Mouse currently Over"; 
	headOne.style.color="cyan";
})

headOne.addEventListener('mouseout',function(){
	headOne.textContent="Hover Over Me"; 
	headOne.style.color="red";
})

headTwo.addEventListener('click',function(){
	headTwo.textContent='CLICKED ON'; 
	headTwo.style.color="Blue";
})

headThree.addEventListener('dblclick',function(){
	headThree.textContent='Double CLICKED ON'; 
	headThree.style.color="Blue";
})