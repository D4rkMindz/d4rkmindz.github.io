## Speicher System
Um die Speichergrössen zu definieren, erfand **Werner Buchholz**  im Jahr **1956**. 

 
Das Byte System ist wie folgt aufgebaut:





    1 Bit
    8 Bit                         = 1 Byte
    8'192                         = 1'024 Byte                     = 1 Kilobyte 
    8'388'608 Bit                 = 1'048'576 Byte                 = 1024 Kilobyte                  = 1 Megabyte
    8'589'934'592Bit              = 1'073'741'824 Byte             = 1'048'576 Kilobyte             = 1024 Megabyte              = 1 Gigabyte
    8'796'093'022'208 Bit         = 1'099'511'627'776 Byte         = 1'073'741'824 Kilobyte         = 1'048'576 Megabyte         = 1024 Gigabyte          = 1 Terrabyte
    9'007'199'254'740'992 Bit     = 1'125'899'906'842'624 Byte     = 1'099'511'627'776 Kilobyte     = 1'073'741'824 Megabyte     = 1'048'576 Gigabyte     = 1024 Terrabyte      = 1 Petabyte
    9'223'372'036'854'776'000 Bit = 1'152'921'504'606'847'000 Byte = 1'125'899'906'842'624 Kilobyte = 1'099'511'627'776 Megabyte = 1'073'741'824 Gigabyte = 1'048'576 Terrabyte = 1024 Petabyte = 1 Exabyte  



##### Definition
Um die Definiton zu verstehen, muss man zuerst verstehen, wie ein [Computer](/wiki/computer) rechnet. Ein Computer versteht, im Gegensatz zu uns Menschen nur zwei Zustände.


Strom   /   kein Strom


An      /   Ab


1       /   0


Ein Bit ist eine Definition von Strom oder kein Strom. Also 1 oder 0. Dieses System nennt man Binärsystem (lat. Bi=zwei). In diesem Binärsystem braucht es 8 Bit um einen Buchstaben zu Definieren.
Bei  Zahlen kommt es auf die Grösse der Zahl an.
Ein Computer hat ein Raster, welches wie das Schema unten aufgebaut wird. Ist dem Oben Stehenden Wert eine 1 (Strom) zugewiesen, wird dieser zu der hervorgehenden Zahl addiert (beim Start ist das 0), ist dem Wert jedoch eine 0 (kein Strom) zugewiesen, dann wird dieser Wert Ignoriert. Es ist dabei möglich jeden Wert zwischen 0 und dem unten aufgeführten Höchstwert zu definieren. 

  1  2  4  8  16  32  64  128 256  512  1'024  2'048  4'096  8'192  16'384  32'768
  1  0  1  0                                                                        = 5     (4 Bit) Höchstwert: 15
  1  0  0  1  1   0   0   1                                                         = 153   (8 Bit) Höchstwert: 255
  1  0  1  0  1   0   1   0   0     0     1     1                                   = 3157  (12 Bit) Höchstwert: 4'095
  0  0  1  1  1   0   0   1   1     0     1     1       1      0      1        1    = 56732 (16 Bit) Höchstwert: 65'535