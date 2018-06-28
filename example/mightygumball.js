/**
**get JOSN by XMLHttpRequest
window.onload=function(){
	var url="http://localhost/html5/sales.json";
	var request=new XMLHttpRequest();
	request.open("GET",url);
	request.onload=function(){
		if(request.status==200){
			updateSales(request.responseText);
		}
	};
	request.send(null);
}
*
*updateSales method receive a string as argument
*
function updateSales(responseText){
	var salesDiv=document.getElementById("sales");
	/*salesDiv.innerHTML=responseText;*/
	
/**
	var sales=JSON.parse(responseText);
	for(var i=0;i<sales.length;i++){
		var sale=sales[i];
		var div=document.createElement("div");
		div.setAttribute("class","saleItem");
		div.innerHTML=sale.name+" sold "+sale.sales+" gumballs";
		salesDiv.appendChild(div);
	}
}
**/

/* use another method to get date from WEB Server*/
window.onload=function(){
	
}
/* updateSales method receive a object as argument */
function updateSales(sales){
	var salesDiv=document.getElementById("sales");
	for(var i=0;i<sales.length;i++){
		var sale=sales[i];
		var div=document.createElement("div");
		div.setAttribute("class","saleItem");
		div.innerHTML=sale.name+" sold "+sale.sales+" gumballs";
		salesDiv.appendChild(div);
	}
}








