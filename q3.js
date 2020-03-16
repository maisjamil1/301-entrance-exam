'use strict'
var todaydate$$=document.getElementById('todaydate');
todaydate$$.textContent=Date();
var DayNotes = [];
function DayNote(note, date$) {
  this.note = note;
  this.date$ = date$;
  DayNotes.push(this);
}

var myForm = document.getElementById('fooorm');
var myBtn= document.getElementById('btn');
myForm.addEventListener('submit', func);
 function func(event){
  event.preventDefault();
  var myNote = document.getElementById("note1").value;
var myDate = document.getElementById("choosedate1").value;
var myNewNotesAndDate= new DayNote(myNote,myDate);
console.log(myNewNotesAndDate);
console.log(DayNotes);
saveToStorage();

};

function saveToStorage(){
  var DayNotesString=JSON.stringify(DayNotes);
  localStorage.setItem('noteWithDate',DayNotesString);
}
function getTheNote(){
  var DayNotesString =localStorage.getItem('noteWithDate');
  if(DayNotesString){
    DayNotes=JSON.parse(DayNotesString);
    render();
  }
  getTheNote();
}
var output$=document.getElementById('output')
function render(){
  for (var i=0;i<DayNotes.length;i++){
  var par1=document.createElement('p');
  output$.appendChild(par1);
  par1.textContent=DayNotes[i].note;
}
}