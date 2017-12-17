// Generate a random number at start of the game between 19-120;
// Generate a new random number at each game reset between 19-120;
// Add up the logo values and display user score;
// Generate a integer value for each logo at start of the game between 1-12;
// Generate new integer values for each logo between 1-12 at game reset;
$(document).ready(function() {

            // Random computer variable array
            var rand = [];
            for (var r = 19; r < 121; r++) {
                rand.push(r);
            }

            // Wizard number array
            var wizards = [];
            for (var w = 1; w < 13; w++) {
                wizards.push(w);
            }

            // GLOBAL VARIABLES

            // random variables selected by computer
            var randNumber; //number to match
            var wizardNumbers = []; //array of wizard values

            var g;
            var h;
            var s;
            var r;

            var totalScore = 0; //user's score
            var wins = 0;
            var losses = 0;

            // FUNCTIONS

            // Computer picks a random number:
            function pickRandomNumber(arr) {

                var x = arr[Math.floor(Math.random() * arr.length)];
                randNumber = x;
                $("#randomNumber").html(randNumber);

                console.log("random number: " + randNumber);

            } // End of computer picks a random number

            // Pick random number for wizard houses
            function pickRandomWizards(arr) {

                for (var y = 0; y < 4; y++) {

                    var a = arr[Math.floor(Math.random() * arr.length)];

                    wizardNumbers.push(a);
                }

                console.log("wizard numbers: " + wizardNumbers);

            } // End of pick random wizard houses