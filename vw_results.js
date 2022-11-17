"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 2

   Author: Michele Helm
   Date:   11/16/2022
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
// Initialize reportHTML variable
var reportHTML = "<h1>" + raceTitle + "</h1>";

// Loop through each item in the race array
for (var i = 0; i < race.length; i++) {
    var totalVotes = 0;
    votes[i].forEach(calcSum);

    reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>";
    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>"
}

document.getElementsByTagName("section")[0].innerHTML = reportHTML;

function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";

    for (var j = 0; j < 3; j++) {
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);

        rowHTML += "<tr><td>" + candidateName + " (" + candidateParty + ")</td><td>"+ candidateVotes.toLocaleString()+"("+candidatePercent.toFixed(1)+"%)"+"</td>";
        
        // create a for loop to draw the bar
        for (var k = 0; k < candidatePercent; k++) {
            rowHTML += createBar(candidateParty);
        }
        
        rowHTML += "</tr>";

    }    

    return rowHTML;
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}

function createBar(partyType) {
    var barHTML = "";

    switch (partyType) {
        case "D":
            barHTML = "<td class = 'dem'></td>";
            break;

        case "R":
            barHTML = "<td class = 'rep'></td>";
            break;

        case "I":
            barHTML = "<td class = 'ind'></td>";
            break;
    }

    return barHTML;
}

