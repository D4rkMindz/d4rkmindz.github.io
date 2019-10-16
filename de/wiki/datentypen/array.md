======Array======

Ein Array ist eigentlich eine Variable mit mehreren Werten. Will man fünf Werte Speichern, so muss man dies mit Variablen folgendermassen lösen:
  $a = "Wert 1";
  $b = "Wert 2";
  $c = "Wert 3";
  $d = "Wert 4";
  $e = "Wert 5";

Mit einem array kann man dies allerdings so lösen:
  $werte = array('a' => 'Wert 1', 'b' => 'Wert 2', 'c' => 'Wert 3', 'd' => 'Wert 4', 'e' => 'Wert 5');
Gibt man nun den das array $werte mit var_dump($werte); aus, so bekommt man:
  array (size=5)
  'a' => string 'Wert 1' (length=6)
  'b' => string 'Wert 2' (length=6)
  'c' => string 'Wert 3' (length=6)
  'd' => string 'Wert 4' (length=6)
  'e' => string 'Wert 5' (length=6)
'name' => typ 'wert' (anzahl Zeichen)

Optional kann man auch nur einen bestimmten Eintrag aus einem Array ausgeben. Möchte ich beispielsweise nur intrag 'c' ausgeben, löse ich dies wie folgt:
  echo $werte['c'];
  output: Wert 3