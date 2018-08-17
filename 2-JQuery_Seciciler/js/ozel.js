
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

$().ready(function(){
	
})