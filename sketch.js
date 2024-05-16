
function preload()
{
  billeder = [loadImage('billeder/billede1.jpg'), loadImage('billeder/billede2.jpg'), loadImage('billeder/billede3.jpg'), loadImage('billeder/billede4.jpg'), loadImage('billeder/billede5.jpg'), loadImage('billeder/billede6.jpg'), loadImage('billeder/billede7.jpg'), loadImage('billeder/billede8.jpg'), loadImage('billeder/billede9.jpg'), loadImage('billeder/billede10.jpg'), loadImage('billeder/billede11.jpg'), loadImage('billeder/billede12.jpg'), loadImage('billeder/billede13.jpg'), loadImage('billeder/billede14.jpg'), loadImage('billeder/billede15.jpg'), loadImage('billeder/billede16.jpg'), loadImage('billeder/billede17.jpg'), loadImage('billeder/billede18.jpg'), loadImage('billeder/billede19.jpg'), loadImage('billeder/billede20.jpg'), loadImage('billeder/billede21.jpg'), loadImage('billeder/billede22.jpg'), loadImage('billeder/billede23.jpg'), loadImage('billeder/billede24.jpg')];
}

function setup() 
{
  createCanvas(1200, 2100);
  
  button = createButton('Generér nyheder');
  button.position(15, 117);
  button.mousePressed(FalskNyhed)
  
  for (i = 0; i < 8; i++)
  {
    boksNummer.push(new FakeNews(i));
  }
} 
//test
function draw() 
{
  background(235,235,235);
  
  //layout for "hjemmesiden"
  
  ///design til breaking news
  Breaking ();
  
  ///pulserende cirkler
  Cirkler ();
  
  //generering af billeder
  if(kortEnGang == false)
  {
    randoImg = random(billeder);
    kortEnGang = true;
  }
  
  for (i = 0; i < boksNummer.length; i++)
  {
    boksNummer[i].MineNyheder()

  }

}

function Breaking ()
{
  noStroke();
  fill(252, 245, 28);
  rect(0,0,1200,150);
  textSize(80);
  textStyle(BOLDITALIC);
  fill(255,0,0)
  text("BREAKING",x1,y1);
  if (x1 > -450)
    {
      x1 = x1 - 2;
    }
  else
    {
      x1 = 1200;
    }
  
  text("BREAKING", x2, y2);
  if (x2 > -450)
    {
      x2 = x2 - 2;
    }
  else
    {
      x2 = 1200;
    }

  textSize(80);
  textStyle(BOLDITALIC);
  fill(255,0,0)
  text("NYHEDER!!!", 50, 650);
  text("LÆS LØS!", 650, 650);
  text("BREAKING!!", 650, 1150);
  text("!!!VIGTIGT!!!", 50, 1150);
  text("WOOOOOW", 650, 1650);
  text("SPÆNDENDE", 35, 1650);
}

function Cirkler ()
{
  for (i = 300; i <= 2000; i = i + 500)
    {
      diam = 30 + sin(theta) * maksDiameter ;
      ellipse(600,i, diam, diam); 
      ////hastighed på pulsernde cirkel
      theta += 0.01; 
    }
}

function FalskNyhed()
{
  boksNummer = [];

  for (i = 0; i < 8; i++)
  {
    boksNummer.push(new FakeNews(i));

  }

}

class FakeNews
{

  constructor(i)
  {
    this.a = 0;
    this.b = 150;
    this.image = random(billeder);

    if (i % 2 == 0)
    {
      this.nr = i/2;
      this.venstre = true;
    }
    else
    {
      this.nr = (i-1)/2;
      this.venstre = false;
    }

    //variable til nyhederne
    this.intro = random(dato) + random(fængende);
    this.nyhed =  random(navn) + random(nyhed);
    this.kilde = random(tekstType) + random(skribent);
  }

  MineNyheder()
  {
    if (this.venstre)
    {
      image(this.image, x + 50, y + 50 + 500 * this.nr, 500,281);

      fill(252, 245, 250);
      
      //baggrund til nyhed
      fill(252, 245, 28);
      rect(x + 50,y + 331 + 500 * this.nr,500,60)
      
      fill(0, 0, 0);
      textSize(15);
      textStyle(BOLDITALIC);
      //fængende introduktion
      text(this.intro, x + 55, y + 347 + 500 * this.nr)
      
      //falsk nyhed
      text(this.nyhed,x + 55,y + 366 + 500 * this.nr);
      
      textSize(15);
      textStyle(ITALIC);
      
      //teksttype og skribent
      text(this.kilde,x + 55,y + 383 + 500 * this.nr);
    }

    else
    {
      image(this.image, x + 650, y + 50 + 500 * this.nr, 500,281);

      fill(252, 245, 250);
      
      //baggrund til nyhed
      fill(252, 245, 28);
      rect(x + 650, y + 331 + 500 * this.nr,500,60)
      
      fill(0, 0, 0);
      textSize(15);
      textStyle(BOLDITALIC);
      //fængende introduktion
      text(this.intro, x + 655, y + 347 + 500 * this.nr)
      
      //falsk nyhed
      text(this.nyhed, x + 655, y + 366 + 500 * this.nr);
      
      textSize(15);
      textStyle(ITALIC);
      
      //teksttype og skribent
      text(this.kilde, x + 655, y + 383 + 500 * this.nr);
    }
  }
}