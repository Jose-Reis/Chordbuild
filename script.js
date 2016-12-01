
/*Array.prototype.rotate = (function() {
	var unshift = Array.prototype.unshift,
	splice = Array.prototype.splice;

	return function(count) {
		var len = this.length >>> 0,
		count = count >> 0;

		unshift.apply(this, splice.call(this, count % len, len));
		return this;
	};
})();*/

/*function getInfo() {
	var tone = document.getElementById("notelist").value;
	var string = document.getElementById("stringList").value;
	var tuning = document.getElementById("tuning").value;
	var chord = document.getElementById("chordList").value;
	document.getElementById("noteout").innerHTML = tone + ", " + string + ", " + chord + ", " + tuning;
};*/
// Chord Triads
/*function majorChord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[4] + ", " + notes[7];
};
function minorChord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[3] + ", " + notes[7];
};
function augChord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[4] + ", " + notes[8];
};
function dimChord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[3] + ", " + notes[6];
};
function sus2Chord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[2] + ", " + notes[7];
};
function sus4Chord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[5] + ", " + notes[7];
};
// 7th Chords
function maj7Chord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[4] + ", " + notes[7] + ", " + notes[11];
};
function min7Chord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[3] + ", " + notes[7] + ", " + notes[10];
};
function dom7Chord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[4] + ", " + notes[7] + ", " + notes[10];
};
function dim7Chord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[3] + ", " + notes[6] + ", " + notes[9];
};
function halfdim7Chord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[3] + ", " + notes[6] + ", " + notes[10];
};
function minmaj7Chord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[3] + ", " + notes[7] + ", " + notes[11];
};
function aug7Chord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[4] + ", " + notes[8] + ", " + notes[11];
};
function augmin7Chord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[4] + ", " + notes[8] + ", " + notes[10];
};
function dimmaj7Chord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[3] + ", " + notes[6] + ", " + notes[11];
};
function dom7b5Chord() {
	var note = document.getElementById("notelist").value;
	var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
	notes.rotate(note);
	document.getElementById("noteout").innerHTML = notes[0] + ", " + notes[4] + ", " + notes[6] + ", " + notes[10];
};*/