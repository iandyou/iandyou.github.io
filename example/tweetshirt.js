
window.onload=function(){
	var btn=document.getElementById("previewButton");//defined a variable to save the referance of a button
	btn.onclick=previewHandler;
}

function previewHandler(){
	var canvas=document.getElementById("tshirtCanvas");//get Canvas by id
	var context=canvas.getContext("2d");
	fillBackgroundColor(canvas,context);
	var selectObj=document.getElementById("shape");
	var index=selectObj.selectedIndex;
	var shape=selectObj[index].value;
	
	if(shape=="square"){
		for(var squares=0;squares<20;squares++){
			drawSquare(canvas,context);
		}
	}
}

function drawSquare(canvas,context){
	var w=Math.floor(Math.random()*40);
	var x=Math.floor(Math.random()*canvas.width);
	var y=Math.floor(Math.random()*canvas.height);
	
	context.fillStyle="lightblue";
	context.fillRect(x,y,w,w);
}

function fillBackgroundColor(canvas,context){
	var selectObj=document.getElementById("backgroundColor");
	var index=selectObj.selectedIndex;
	var bgColor=selectObj[index].value;
	context.fillStyle=bgColor;
	context.fillRect(0,0,canvas.width,canvas.height);
}










