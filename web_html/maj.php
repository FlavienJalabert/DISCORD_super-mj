<meta encoding="UTF-8">

<?php

$xml = "<?xml version='1.0' encoding='UTF-8' ?>";
$xml .= "<TBDT>";

$fichier = $_GET["fichier"];

if (isset($_GET['index'])) {
	$index = $_GET["index"];
	$title = $_GET["title"];
	$type = $_GET["type"];
	$stTm = $_GET["stTm"];
	$edTm = $_GET["edTm"];
	$details = $_GET["details"];

foreach ($index as $key)
{
	$xml .= "<task>";
		$xml .= "<title>".$title[$key]."</title>";
		$xml .= "<type>".$type[$key]."</type>";
		$xml .= "<startTime>".$stTm[$key]."</startTime>";
		$xml .= "<endTime>".$edTm[$key]."</endTime>";
		$xml .= "<details>".$details[$key]."</details>";
	$xml .= "</task>";
}
} else {
	echo 'empty stroke';
}

$xml .= '</TBDT>';
echo $xml;

$fp = fopen("./".$fichier.".xml", "w");
fwrite($fp, $xml);
fclose($fp);

echo '<a href="backoffice.php">back</a>';

header('Location: backoffice.php');

?>