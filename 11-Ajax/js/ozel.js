
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

//******************************************************************

//lenght

/*
$(function(){

	//$("b").text("Eleman sayısı : "+$("li").length);

	$("button").click(function(){

		alert("Eleman sayısı : "+$("li").length);//Nesneleri sayar

	})


});

*/

//******************************************************************

//get
/*
$(function(){

	//alert($("li").get());

	var say = $("li").get();

	$("b").text("Ulaşılan Eleman İçeriği :"+$(say).eq(0).text());//İstediğimiz elemana ulaşma
})*/

//******************************************************************

//index
/*
$(function(){

	$("b").text("Ulaşılan elemanın index numarası : "+$("#Javascript").index())//İndis numarası alınıyor

})*/

//******************************************************************

//Ready

//1.Yol
/*
$(document).ready(function(){

	alert("Sayfa Yüklendi");

});
*/

//2.Yol
/*
$().ready(function(){

	alert("sayfa yüklendi")

});
*/

//3.Yol
/*
$(function(){

	alert("sayfa yüklendi");

});
*/

//******************************************************************

//On  Olay Yakıcı Kullanımı
/*
$().ready(function(){

	$("button").click(function(){

			$(this).after("<button>Tıkla Buton Üret</button>");

	});
});
*/

/*
$("body").on('click','button',function(){//Tıkladıkça gerçekleşir

	$(this).after("<button>Tıkla Buton Üret</button>");

});
*/

//******************************************************************

//One Olay Kısıtlayıcı Kullanımı
/*
$("body").one('click','button',function(){ //1 kere gerçekleşir

	$(this).after("<button>Tıkla Buton Üret</button>");

});*/

//******************************************************************

//File input butona tıkladıkça oluşacak ama one foksiyonu ile siz bunu bir kez ile sınırlanacak.
/*
$("body").one('click','button',function(){ //1 kere gerçekleşir

	$("input").after("<br><br><input type=\"file\" name=\"\">");

});*/


//******************************************************************

// Off - Olay Sonlandırıcı
/*
$("body").on('click','#ekle',function(){ 

	$(this).after("<button id='#ekle'>Tıkla Buton Üret</button>");

});


$("body").on('click','#kaldir',function(){ //Özellik kaldır

	$("body").off();

});
*/

//******************************************************************

// Trigger
/*
$(function(){

	$("#btn1").click(function(){

		alert("Buton 1 Click Olayı Tetiklendi");
	});

	$("#btn2").click(function(){//Başka bir butonu tetikleyebilir

		$("#btn1").trigger('click');
	});


});*/

//******************************************************************

// keydown
/*
$(function(){//Tuşa basıldığını söyler

	/*$("html").keydown(function(){

		alert("bir tuşa basıldı");

	})*/

/*
	$("input").keydown(function(){

		alert("bir tuşa basıldı");

	})


});
*/

//******************************************************************

// keypress
/*
$(function(){

	$("#ad").keypress(function(event){

		//$("b").append("Tuşu Bırak");
		
		$("div").fadeIn(2000);

		$("div").animate({

			marginLeft:"+=10px"
		})

	})

	//Keyup

	$("#ad").keyup(function(){

		alert("Tuş Bırakıldı");

	})

	

})*/

//******************************************************************


//keypress Proje Ödevi - Nesneyi Yön Tuşları ile hareket ettirme
/*
$(function(){

	$("body").keydown(function(event){

		var a = event.which;

		$("div").text("Basılan Tuş: "+a);

		if(a == 37){//Sol tuş

			$("div").animate({

				marginLeft:"-=10px"
			})
			
		}


		else if(a == 38){//Yukarı tuş

			$("div").animate({

				marginTop:"-=10px"
			})

		}


		else if(a == 39){//Sağ tuş


			$("div").animate({

				marginLeft:"+=10px"
			})

		}


		else if(a == 40){//Alt tuş

			$("div").animate({

				marginTop:"+=10px"
			})

		}



	})


})*/


//******************************************************************

//Click
/*
$(function(){

	$("button").click(function(){

		$("b").text("Tıklandı");
	})
})*/

//******************************************************************

//dblClick
/*
$(function(){

	$("button").dblclick(function(){

		$("b").text("Çift Tıklandı");
	})
})*/

//******************************************************************

//hover
/*
$(function(){
	
	$("button").hover(i,d);

	function i(){

		$("b").text("Süper butonun üzerindesin");

	}

	function d(){

		$("b").text("Süper butonun dışındasın");

	}


})*/

//******************************************************************

//mousedown
/*
$(function(){//Hangi fareye tıkladığını gösterir

	$("button").mousedown(function(event){

		$("b").text(event.which);

	})

})
*/
//******************************************************************


//Hangi tuşa tıkladığını sağ tuşa bastınız diyecek
/*
$(function(){//Hangi fareye tıkladığını gösterir

	$("button").mousedown(function(event){

		switch (event.which){
		case 1:
			alert("Sol tuşa bastınız");
			break;
		case 2:
			alert("Orta tuşa bastınız");
			break;
		case 3:
			alert("Sağ tuşa bastınız");
			break;
	}

	})	

})*/

//******************************************************************

//mouseup
/*
$(function(){

	/*$("p").mouseup(function(){

		$("b").text("Basıldı VE Bırakıldı")

	})*/
/*
	$("p").mousedown(function(){

		$("b").text("Fare tuşuna basıldı")

	})*/
/*
})*/

//mouseout

//******************************************************************

