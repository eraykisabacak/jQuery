<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Before ve After Kullanımı Proje</title>
</head>
<body>

	<?php 

	echo "<pre>";

	echo print_r($_POST['yukle']);
	echo "</pre>";


	 ?>

	<h2>Dosya yükleme alanı</h2>

	<form action="" method="POST">

		<input type="file" name="yukle[]">

		<button type="submit">Gönder</button>

	</form>
	<br><br>

	<button id="ekle">Ekle</button>

	<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="js/ozel.js"></script>
</body>
</html>