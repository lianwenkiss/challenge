function red(obj){
		obj.style.color = "red";
	}
	function white(obj){
		obj.style.color = "white";
	}
	function green(obj){
		obj.style.background ="#336600";
	}
	function blue(obj){
		obj.style.background ="blue";
	}
	
	var id;
	var divobject1 = null;
	var divobject2 = null;
	divobject1 = document.getElementByID('mid1');
	divobject2 = document.getElementByID('mid2');

	function move(obj) {
		var left = 0;
		var value = 0;
		var pxvalue = 0;
		function frame(){
			left++;
			value = left%500;
			pxvalue = 800-value;
			obj.style.left = pxvalue + 'px';
		}
		id = setInterval(frame, 10);
	}
	function stop() {
		clearInterval(id);
	}
