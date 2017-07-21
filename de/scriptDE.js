document.getElementById("clipboard").disabled = true;
	
// needed days
var RELEASE_DATE = new Date(2016, 6, 06);	
var JOHTO_DATE = new Date(2017, 1, 16);
var GYM_UPDATE_DATE = new Date(2017, 5, 22);
	
// handle variables
var myBeginDate;
var todayDate;

// used for division
var allDays;
var sinceGymUpdate;
var sinceJohto;
var toGymUpdate;

// vars
var avgExp = 0;
var avgKm = 0;
var avgPst = 0;
var avgCpkm = 0;
var avgEvo = 0;
var avgEgg = 0;
var avgKent = 0;
var avgJent = 0;
var avgGymb = 0;
var avgGymt = 0;
var avgGymd = 0;
var avgFeed = 0;
var avgRaid = 0; 
var avgMon = 0;

var myOutput = "";

function calculate() {
		
	// get time
	var time = document.getElementById("begin").value;
	
	// check if date is valid
	if (time != "") {
	
		document.getElementById("calc").disabled = true;
		document.getElementById("clipboard").disabled = false;
		
		var date = time.split("-");
		
		// get date from user and get todays date
		myBeginDate = new Date(date[0], date[1]-1, date[2]);				
		todayDate = new Date();								
		
		/*
		alert(date);
		alert(RELEASE_DATE);
		alert(JOHTO_DATE);
		alert(GYM_UPDATE_DATE);
		alert("y: " + date[0] + " m: " + date[1] + " d: " + date[2]);
		alert(myBeginDate.getMonth());
		alert("begin date: " + myBeginDate);				
		*/				
		
		// in case ot today date before begin date
		if (todayDate < myBeginDate) {
			alert("Error: Todays date can't be before begin date!");
			allDays = 0;							
		} else {
			allDays = todayDate - myBeginDate;							
		}
		
		// in case today date before sinceGymUpdate
		if (todayDate < sinceGymUpdate) {
			alert("Error: Todays date can't be before gym update date!");
			sinceGymUpdate = 0;
		} else {
			sinceGymUpdate = todayDate - GYM_UPDATE_DATE;
		}
		
		// in case of today date before JOHTO_DATE
		if (todayDate < JOHTO_DATE) {
			alert("Error: Todays date can't be before johto date!");
			sinceJohto = 0;
		} else {
			sinceJohto = todayDate - JOHTO_DATE;
		}
		
		// in case player started after gym update
		if (GYM_UPDATE_DATE < myBeginDate) {
			toGymUpdate = 0;
		} else {
			toGymUpdate = GYM_UPDATE_DATE - myBeginDate;
		}

		// convert from milliseconds to days without comma
		allDays = (allDays / (1000*60*60*24)).toFixed(0);
		sinceJohto = (sinceJohto / (1000*60*60*24)).toFixed(0);
		sinceGymUpdate = (sinceGymUpdate / (1000*60*60*24)).toFixed(0);
		toGymUpdate = (toGymUpdate / (1000*60*60*24)).toFixed(0);
		
		//alert(allDays + " " + sinceJohto + " " + sinceGymUpdate + " " + toGymUpdate);				
		
		// get values
		avgExp = document.getElementById("exp").value;
		avgKm = document.getElementById("km").value;
		avgPst = document.getElementById("pst").value;
		avgCpkm	= document.getElementById("cpkm").value;
		avgEvo = document.getElementById("evo").value;
		avgEgg = document.getElementById("egg").value;
		avgKent = document.getElementById("kent").value;
		avgJent = document.getElementById("jent").value;
		avgGymb = document.getElementById("gymb").value;
		avgGymt = document.getElementById("gymt").value;
		avgGymd = document.getElementById("gymd").value;
		avgFeed = document.getElementById("feed").value; 
		avgRaid = document.getElementById("raid").value;
		avgMon = document.getElementById("mon").value;							

		// avg calculation and set new values fixed to two decimals
		document.getElementById("exp").value = (avgExp/allDays).toFixed(0);				// seit beginn		
		document.getElementById("km").value = (avgKm/allDays).toFixed(3);		
		document.getElementById("pst").value = (avgPst/allDays).toFixed(0);		
		document.getElementById("cpkm").value = (avgCpkm/allDays).toFixed(1);		
		document.getElementById("evo").value = (avgEvo/allDays).toFixed(1);		
		document.getElementById("egg").value = (avgEgg/allDays).toFixed(1);		
		document.getElementById("kent").value = (avgKent/allDays).toFixed(2);			
		document.getElementById("jent").value = (avgJent/sinceJohto).toFixed(2);		// seit johto
		document.getElementById("gymb").value = (avgGymb/allDays).toFixed(1);			// seit beginn
		document.getElementById("gymt").value = (avgGymt/toGymUpdate).toFixed(1);		// bis arena update
		document.getElementById("gymd").value = (avgGymd/sinceGymUpdate).toFixed(0); 	// ab arena update		
		document.getElementById("feed").value = (avgFeed/sinceGymUpdate).toFixed(2); 			
		document.getElementById("raid").value = (avgRaid/sinceGymUpdate).toFixed(1); 			
		document.getElementById("mon").value = (avgMon/allDays).toFixed(2);				// seit beginn
		
		myOutput = 	"Während du bereits " + allDays + " Tage PokémonGo gespielt hast, hast du " + (avgExp/allDays).toFixed(0) + " EP pro Tag gefarmt. Dazu warst du " + (avgKm/allDays).toFixed(3) +
					" Kilometer pro Tag unterwegs und hast dabei im Schnitt " + (avgPst/allDays).toFixed(0) + " Pokéstops abgedreht, " + (avgCpkm/allDays).toFixed(1) +
					" Pokémon gefangen und " + (avgEgg/allDays).toFixed(1) + " Eier ausgebrütet. Dazu hast du " + (avgEvo/allDays).toFixed(1) +
					" Pokémon entwickelt. \n\nSeit Beginn des Spiels hast du pro Tag " + (avgKent/allDays).toFixed(2) + " Pokémon aus der Kanto Region und " + 
					(avgJent/sinceJohto).toFixed(2) + " Pokémon aus der Johto Region gefangen. \n\nPro Tag hast du " + (avgGymb/allDays).toFixed(1) +
					" mal an Arenen gekämpft und bis zum Arenen Update " + (avgGymt/toGymUpdate).toFixed(1) + " mal trainiert. Seit dem Arenen Update saßen deine Pokémon " + 
					(avgGymd/sinceGymUpdate).toFixed(0) + " Stunden pro Tag in Arenen, du hast täglich " + (avgFeed/sinceGymUpdate).toFixed(1) + " Beeren gefüttert und " + 
					(avgRaid/sinceGymUpdate).toFixed(1) + " Raids pro Tag bestritten. \n\nDas alles hat dich pro Tag " + (avgMon/allDays).toFixed(2) + " Euro gekostet.";
		
		document.getElementById("comment").rows = 10;
		document.getElementById("comment").value = myOutput;	
		
		//alert(myOutput);
								
	} else {
		alert("Bitte ein gültiges Datum eingeben!");
	}			
}

