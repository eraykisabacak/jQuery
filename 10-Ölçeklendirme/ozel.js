
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

//show
/*
$(function(){

	$("button").click(function(){

		//Direk Gösterme
		//$("div").show();

		//Yavaşlatarak
		//$("div").show(10000)

		//İşlem gerçekleştikten sonra
		$("div").show(2000,function(){

			//alert("Div Tamamen Gösterilir")

			$("b").text("Div Tamamen Görüntülendi")

		});



	})


})*/

//hide
/*
$(function(){

	$("button").click(function(){

		//Direk gizleme
		//$("div").hide();

		//Yavaşlatarak gizleme
		//$("div").hide(2000)

		//Yavaşlatarak gizlendikten sonra
		$("div").hide(2000,function(){

			//alert("Gizlendi")

			$("b").text("Gizlendi")
		})


	});


})*/

//toggle
//
/*
$(function(){

	$("button").click(function(){

		//Göster Gizle
		//$("div").toggle();

		//Yavaş
		//$("div").toggle(2000)

		$("div").toggle(2000,function(){

			alert("işlem tamam");

		})

		//css()



	})

})*/
//toggle proje
/*
$(function(){

	$("button").click(function(){

		$("div").toggle(2000,function(){

			var sonuc = $("div").css("display");

			if(sonuc == "none"){
				$("b").text("kapalı")
			}else{
				$("b").text("açık")
			}
		})

	})

})*/

//toggle proje 2
/*
$(function(){


	$("#php").click(function(){


		$("#php").hide(2000)

	})

	$("#ackapa").click(function(){

		$("#php").toggle(2000)
	})



})
*/

//Delay
//delay tıklandıktan sonra bir bekler sonra işlemini yapar
/*
$(function(){

	$("button").click(function(){

		$("div").delay(1000).toggle(2000)

	})

})*/

//SlideDown
//Şeçilen şeyi açar
/*
$(function(){

	$("button").click(function(){

		$("div").slideDown(2000)

	})


})
*/

//SlideUp
//Şeçilen şeyi kapatır
/*
$(function(){

	$("button").click(function(){

		$("div").slideUp(2000);
	})

})*/

//slidetoggle
/*
$(function(){

	$("button").click(function(){

		$("div").slideToggle(2000);
		$("img").slideToggle(2000);

	});

});*/


//fadeIn
//Yanarak gelir
/*
$(function(){

	$("button").click(function(){

		$("div").fadeIn(2000)

	})
})*/

//fadeOut
/*
$(function(){

	$("button").click(function(){

		$("div").fadeOut(2000);


	});

});*/

//fadeTo
//0.90 yüzde 90 gözüküyor 0.10 yüzde 10 gözüküyor
/*
$(function(){

	$("button").click(function(){

		$("img").fadeTo('slow',0.90);
		$("div").fadeTo('slow',0.10);

	});

});
*/

//Şanslı Kutu Oyunu
/*
$(function(){

	$("#kutu1").fadeTo('slow',0.50)
	$("#kutu2").fadeTo('slow',0.50)
	$("#kutu3").fadeTo('slow',0.50)
	$("#kutu4").fadeTo('slow',0.50)

	$("#btn1").click(function(){

		$("#kutu1").fadeTo('slow',0.10)
		alert("Yanlış")

	})
	$("#btn2").click(function(){

		$("#kutu2").fadeTo('slow',0.10)
		alert("Yanlış")

	})
	$("#btn3").click(function(){

		$("#kutu3").fadeTo('slow',1)
		alert("Doğru")
		$("#kutu1").fadeTo('slow',0.10)
		$("#kutu2").fadeTo('slow',0.10)
		$("#kutu4").fadeTo('slow',0.10)

	})
	$("#btn4").click(function(){

		$("#kutu4").fadeTo('slow',0.10)
		alert("Yanlış")

	})

})*/

//fadeToggle
/*
$(function(){

	$("button").click(function(){

		$("div").fadeToggle(1000)

	})

})*/

//animate
/*
$(function(){

	$("button").click(function(){

		$("div").animate({

			width:'500px',
			height:'50px',
			marginLeft:'300px',
			marginTop:'+=50px'
		});	

	})


})*/

//animate proje
/*
$(function(){

	$("#yukarı").click(function(){

		$("div").animate({

			marginTop:'-=50px'

		});

	});

	$("#asagı").click(function(){

		$("div").animate({

			marginTop:'+=50px'

		});

	});

	$("#sag").click(function(){

		$("div").animate({

			marginLeft:'+=50px'

		});

	});

	$("#sol").click(function(){

		$("div").animate({

			marginLeft:'-=50px'

		});

	});

});*/

