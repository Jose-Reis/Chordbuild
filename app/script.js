
var NOTES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
var alpha = "[A-Ga-g]";//Used in function onKeyValidate

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var fretStart = canvas.getContext('2d');
var notesDraw = canvas.getContext('2d');
var notesText = canvas.getContext('2d');
var majthirdDraw = canvas.getContext('2d');
var majthirdText = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

var radius = 6;
var frX0 = 50;
var frY0 = 50;
var frIncX = 62;
var frIncY = 26;
var frBsWd = 10;
var frBsHe = 132;

var strHe = 2;
var strWd = (frIncX * 15);

var frHe = 132;
var frWd = 2;
var fretNr =15;

function onKeyValidate(e,charVal){
	var keynum;
	var keyChars = /[\x00\x08]/;
	var validChars = new RegExp(charVal);
	if(window.event)
	{
		keynum = e.keyCode;
	}
	else if(e.which)
	{
		keynum = e.which;
	}
	var keychar = String.fromCharCode(keynum);
	if (!validChars.test(keychar) && !keyChars.test(keychar))   {
		return false
	} else{
		return keychar;
	}
}

Array.prototype.rotate = function (n) {
	return this.slice(n, this.length).concat(this.slice(0, n));
}

function Fretstart() {
	fretStart.clearRect(0, 0, canvas.width, canvas.height);
	fretStart.fillStyle = '#65686b';
	var t = document.getElementById("tuning").value.toUpperCase();
	var tLength = t.length;
	for (var i = 0; i < tLength; i++) {
	  fretStart.fillRect(frX0,frY0,frBsWd,(frIncY * i) + strHe);//Fretboard base
	  fretStart.fillRect(frX0+frBsWd,frY0+(frIncY * i),strWd,strHe);//Fretboard strings
	}
	for (var i=0; i<=fretNr; i++) {
	  fretStart.fillRect(frX0+frBsWd-frWd+(frIncX * i),frY0,frWd,frIncY * (tLength - 1));//Frets
	}
	//Fret Markers
	fretStart.beginPath();
	fretStart.arc(frX0+frBsWd-(frIncX/2)+(frIncX * 3), frY0 - 29, radius, 0, 2* Math.PI, false) ;
	fretStart.arc(frX0+frBsWd-(frIncX/2)+(frIncX * 5), frY0 - 29, radius, 0, 2* Math.PI, false) ;
	fretStart.arc(frX0+frBsWd-(frIncX/2)+(frIncX * 7), frY0 - 29, radius, 0, 2* Math.PI, false) ;
	fretStart.arc(frX0+frBsWd-(frIncX/2)+(frIncX * 9), frY0 - 29, radius, 0, 2* Math.PI, false) ;
	fretStart.fill();
	fretStart.beginPath();
	fretStart.arc(frX0+frBsWd-(frIncX/2)+(frIncX * 12), frY0 - 19, radius, 0, 2* Math.PI, false) ;
	fretStart.arc(frX0+frBsWd-(frIncX/2)+(frIncX * 12), frY0 - 39, radius, 0, 2* Math.PI, false) ;
	fretStart.fill();
}

function Chord(name, notes) {

	this.name = name;
	this.notes = notes;

	this.set = function(){
		var note = document.getElementById("notelist");
		var root = note.options[note.selectedIndex].value;
		var rnotes = [];
		var rootNotes = NOTES.rotate(root);
		for (var i = 0; i < this.notes.length; i++) {
			let j = 0;
			while (this.notes[i] != j) {
				j++;
			}
			rnotes.push(rootNotes[j]);
		}
		return rnotes;
	}

	this.draw = function() {
		var t = document.getElementById("tuning").value.toUpperCase();
		var tLength = t.length;
		var roots = t.split("");

		for (let i = 0; i < tLength; i++) {
			let a = NOTES.slice().rotate(NOTES.indexOf(roots[i]));
			let aa = a.slice();
			let b = this.set();
			console.log("teste" + b[0]);
			for (let k=0; k<= (fretNr-NOTES.length); k++) {
				aa.push(aa[k]);
			}
			
			for (let j = 0; j  <  fretNr+1; j++)  {
				let c = b[0].includes(aa[j]);
				let d = b.includes(aa[j]);
				if (c) {				
					notesDraw.beginPath();
					notesDraw.fillStyle = '#232ed1';
					notesDraw.arc(frX0+frBsWd-(frWd/2)+(frIncX / 2) * (j + (j-1)), frY0, radius+5, 0, 2* Math.PI, false);
					notesDraw.fill();
					notesText.fillStyle = '#FFFFFF';
					notesText.font="12px sans-serif";
					notesText.textBaseline = "middle";
					notesText.textAlign="center";
					notesText.fillText(aa[j], frX0+frBsWd-(frWd/2)+(frIncX / 2) * (j + (j-1)), frY0);
				} 
				else if (d) {				
					notesDraw.beginPath();
					notesDraw.fillStyle = '#4b54d9';
					notesDraw.arc(frX0+frBsWd-(frWd/2)+(frIncX / 2) * (j + (j-1)), frY0, radius+5, 0, 2* Math.PI, false);
					notesDraw.fill();
					notesText.fillStyle = '#FFFFFF';
					notesText.font="12px sans-serif";
					notesText.textBaseline = "middle";
					notesText.textAlign="center";
					notesText.fillText(aa[j], frX0+frBsWd-(frWd/2)+(frIncX / 2) * (j + (j-1)), frY0);
				}
			}
		frY0 = frY0 + frIncY;	
		}
	}
}

