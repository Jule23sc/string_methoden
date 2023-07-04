"use strict";
//console.log("Test")

//aufgabe1_1 length
const firstName = "Adriana";
console.log(firstName.length);

const lastName = "Adrianos";
console.log(lastName.length);

const fullName = firstName + lastName;
console.log(fullName.length);

//aufgabe1_2 indexOf
const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

//aufgabe1_3 search
let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));


//aufgabe_1_4 slice
//const susi = "Susi is going to codingschool.";
//console.log(susi.length);
//document.body.textContent = susi;

//document.body.textContent = susi.slice (0, 4);
//document.body.textContent = susi.slice (5, 7);
//document.body.textContent = susi.slice (0, 7);
//document.body.textContent = susi.slice (5, 29);

//document.body.textContent = susi.slice (5, 16) + susi.slice (16, 30);

//document.body.textContent = susi.slice (0, 8) + susi.slice (23, 30);

//jedes ergebnis speichern?value?



//aufgabe_1_7 replace
//const text = "Sam is good at codingschool";

//console.log(text.replace('good', 'bad'));
//document.body.textContent = text.replace('good', 'bad');

//document.body.textContent = text.replace('Sam', 'Susi');
//document.write(text.replace('Sam', 'Susi') + '<br></br>');

//document.body.textContent = text.replace('codingschool', 'tennis');

//document.write(text + '<br></br>');



//aufgabe_1_8 touppercase tolowercase
const sam = "Sam is going to Codingschool";
console.log(sam);
console.log(sam.length);

const big = sam.toUpperCase();
console.log(big);

const small = sam.toLowerCase();
console.log(small);

const samBig = sam.slice(0,3).toUpperCase();
console.log(samBig);

const schoolBig = sam.slice(16).toUpperCase();
console.log(schoolBig);

const outputSchool = document.querySelector(".school");
outputSchool.innerHTML = samBig + "<br>" + "is going to" + "<br>" + schoolBig;

//aufgabe_1_9 concat
const text1 = "Tim is going to codingschool";
const text2 = "Sally";
const text3 = "and";

const tim = text1.slice(0,15);
console.log(tim);
const timSchool = text1.slice(22);
console.log(timSchool);
const timSchoolBig = timSchool.toUpperCase();
console.log(timSchoolBig);

const all = tim.concat(" ", timSchoolBig, " ", text3, " ", text2, " ", "is lost");
console.log(all);

const outputTIM = document.querySelector("#tim");
outputTIM.innerHTML = all;