//stop
/*
$(function(){

	$("#islem").click(function(){

		$("div").fadeIn(5000);

	})

	$("#durdur").click(function(){

		$("div").stop();

	})

})
*/

//finish
/*
$(function(){

	$("#islem").click(function(){

		$("div").fadeIn(5000);

		$("div").animate({
			width:'+=100px'
		})

	})

	$("#durdur").click(function(){

		$("div").finish();

	})

})*/

//queue - dequeue - clearqueue
//queue -- > olduğu yerde durdurur ya parantez içindekini yapar

//dequeue -- > devam ettirmeye yarar

//clearqueue -- > tamamen olayı durdurur
/*
$(function(){

	$("#oynat").click(function(){

		$("div").animate({

			marginTop:"-20px"
		});


		$("div").animate({

			marginLeft:"+20px"
		}).queue(function(){
			alert("Durdu");

			$(this).dequeue();

			$("div").clearQueue();
		});



		$("div").animate({

			marginTop:"+20px"
		});

		$("div").animate({

			marginLeft:"+500px"
		});






	});
});*/

//blur
/*
$(function(){

	$("#islem").blur(function(){

		$("b").text("Umarım dogru bilgi girmişsindir.")

	})

})
*/

//blur proje
/*
$(function(){

	 $("#ad").blur(function(){

	 	var e = $("#ad").val();

		if(e == "eray"){
			$("b").text("Aferin Doğru");
		}
		else{
			$("b").text("Yanlış")
		}

	});

})*/

//change
/*
$(function(){

	$("#ad").change(function(){

		var e = $("#ad").val();

		$("b").text(e.length);

	})


})*/

//focus
//Focuslanan nesnede olay yaratır
/*
$(function(){

	$("#ad").focus(function(){

		$("b").text("Adınızı Girriniz")

	})

	$("#soyad").focus(function(){

		$("b").text("Soyadınızı Girriniz")

	})

})
*/

//select
/*
$(function(){

	//nesnenin içeriği seçildiğinde kullanılır.

	$("#ad").select(function(){

		$("b").text("İçerik Seçildi");

	})

})
*/

//select proje
//seçileni kopyalar
/*
$(function(){


	$("#ad").select(function(){

		if(document.execCommand("copy")){
			alert("Kopyalandı")
		}

	})

})
*/

//submit
/*
$(function(){

	$("#forms").submit(function(event){

		if($("#ad").val() != "4"){
			alert("Sadece 4 girilebilir")
			event.preventDefault();
		}

	})

})
*/
//submit proje
/*
$(function(){

	$("#forms").submit(function(event){

		if($("#kadi").val().length < 6){
			
			$("b").text("Kullanıcı adınız 6 karakterden az olamaz");
			event.preventDefault();
		}

		if($("#password").val().length < 6){
			
			$("b").after("Şifreniz 6 karakterden az olamaz");
			event.preventDefault();
		}

	})

})
*/

//height width
/*
$().ready(function(){

	var boy = $(".eray").height(300);
	$(".eray").width(600);

	$("p").text($(".eray").height()+" Piksel"+" - "+$(".eray").width()+" Piksel");

	$("button").click(function(){

		alert("Yüksekliği "+$(".eray").height()+" Piksel");
		alert("Genişliği "+$(".eray").width()+" Piksel");

	

	});

})*/

//Offset
/*

$().ready(function(){

	$("button").click(function(){

		alert("Sol taraftan uzaklık : "+$(".udemy").offset().left+"px\n"+"Yukarıdan uzaklık : "+$(".udemy").offset().top+"px");	

		//Değiştirme

		$(".udemy").offset({top:10});

		alert("Sol taraftan uzaklık : "+$(".udemy").offset().left+"px\n"+"Yukarıdan uzaklık : "+$(".udemy").offset().top+"px");	


	})

})
*/

//position
/*
$().ready(function(){

	var pozisyon = $("p").position();

	$("b").text("Soldan uzaklık : "+pozisyon.left+" Yukarıdan uzallık : "+pozisyon.top);


});*/

//scrolltop,scrollleft


$().ready(function(){

	$(".udemy").scrollLeft(0);

	$(".udemy").scrollTop(50);

	$("html").scrollTop(500);

});









