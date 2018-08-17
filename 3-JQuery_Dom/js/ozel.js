
//Tag Seçiciler dersine Ait Kodlar

/*
$(document).ready(function(){

	$('p').css('color','blue');

});

$(document).ready(function(){

	$('div').css('color','red');

});*/

/******************************************************************

//ID ve Class Seçicilere Ait Kodlar
/*
$(document).ready(function(){

	//ID Seçici
	$('#php').css("color","orange");

	//Class Seçici
	$('.bootstrap').css("color","pink");

	//ID ve Class beraber aynı anda seçme
	$(".bootstrap,#php").css({"font-size":"30px"});
});*/

/******************************************************************

//Alternatif Digğer Seçiciler ait kodlar
/*
$(document).ready(function(){

	//$("input").css({"width":"600px"});

	//1.Yol
	//$("input[type='text']").css({"width":"600px"});
	//$("input[type='password']").css({"width":"900px"});

	//2.Yol
	$("input:text").css({"width":"600px"});
	$("input:password").css({"width":"900px"});

});
*/

//******************************************************************


//Siralamali Seçiciler
/*
$(document).ready(function(){

	/*
	//İlk indis elemanı seçildi
	$("li:first").css({"background-color":"green"});

	//Son indis elemanı seçildi
	$("li:last").css({"background-color":"green"});

	//Tek indisli elemanı seçildi - İlk eleman 0 olduğundan seçmez
	$("li:odd").css({"background-color":"green"});

	//Çift indisli elemanı seçildi - İlk eleman 0 olduğundan seçer
	$("li:even").css({"background-color":"green"});	
});
*/


//******************************************************************


// Zebra Stilli Tablo Yapımı
/*
$(document).ready(function(){

	$("tr:odd").css({"background-color":"grey"});

});*/

//******************************************************************

//Çocuk Seçiciler Kodları
/*
$(document).ready(function(){

	//$(".udemy p:first-child").css({"background-color":"red"});

	$(".udemy p:last-child").css({"background-color":"red"});


});
*/
//******************************************************************

//Elemanları bulup seçme
/*
$(document).ready(function(){

	$(".udemy").find("b").css({"background-color":"red"});

	$(".udemy").find("span").css({"background-color":"orange"});

	$(".emrah").find("p").css({"background-color":"green"});


});*/

//******************************************************************

//Previous ve Next Seçiciler
/*
$(document).ready(function(){

	$(".iki").prev().css({"background-color":"red"});
	
	//$(".uc").prev().css({"background-color":"red"});

	//$(".bir").next().css({"background-color":"red"});

	//$(".iki").next().css({"background-color":"red"});


});
*/
//******************************************************************

//İndex numarasına göre seçme
/*
$(document).ready(function(){

	$(".udemy li:eq(0)").css({"background-color":"orange"});

});
*/
//******************************************************************


//First , Last , Filter ve Not
/*
$(document).ready(function(){

	//$("div").first().css({"background-color":"yellow"});//Başında


	//$("div").last().css({"background-color":"yellow"});//Sonunda

	//$("div").not(".orta").css({"background-color":"yellow"});//Bu hariç

	$("div").filter(".orta").css({"background-color":"yellow"});//Sadece Bunda

});

*/

//******************************************************************

//Each
/*
$(function(){

	$("ul li").each(function(index){

		alert(index+' .eleman :'+$(this).text());
	})

})
*/

//******************************************************************

//Slice
/*
$(function(){

	//$("li").slice(0).css({"background-color":"red"});//0 DAN SONRAKİLER SEÇİLİR

	//$("li").slice(2).css({"background-color":"red"});//2 DEN SONRAKİLER SEÇİLİR

	$("li").slice(1,2).css({"background-color":"red"});//SADECE 1 SEÇİLİR

});
*/

//******************************************************************


//İS
/*
$(function(){

	if($("div").is('#udemy')) {

		$("b").text("Doğru var");

	}else{

		$("b").text("Hayır yok");
	}



});*/


//******************************************************************

//AddClass
/*
$().ready(function(){

	$("p").addClass("renk"); //sınıfı olmayana sınıf atar.

})
*/


//******************************************************************

//HasClass
/*
$().ready(function(){ //Class'ın yok olup olmadığını söyler TRUE FALSE olarak verir

	var sor = $("p").hasClass('renk');

	if (sor == true) {

		document.write("var");
	
	}else{
		document.write("yok");
	}

});
*/

//******************************************************************

//Method Zincirleme
/*
$(function(){

	$("div").height(400).width(500).fadeOut(2000).fadeIn(2000);


})
*/

//******************************************************************

//removeClass
/*
$().ready(function(){

	$("div").removeClass("renk");//Class silinir

});
*/

//******************************************************************

//toggleClass
/*
$().ready(function(){

	$("button").click(function(){

		$("p").toggleClass("renk");//P etiketine CLASS ekler

	});
	
});
*/

//******************************************************************


//Class Bulma
/*
$().ready(function(){

	/*var sor = $("div").hasClass('emrah');
	if (sor == true) {

		alert("var");

	}else{

		alert("yok");

	}*/

	/*$("button").click(function(){
		var sor = $("div").hasClass('emrah');
		if (sor == true) {

			alert("var");

		}else{

			alert("yok");

		}
	});*/
