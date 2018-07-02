
window.onload=function(){
	var btn=document.getElementById("start");//defined a variable to save the referance of a button
	btn.onclick=startHandler;
}
function startHandler(){
	var canvas=document.getElementById("smiley");
	var context=canvas.getContext("2d");
	drawSmileyFace(canvas,context);
}

function drawSmileyFace(canvas,context){
	context.beginPath();
	context.arc(300,300,200,0,2*Math.PI,true);
	context.fillStyle="#ffffcc";
	context.fill();
	context.stroke();
	/*------left eye-------*/
	context.beginPath();
	context.arc(200,250,25,0,2*Math.PI,true);
	context.stroke();
	/*------right eye-------*/
	context.beginPath();
	context.arc(400,250,25,0,2*Math.PI,true);
	context.stroke();
	/*--------nose-------------*/
	context.beginPath();
	context.moveTo(300,300);
	context.lineTo(300,350);
	context.stroke();
	/*--------mouth-------------*/
	context.beginPath();
	context.arc(300,350,75,degreesToRadians(20),degreesToRadians(160),false);
	context.stroke();
}

function degreesToRadians(degrees){
	return(degrees*Math.PI)/180;
	
}





