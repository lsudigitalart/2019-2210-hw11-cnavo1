
var stats;
function preload() {
stats = loadTable("Horror Movies.csv");
jaws = loadImage("horrorPos/jaws.jpg")
psycho = loadImage("horrorPos/psycho.jpg")
exor = loadImage("horrorPos/exorcist.jpg")
alien = loadImage("horrorPos/alien.jpg")
shinn = loadImage("horrorPos/shinning.jpg")
polter = loadImage("horrorPos/poltergeist.jpg")
grem = loadImage("horrorPos/gremlins.jpg")
blair = loadImage("horrorPos/blairwitch.jpg")
sixth = loadImage("horrorPos/sixthsense.jpg")
legden = loadImage("horrorPos/iamledgend.jpg")
worldZ = loadImage("horrorPos/wwz.jpg")
clown = loadImage("horrorPos/it.jpg")


}
function setup() {
  createCanvas(1000, 2800)
  background(10)
  imageMode(CENTER)
for (var i = 0; i < stats.getRowCount(); i++) {
// Gets the value from row i, column 0 in the file
var year = stats.get(i, 1);
var movie = stats.get(i, 0)
var money = stats.get(i, 2)
// money in millions
var sNum = 0
if (stats.get( i, 2)) {
  sNum = (stats.get( i, 2));
}
print(year, movie, money);
}






}

// var g = stats.get(2, 6)



function draw() {
  push()
textSize(30)
text('Horror Movie Posters: size determined by box office results', 50, 50)
  pop()
  fill(255, 255, 255)
  textSize(20)

  image(psycho, 70, 300, stats.get(7, 2) * 1.5, stats.get(7, 2) * 1.5);
  text('Psycho(1960)', 15, 350)
  image(exor, 300, 300, stats.get(3, 2) * 1.5, stats.get(3, 2) * 1.5)
  text('The Exorcist(1973)', 220, 465)
  image(jaws, 670, 300, stats.get(2, 2) * 1.5, stats.get(2, 2) * 1.5)
  text('Jaws(1975)', 600, 515)
  image(alien, 100, 600, stats.get(14, 2) * 1.5, stats.get(14, 2) * 1.5)
  text('Alien(1979)', 50, 685)
  image(shinn, 300, 600, stats.get(42, 2) * 1.5, stats.get(42, 2) * 1.5)
  text('The Shinning(1950)', 220, 655)
  image(polter, 550, 600, stats.get(22, 2) * 1.5, stats.get(22, 2) * 1.5)
  text('Poltergeist(1982)', 474, 678)
  image(grem, 800, 660, stats.get(6, 2) * 1.5, stats.get(6, 2 ) * 1.5)
  text('Gremlins(1984)', 730, 790)
  image(blair, 150, 900, stats.get(21, 2) * 1.5, stats.get(21, 2) * 1.5)
  text('The Blair Witch Project(1999)', 18, 1020)
  image(sixth, 250, 1300, stats.get(4, 2)*1.5, stats.get(4, 2)*1.5)
  text('The Sixth Sense(1999)', 150, 1545)
  image(legden, 700, 1100, stats.get(10, 2) * 1.5, stats.get(10, 2) * 1.5)
  text('I Am Legend(2007', 620, 1320)
  image(worldZ, 700, 1700, stats.get(25, 2) * 1.5, stats.get(25, 2) * 1.5)
  text('World War Z(2013)', 620, 1880)
  image(clown, 270, 1990, stats.get(9, 2) * 1.5, stats.get(9, 2) * 1.5)
  text('IT (2017)', 220, 2270)

}