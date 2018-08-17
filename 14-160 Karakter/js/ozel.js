$(function(){

	$("#mesaj-alani").keyup(function(){

		var limit=160;

		var say=$(this).val().length;

		$("b").text("Girilen Karakter Sayısı:"+say);

		if(say>limit){
			$("b").text("Limit değere ulaştınız");
		}

	});

	$("#gonder").click(function(){

		var limit=160;

		var say=$("#mesaj-alani").val().length;

		if(say>limit){

			alert("160 Karakter sınırlaması var");
		}else{
			alert("Mesajınız Başarıyla Gönderildi");
		}

	});


});