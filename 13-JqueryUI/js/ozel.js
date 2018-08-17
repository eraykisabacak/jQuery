//Accordion -- Sık Sorulan Sorularda kullanılabilir.

/*
$(function(){

	$("#accordion").accordion();


});*/

//autocomplete

/*
$(function(){

kelimeler = [
"Javascript",
"Bootstrap",
"PHP",
"JQuery",
"Java"
];

$("#listele").autocomplete({

	source:kelimeler,
	minLength:2

});


});*/

//datepicker
/*
$(function(){

$("#tarihsec").datepicker({

	showButtonPanel:true,
	changeMonth:true,
	changeYear:true,
	numberOfMonths:2,
	showWeek:true,
	altField:"#ayrinti",
	altFormat:"d MM, yy"
});


});*/

//dialog
/*
$(function(){


	$("#ac").click(function(){


		$("#dialog").dialog();



	})


});
*/

//menu
/*
$(function(){

$("#menu").menu();


});*/

//progressbar
/*
$(function(){

	$("#progressbar").progressbar({
		value:58
	});

})*/

//tabs
/*
$(function(){

	$("#tabs").tabs({

		event:"mouseover"
	});


})
*/

//draggable
/*
$(function(){

	$("#kare").draggable();
	$("#resim").draggable();


});*/

//droppable
/*
$(function(){

	$("#kare").droppable({

		//accept: "#resim",

		drop:function(){

			alert("Nesne Geldi");

			//$("b").text("Nesne başarıyla yüklendi")

		}
	});
	$("#resim").draggable({revert:"invalid"});

	$("#resim2").draggable({revert:"invalid"});

})
*/

//resizable
/*
$(function(){

$("#kare").resizable();

});*/

//SelectTable
/*
$(function(){

	$("#kurslar").selectable();	


});*/

//Sortable

$(function(){

	$("#kurslar").sortable();	


});