/*
});

*/
//******************************************************************

//Append ve Prepend
/*
$(document).ready(function(){

	//Düz yazı olarak ekleme
	//$(".php").append('append ile arkasına eklendi');//Sonrasına ekler
	//$(".php").prepend('prepend ile başına eklendi');//Başına eklendi

	//Html kodlar ile ekleme
	//$(".php").append('<p>append ile arkasına eklendi</p>');
	//$(".udemy").prepend('<b>prepend ile önüne eklendi</b><br>');

	//$(".liste").append("<option>JQuery</option>");

});
*/

//******************************************************************

//AppendTo ve PrependTo Kullanımı
/*
$(document).ready(function(){

	//$("a").appendTo($("p"));//A etiketinin sonuna P etiketini ekler

	//$("a").prependTo($("p"));//A etiketinin başına P etiketini ekler

	$("#ekle").click(function(){

		$("a").appendTo($("p"));

	})

});
*/

//******************************************************************

//Before ve After Kullanımı
/*
$(document).ready(function(){

	//Seçili nesnelerin hepsinin arkasına eklendi	
	//$("li").after("<li>JQuery</li>");

	//İlk nesnesinin arkasına ekleme
	//$("li:first").after("<li>JQuery</li>");

	//Son nesnesinin arkasına ekleme
	//$("li:last").after("<li>JQuery</li>");
//-------------after - before ----------------------------------------
	//Seçili nesnelerin hepsinin önüne eklendi	
	//$("li").before("<li>JQuery</li>");

	//İlk nesnesinin önüne ekleme
	//$("li:first").before("<li>JQuery</li>");

	//Son nesnesinin önüne ekleme
	//$("li:last").before("<li>JQuery</li>");

	//Buton ile eklemee
	$("button").click(function(){

		$("li:last").before("<li>JQuery</li>"); 

	});

});
*/

//******************************************************************

//Before ve After Kullanımı Proje
/*
$(document).ready(function(){

	$("#ekle").click(function(){

		$("input:last").before("<input type='file' name='yukle[]'><br><br>");

	});

});*/

//******************************************************************

//Clone Kullanımı
/*
$(document).ready(function(){

	//$('div').clone().insertAfter("p");//p'nin Sonrasına klonlar

	//$('div').clone().insertBefore("p");//p'nin Öncesine klonlar

	$("button").click(function(){

		$("input").clone().insertAfter("input");

	});

	//$("input").clone().insertAfter("input");//sonrasına input ekler

});

*/


//******************************************************************


//Text
/*
$(document).ready(function(){

	$("a").text("Udemy Kurslarına Git");

	$("b").text("Ben Kalın Yazı olarak eklendim");

	$("p").text("Ben P etiketiyim");

});

*/


//******************************************************************

//Replace Kullanımı
/*
$(document).ready(function(){

	$("button").click(function(){

		//$("p").replaceWith("<p>bootstrap kursu</p>");//İçeriği Değiştirir

		//$("<p>Bootstrap Kursu</p>").replaceAll("p");//İçeriği Değiştirir

	});

});
*/

//******************************************************************

//Empty Kullanımı
/*
$(document).ready(function(){

	$("button").click(function(){

		$("p").empty();//Temizler

		$("p").text("Temizlendi");

	});

});
*/

//******************************************************************

//Remove Kullanımı
/*
$(document).ready(function(){

	$("button").click(function(){

		$("p").remove();//Siler

	});

});
*/


//******************************************************************

//Elemanların verilerine ulaşma
/*
$().ready(function(){

	$("a").text("Emrah Yükselin Udemy Kurslarına Git");
	
	$("a").attr("href","www.google.com");

	$("a").attr("style","color:orange");

});
*/

//******************************************************************

//Stillere Erişim
/*
$().ready(function(){

	//console.log($(".udemy").css("width"));//css bilgilerini console yazdırır

	//$(".udemy").css({"width":"300px"});//css özelliği değiştirir

	$(".udemy").css({"width":"+=50px"});//Mevcut genişliğe 50 ekler


});
*/

//******************************************************************


//html
/*
$().ready(function(){

	//Nesnenin içeriğini alır
	//alert($("p").html());

	//Nesnenin içeriğini değiştirir
	//$("p").html("paragrafın içeriğini ben değiştirdim");

	//Nesnenin içeriğini başka bir nesneye aktarmak
	//$("b").html($("p").html());

	//Çoklu alma

	//alert($("div").html());

	var icerik = $("b").html();

	if(icerik == "eray"){

		document.write("eray yazıyor");
	}


});
*/

//******************************************************************

//Val kullanımı
/*
$().ready(function(){

	//alert($("input").val());

	$("button").click(function(){

		var liste = $("select").val();

		if(liste == "php"){
			alert("PHP SEÇİLDİ");
		}
		if(liste == "bootstrap"){
			alert("bootstrap SEÇİLDİ");
		}
		if(liste == "jquery"){
			alert("jquery SEÇİLDİ");
		}

	});



});

*/