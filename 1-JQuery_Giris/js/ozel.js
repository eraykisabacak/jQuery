$(document).ready(function(){

	$("p").click(function(){

		$(this).hide();

	});

});

/*

Ödev

3 farklı metodu kullanarak

Adınız ve Soyadınızı => Ben Kaptanla birlikte JQUERY Öğreniyorum
10'ar kez yazın.
Aklınıza gelen etiketleri kullanın

i b small p div


//1.Yöntem
$(document).ready(function(){

	$('div').html('Udemy JQuery Eğitimi Div İçersindeyim');

});

//2.Yöntem
$().ready(function(){

	$('p').html('Udemy JQuery Eğitimi Paragraf İçersindeyim');

});

//3.Yöntem
$(function(){

	$('b').html('Udemy JQuery Eğitimi Bold İçersindeyim');

});
*/

//03.html ile birlikte çalışan kodlar başlangıç
/*
function islem(){
	$('div').html('Udemy JQurey Div İçersindeyim');
}
//03.html ile birlikte çalışan kodlar bitiş

//$('p').click(islem);

$('button').click(islem);*/

//04.html ile birlikte çalışan kodlar başlangıç

function gostergizle(){

	$("#reklam").toggle();
}


//04.html ile birlikte çalışan kodlar bitiş

