

function highlightRows(){
	//alert("I'm coming");
	if(!document.getElementsByTagName) return false;
	var rows=document.getElementsByTagName("tr");
	 //come to here
	for(var i=0;i<rows.length;i++){
		
	   rows[i].onmouseover=function(){
		this.className="green";
	   }
	   rows[i].onmouseout=function(){
		 this.className="black";
	   }
	}
}
addLoadEvent(highlightRows);