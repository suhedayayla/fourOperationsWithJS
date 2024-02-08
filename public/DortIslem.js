/**
 * 
 */
function topla(){
	var birinciSayi = +document.getElementById("input-1").value;
	var ikinciSayi= +document.getElementById("input-2").value;
	var toplam;
	
	toplam=birinciSayi+ikinciSayi;
	document.getElementById("p-1").innerHTML = toplam;
	
	
}

function cikar(){
	var birinciSayi = +document.getElementById("input-1").value;
	var ikinciSayi= +document.getElementById("input-2").value;
	var cikar;
	
	cikar=birinciSayi-ikinciSayi;
	document.getElementById("p-1").innerHTML = cikar;
	
	
}
function carp(){
	var birinciSayi = +document.getElementById("input-1").value;
	var ikinciSayi= +document.getElementById("input-2").value;
	var carp;
	
	carp=birinciSayi*ikinciSayi;
	document.getElementById("p-1").innerHTML = carp;
	
	
}
function bol(){
	var birinciSayi = +document.getElementById("input-1").value;
	var ikinciSayi= +document.getElementById("input-2").value;
	var bol;
	
	bol=birinciSayi/ikinciSayi;
	document.getElementById("p-1").innerHTML = bol;
	
	
}