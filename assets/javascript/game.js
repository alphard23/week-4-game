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

    var totalScore = 0; //user's score
    var wins = 0;
    var losses = 0;

    // FUNCTIONS

    // Computer picks a random number:
    function pickRandomNumber(arr) {

        var x = arr[Math.floor(Math.random() * arr.length)];
        randNumber = x;

        return randNumber;
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

    // Generate a random number at start of the game between 19-120;
    pickRandomNumber(rand);
    $("#randomNumber").html(randNumber);

    // Generate a integer value for each logo at start of the game between 1-12;
    pickRandomWizards(wizards);

    // Respond to user clicks
    $("img").click(function() {
        console.log(this.id);
        var outcomeText = "";
        $("#wonlost").html(outcomeText);

        // Add up the logo values and display user score;
        totalScore += wizardNumbers[this.id - 1];

        // Update user score on game board
        $("#userPoints").html(totalScore);

        // CHECK USER SCORE AGAINST CURRENT RANDOM TARGET
        // IF GAME IS OVER THEN...
        // CALC WIN OR LOSS
        if (totalScore === randNumber) {
            wins++;
            outcomeText = "You won!";
        } else if (totalScore > randNumber) {
            losses++;
            outcomeText = "You lost, sucka";
        } else { return; }

        console.log("wins: " + wins + "\nlosses: " + losses);

        // Communicate to user
        $("#wonlost").html(outcomeText);
        $("#youwin").html(" " + wins);
        $("#youlost").html(" " + losses);


        // RESET GAME BOARD

        // Reset totalScore to 0;
        totalScore = 0;
        $("#userPoints").html(totalScore);

        // Generate a new random number at each game reset between 19-120;
        pickRandomNumber(rand);
        $("#randomNumber").html(randNumber);
        // Generate new integer values for each logo between 1-12 at game reset;
        wizardNumbers = [];
        pickRandomWizards(wizards);

    });

});