var majorChord = new Chord("Major Chord", [0, 4, 7]);
var minorChord = new Chord("Minor Chord", [0, 3, 7]);
var diminished = new Chord("Diminished Chord", [0, 3, 6]);
var augmented = new Chord("Augmented Chord", [0, 4, 8]);
var suspended2 = new Chord("Suspended 2nd", [0, 2, 7]);
var suspended4 = new Chord("Suspended 4th", [0, 5, 7]);

var majorSeven = new Chord("Major Seventh", [0, 4, 7, 11]);
var dominSeven = new Chord("Dominant Seventh", [0, 4, 7, 10]);
var minorSeven = new Chord("Minor Seventh", [0, 3, 7, 10]);
var diminSeven = new Chord("Diminished Seventh", [0, 3, 6, 9]);
var hdimiSeven = new Chord("Half-Diminished Seventh", [0, 3, 6, 10]);

var majorSeven = new Chord("Major Seventh", [0, 4, 7, 11]);
var dominSeven = new Chord("Dominant Seventh", [0, 4, 7, 10]);
var minorSeven = new Chord("Minor Seventh", [0, 3, 7, 10]);
var diminSeven = new Chord("Diminished Seventh", [0, 3, 6, 9]);
var hdimiSeven = new Chord("Half-Diminished Seventh", [0, 3, 6, 10]);

var sixthChord = new Chord("Sixth Chord", [0, 4, 7, 9]);
var dominNinth = new Chord("Dominant Ninth", [0, 2, 4, 7, 10]);
var majorNinth = new Chord("Major Ninth", [0, 4, 7, 11, 2]);
var minorNinth = new Chord("Minor Ninth", [0, 3, 7, 11, 2]);
var dominMin9 = new Chord("Dominant Minor Ninth", [0, 4, 7, 10, 1]);

function BuildChord() {
	sel = document.getElementById('chordList');
	selChord = sel.options[sel.selectedIndex].value;
	switch (selChord) 
	{
		case "MajorChord":
			console.log(majorChord.name);
			majorChord.draw();
			break;
		case "MinorChord":
			console.log(minorChord.name);
			minorChord.draw();
			break;
		case "DiminChord":
			console.log(diminished.name);
			diminished.draw();
			break;
		case "AugmeChord":
			console.log(augmented.name);
			augmented.draw();
			break;
		case "Suspended2":
			console.log(suspended2.name);
			suspended2.draw();
			break;
		case "Suspended4":
			console.log(suspended4.name);
			suspended4.draw();
			break;		
		case "MajorSeven":			
			console.log(majorSeven.name);
			majorSeven.draw();
			break;
		case "DominSeven":			
			console.log(dominSeven.name);
			dominSeven.draw();
			break;
		case "MinorSeven":			
			console.log(minorSeven.name);
			minorSeven.draw();
			break;
		case "DiminSeven":			
			console.log(diminSeven.name);
			diminSeven.draw();
			break;
		case "HDimiSeven":			
			console.log(hdimiSeven.name);
			hdimiSeven.draw();
			break;
		case "SixthChord":			
			console.log(sixthChord.name);
			sixthChord.draw();
			break;
		case "DominNinth":			
			console.log(dominNinth.name);
			dominNinth.draw();
			break;
		case "MajorNinth":			
			console.log(majorNinth.name);
			majorNinth.draw();
			break;
		case "MinorNinth":			
			console.log(minorNinth.name);
		 	minorNinth.draw();		
			break;
		case "DominMin9":			
			console.log(dominMin9.name);
		 	dominMin9.draw();		
			break;
		default: alert("Error on BuildChord. This chord was not added yet");
	}

}

function Start() {
	frY0 = 50;
	Fretstart();
	BuildChord();
}







