// this is implementing the bass and kick buttons' behavior
function action(movement){
	var currentText = document.getElementById("txt").innerHTML;
	if (currentText == "Currently nothing") {document.getElementById("txt").innerHTML = movement;}
	else {document.getElementById("txt").innerHTML = currentText + movement;}
	check_bk();	
}
function clear_all(){
	document.getElementById("txt").innerHTML = "Currently nothing";
}
function check_bk(){
	var currentText = document.getElementById("txt").innerHTML;
	if(currentText == "Bass Bass Kick Kick Bass Kick Kick "){
		window.alert("Let the bass kick!");
	}
}