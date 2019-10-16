## Programmier deinen Song
Sam Aaron entwickelte einst die Software [Sonic Pi](http://sonic-pi.net/) um Kindern spielerisch programmieren beizubringen. Er entwickelte mit dieser Software ein Programm, welches über eine intelligente, erweiterbare Struktur verfügt und somit für noch viel mehr als nur zu Lernzwecken einsetzbar ist.


Man kann mit ''sample :bd_haus'' ein Sample abspielen. In diesem Beispiel ist "sample" die Methode mit dem Parameter ":bd_haus". Nachdem man auf Play gedrückt hat wird nun das Sample abgespielt.


Man kann auch die Geschwindigkeit mittels der Methode ''use_bpm 120'' (am Anfang der Datei) einstellen. Als default ist eine [BPM](https://de.wikipedia.org/wiki/Beats_per_minute) Zahl von 60 gesetzt.


Mit der Methode ''sleep'' sorgt man für eine Pause (warten). Der erste Parameter dieser Methode ist die Anzahl Beats, welcher angibt, wie lange gewartet werden soll.


#### Töne
Sonic Pi stellt mehrere Möglichkeiten der Tonadressierung zur Verfügung. Abgespielt wird ein Ton jedoch immer mit der Methode ''play''. Man kann den Ton entweder als Zahl zwischen 0 und 127 eingeben (0 ist der tiefste, 127 der höchste Ton) oder man nimmt die Note (a,h,c,d,e,f,g) und definiert im Anschluss die Oktave. Ein "E" in der 4 Oktave würde mittels ''play e4'' abgespielt werden.





#### Instrument
Sonic Pi gibt dem Benutzer auch die Möglichkeit aus vielen verschiedenen [Synthesizern](https://github.com/samaaron/sonic-pi/blob/master/etc/doc/cheatsheets/synths.md) auszuwählen. Diese Synthesizer sind so lange aktiv, bis sie mit einem erneuten Methodenaufruf überschrieben werden. Diese Synthesizer werden über die Methode ''use_synth'' gesetzt.





#### Anpassung der Töne
Mit den Methoden ''amp''(lification) und ''pan''(orama) benutzt man um einen Ton lauter oder leiser (Minimum 0), respektive in einem Panorama von links(-1) über die Mitte(0) nach rechts (1) abzuspielen. Man kann Samples mit der Methode ''rate'' schneller (oder langsamer) abspielen. Ein negative rate Parameter spielt das Sample rückwärts ab





#### Wiederholungen
Man kann einen Block mehrfach wiederholen. Dies erreicht man mit ''8.times'' (8 repräsentiert in diesem Fall eine beliebige Zahl) und einem ''do ... end'' block. Dies sieht wie folgt aus.
```
use_random_seed 672 # 672 kann eine beliebige Zahl sein.
4.times do
  play rand_i 30..90,
  sleep 0.25
end
```
Wie in diesem Beispiel gezeigt kann man zufällige Zahlen mit ''rand_i'' und einer Range welche mit einer kleineren und einer grösseren Zahl definiert wird. Diese Range wird durch zwei Punkte (.) separiert. Eine Range von 45 bis 90 wird als ''45..90'' geschrieben. Eine zufällig Fliesskommazahl wird mit ''rand'' und einer Range definiert.





#### If
Man kann eine ''if''-Struktur verwenden. Dazu kann man bsp. die Methode ''one_in'' verwenden welche eine Wahrscheinlichkeit berechnet


```
128.times do
  if one_in 5 # Wahrscheinlichkeit 1 zu 5
    sample :drum_cymbal_closed
  end
  sleep 0.1
end
```



#### FX
FX (engl. Effekte) hat man mehrere zur Verfügung ('':echo'','':reverb'','':distortion'', '':flanger''). Diese kann man wie folgt verwenden um einen Ton zu bearbeiten:
```
with_fx :echo do
  sample :drum_snare_soft
end
```
Die Effekte kann man natürlich auch bearbeiten. Jeder Effekt hat verschiedene Bearbeitungsmöglichkeiten. Auch kann man mehrere Effekte über einander legen.
```
with_fx :flanger do
  with_fx :reverb, room: 0.8 do
    sample :drum_snare_soft
  end
  sleep 1
  with_fx :echo, phase: 0.5 do
    sample :drum_snare_hard
  end
end
```
#### Live Loop
Man kann sich so genannte ''live_loop''s erstellen. In diesen Live Loops definiert man eine Tonabfolge, welche repetitiv abgespielt wird. Man kann diesen aktiv verändern und die Änderungen fliessen automatisch in das Lied mit ein.
```
live_loop :my_loop do
  sample :bd_haus
  sleep 0.5
  sample :drum_snare_hard
  sleep 0.5
end
```



#### Eigene Methoden
Eine komplett eigene Methode lässt sich wie folgt definieren. Die Parameter für diese Funktion werden Kommasepariert zwischen den beiden Pipes aufgeschrieben.
```
define :elektro_specht do |anz_schläge, pausen_dauer|
  anz_schläge.times do
    sample :elec_mid_snare
    sleep pausen_dauer
  end
end

elekro_specht 16, 0.05
sleep 1
elektro_specht 8, 0.1
```
### Fazit
Ich finde es super, was Sam Aaron entwickelt hat. Zum programmieren lernen ist dieses Spiel sicher super. Auch zum in der Freizeit ein wenig programmieren zu üben ist es sicher super. 