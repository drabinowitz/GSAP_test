$(document).ready(function(){
			$("#tester").click(function () {
				$(this).hide();
			});
			var tester = $("#tester");
			tester.text("newer text");
			TweenLite.to(tester,3,{left:"632px",ease:Quart.easeInOut});
		})