/*
$(function(){

	$("p").mouseup(function(){

		$("b").text("Basıldı VE Bırakıldı")

	})

	$("p").mousedown(function(){

		$("b").text("Fare tuşuna basıldı")

	})

	$("p").mouseout(function(){

		$("b").text("Fare geldi ama gitti")

	})

})*/

//******************************************************************


//mouseenter
/*
$(function(){

	$("p").mouseup(function(){

		$("b").text("Basıldı VE Bırakıldı")

	})

	$("p").mousedown(function(){

		$("b").text("Fare tuşuna basıldı")

	})

	$("p").mouseout(function(){

		$("b").text("Fare geldi ama gitti")

	})

	$("p").mouseenter(function(){

		$("b").text("Fare geldi ")

	})

})*/

//******************************************************************


//mousemove
/*
$(function(){

	$("p").mousemove(function(e){

		$("b").text(e.pageX + ' ' + e.pageY);

	})

})*/

//******************************************************************


//Mouse ile yakalanamayan buton
/*
$(function(){

	$("button").hover(i);

	function i(){


		$("button").animate({

			marginLeft:"+=100px"

		})

		$("button").animate({

			marginTop:"+=100px"

		})


	}

	$("button").click(function(){

		alert("Yakaladın");
	})

})*/

//******************************************************************


//event_currentTarget
//Tıklanan elementin isimini bulmaya yarar
/*
$(function(){

	$("b").click(function(){

		alert(event.currentTarget.nodeName);

	})

	$("p").click(function(){

		alert(event.currentTarget.nodeName);

	})

})
*/


//******************************************************************

//relatedTarget

//Mouse nereden geçerse oranın bilgisini verir
/*
$(function(){


	$("li").mouseover(function(event){

		alert(event.relatedTarget.nodeName)

	})

})*/

//******************************************************************

//target
/*
$(function(){

	$("body").click(function(event){

		//alert(event.target.nodeName)

		alert(event.target.href)

	})

})*/

//******************************************************************

//pageX - pageY
/*
$(function(){

	$(document).mousemove(function(k){

		$("b").text('X Koordinatı :'+k.pageX+'Y Koordinatı : '+k.pageY)

	})

})
*/

//******************************************************************


//Ödev - Bir tane div oluştur kırmızı 10px genişlik uzunluk
/*
$(function(){

	$(document).mousemove(function(k){

		$("b").text('X Koordinatı :'+k.pageX+'Y Koordinatı : '+k.pageY)

		if(k.pageY <= 7 || k.pageY >= 20){
			alert("Yandınız")
		}

	})

})*/

//******************************************************************


//ScreenX ScreenY
/*
$(function(){

	$(document).mousemove(function(event){


		$("b").text("X Koordinatı : "+event.screenX+"Y Koordinatı : "+event.screenY);

	})

})
*/

//******************************************************************


//altkey
/*
$(function(){

	$(document).keydown(function(event){

		if (event.altKey) {

			$("b").text("Alta Basıldı");
		}
	})
});*/


//******************************************************************

//shiftKey
/*
$(function(){

	$(document).keydown(function(event){

		if(event.shiftKey){

			$("b").text("Shift'e basıldı")

		}

	})

})*/


//******************************************************************


//ctrlKey
/*
$(function(){

	$(document).keydown(function(event){

		if(event.ctrlKey){

			$("b").text("Ctrl'e basıldı")

		}
		if(event.shiftKey){

			$("b").text("Shift'e basıldı")

		}
		if(event.altKey){

			$("b").text("Alt'e basıldı")

		}

	})

})*/

//******************************************************************


//nameSpace
/*
$(function(){

	$("p").on("text.paragraf",function(event){

		alert(event.namespace);

	});

	$("button").click(function(event){

		$("p").trigger("text.paragraf");

	})

})*/

//******************************************************************


//timeStamp
/*
$(function(){

	var gecenzaman,suan;

	$("html").click(function(event){

		if(suan){

			gecenzaman = event.timeStamp-suan;

			$("html").append("Şuan : "+event.timeStamp+"<br>");

			$("html").append("Son olaydan bu yana geçen süre "+gecenzaman+"<br>");

		}else{

			$("html").append("Tıkla<br>");
		}

		suan = event.timeStamp;

		if (gecenzaman > 2000) {
			alert("Geç kaldınız")
		}

	})

})
*/

//******************************************************************


//eventtype

/*
$(function(){

	var gecenzaman,suan;

	$("html").click(function(event){

		if(suan){

			gecenzaman = event.timeStamp-suan;

			$("html").append("Şuan : "+event.timeStamp+"<br>");

			$("html").append("Son olaydan bu yana geçen süre "+gecenzaman+"<br>");

		}else{

			$("html").append("Tıkla<br>");
		}

		suan = event.timeStamp;

		if (gecenzaman > 2000) {
			alert("Geç kaldınız")
		}

		alert(event.type)

	})

})*/

//******************************************************************


//eventwhich

/*
$(function(){

	$("#key").on("keydown",function(event){

		$("b").text("Basılan tuşun ASCII karakteri : "+event.which)

	});

})*/

//******************************************************************


//Klavyeden Girilmesi İstenilen Karakteri Yakalama - eventwhich
/*
$(function(){

	$("#key").on("keydown",function(event){

		//$("b").text("Basılan tuşun ASCII karakteri : "+event.which)


		if (event.which == 52) {

			$("b").text("Çabuk Onu Sil");
		}else{
			$("b").text(" ");
		}

	});

})
*/

//******************************************************************

//eventpreventdefault

$(function(){

	$("a").click(function(event){

		event.preventDefault();

		$("b").text(event.type+" iptal edildi");

	})

})