x = 0;
y = 150;

x1 = 10;
y1 = 100;

x2 = 900;
y2 = 100;

maksDiameter = 30;
theta = 0;

boksNummer = [];

i = 0;

datoTal = 0;
datoVar = 0;

fængendeTal = 0;
fængendeVar = 0;

navnTal = 0;
navnVar = 0;

nyhedTal = 0;
nyhedVar = 0;

tekstTypeTal = 0;
tekstTypeVar = 0;

skribentTal = 0;
skribentVar = 0;

billedeTal = 0;
billedeVar = 0;

fotografiTal = 0;
fotografiVar = 1;

kortEnGang = false;



//sætningselementer til nyhedsgenerator
dato = ["24. dec 2023: ", "20. apr 1889: ", "24. mar 2006: ", "1. sep 1939: ", "37. nov 2086: ", "1. jan 0000: ", "14. mar 1879: ", "2. feb 2025: ", "16. apr 1960: ", "11. sep 2001: ", "4. sep 2006: ", "10. jan 2024: ", "7. okt 2015: ", "30. apr 1945: ", "I dag: ", "I morgen: ", "I går: ", "Lige nu: "]

fængende = ["Alle chokerede: ", "Ingen havde forudset: ", "Hvad der skete efter, havde ingen regnet med: ", "Ingen forstillede sig at skrive om dette: ", "Du vil aldrig tro dette er sandt: ", "Nyhed chokerer alle: ", "Ikke engang Kongen havde forudset: ", "WHAT?!: ", "HVAD?!: ", "SINDSYGT: ", "Forfærdeligt: ", "CRAZY!: ", "No way!: "]

navn = ["Advokat ", "Dronning Margrethe ", "Jakob Elleman ", "Mette Frederiksen ", "Joe Biden ", "Abraham Lincoln ", "John F. Kennedy ", "Pythagoras ", "Beyonce ", "Kronprins Frederik ", "Daniel ", "Elon Musk ", "Kim Larsen ", "Mette Vedsø ", "Skolelærer ", "Elev ", "Student ", "Statsminister ", "Politi ", "Mobber ", "Asiat ", "Kat ", "Spion ", "Hund ", "Ged ", "Astronaut ", "Soldat ", "Præsident ", "Kollega ", "Underviser ", "Bibliotikar "]

nyhed = ["har endelig fået JOB", "spiste NABOENS KO uden tilladelse", "legede med SKOLEBØRN - fik POLITITILHOLD", "anklaget for IDENTITETSTYVERI", "udgiver opskrift om at lave VAND TIL ÆGTE OST", "holder HEMMELIG MODEUDSTILLING i skoven", "blev ANHOLDT for at KRÆNKE en handi kat", "siger, at GRAVITATION bare er en MYTE", "får 12 i Programmering C", "SIGTET for at STJÆLE bananer i NETTO", "spiste en for gammel ost og bliver konge", "bliver nu den nye KONGE af DANMARK", "spiser MÆGTIG banankage", "PRUTTER i bussen!?", "indtager ULOVLIGT kartofler", "spiser på MÅNEN", "køber en hest ULOVLIGT", "skriger højt i KIRKE", "sover i UNDERVISNINGEN", "VÆLTEDE rundetårn!", "TABTE millioner i kasino"]

tekstType = ["Artikel af: ", "Debatindlæg af: ", "Blog af: ", "Klumme af: ", "Kommentar af: ", "Kronik af: ", "Interview af: ", "Anmendelse af: ", "Reportage af: ", "Indlæg af: ", "Essay af: ", "Novelle af: ", "Lyrik af: ", "Brev af: ", "Manual af: ", "Dagbog af: ", "Roman af: ", "Erklæring af: "]

skribent = ["Kongen ", "Jakob Elleman ", "Mette Frederiksen ", "Joe Biden ", "Abraham Lincoln ", "John F. Kennedy ", "Pythagoras ", "Beyonce ", "Kronprins Frederik ", "Daniel ", "Elon Musk ", "Kim Larsen ", "Mette Vedsø ", "Skolelærer ", "Mega sej elev ", "Student ", "Statsminister ", "Jøde ", "Person med anden etnisk baggrund ", "Asiat ", "Kat ", "Hund ", "Ged ", "Fugl ", "Sebastian Laust Rud Jensen ", "Simon Nguyen ", "Peter Nguyen", "Abdelsalam Mohammed Ali", "Tolk", "Skuespiller", "Pilot", "Kok", "Forsker", "Entreprenør"]
