$('#btn-left').click(
	function(){
		var src=$('#resim').attr('src');
		var x=parseInt(src[0]);
		var max=3;
		var k;
		if(x==1){
			k=max;


		}
		else{
			k=x;
			k--;
		}


		$('#resim').attr({
			"src" : k+".jpg"
		})	
	
	}
	);
$('#btn-right').click(
	function(){
		var src=$('#resim').attr('src');
		var x=parseInt(src[0]);
		var min=1;
		var k;
		if(x==3){
			k=min;
		}
		else{
			k=x;
			k++;
		}
		$('#resim').attr({
			"src" :k+".jpg"
		})
	})