// found on stackoverflow (https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript/33928558#33928558)
function copyToClipboard(text) {
	if (window.clipboardData && window.clipboardData.setData) {
		// IE specific code path to prevent textarea being shown while dialog is visible.
		return clipboardData.setData("Text", text); 
	} else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
		var textarea = document.createElement("textarea");
		textarea.textContent = text;
		textarea.style.position = "fixed";  			// Prevent scrolling to bottom of page in MS Edge.
		document.body.appendChild(textarea);
		textarea.select();
		try {
			return document.execCommand("copy");  		// Security exception may be thrown by some browsers.
		} catch (ex) {
			console.warn("Copy to clipboard failed.", ex);
			return false;
		} finally {
			document.body.removeChild(textarea);
		}
	}
}
	
function reset() {

	document.getElementById("clipboard").disabled = true;
	
	var res = confirm("Möchten Sie wirklich alle Werte zurücksetzen?");
	
	if (res) {
		document.getElementById("begin").value = "2016-07-13";		
		document.getElementById("exp").value = avgExp;		
		document.getElementById("km").value = avgKm;		
		document.getElementById("pst").value = avgPst;		
		document.getElementById("cpkm").value = avgCpkm;		
		document.getElementById("evo").value = avgEvo;		
		document.getElementById("egg").value = avgEgg;		
		document.getElementById("kent").value = avgKent;
		document.getElementById("jent").value = avgJent;
		document.getElementById("gymb").value = avgGymb;		
		document.getElementById("gymt").value = avgGymt;		
		document.getElementById("gymd").value = avgGymd;		
		document.getElementById("feed").value = avgFeed;		
		document.getElementById("raid").value = avgRaid;		
		document.getElementById("mon").value = avgMon;
		document.getElementById("comment").value = "";
		document.getElementById("comment").rows = 2;
		document.getElementById("calc").disabled = false;				
	} 
}