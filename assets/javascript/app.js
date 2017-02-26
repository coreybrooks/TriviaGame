$(document).ready( function() {

//display global variables
var rightQuestions = 0, wrongQuestions = 0, unasweredQuestions = 0, time; 
var rustyCage = new Audio('assets/images/rustyCage.mp3');
var manInTheBox = new Audio('assets/images/manInTheBox.mp3');
var smellsLikeTeenSpirit = new Audio('assets/images/smellsLikeTeenSpirit.mp3');

function startMusic(){
smellsLikeTeenSpirit.play();
  }

  startMusic();

//function that runs when the start button is clicked
   $('.start').on('click', function() {

   	smellsLikeTeenSpirit.pause();
   	rustyCage.play();

   	$('.startDiv').attr('style', 'display: none');
   	$('.questionsDiv').attr('style', 'display: normal');
   	$('.resultsDiv').attr('style', 'display: none');

   	//setup timeout function to end after 2 minutes



    twoMinutes();
   	triviaFunction();
   })

//runs a timed interval, displays the amount of time remaining, and goes to results when the time runs out

function twoMinutes(){
        t=120;

        timer = setInterval(function(){
        t--;
        console.log('t' + t);
        
        if(t>=0){
            $('.timerBottom').text(t);
        }
        if(t==0){
            displayResults();
            clearInterval(timer);
        }
    },1000);
}

// Start


    function triviaFunction() {
    	console.log('triviaFunction is working');
      //diplay the questions in the play area
      $('.startDiv').attr('display', 'none');
      $('.resultsDiv').attr('display', 'none');	



	   	$('.done').on('click', function() {
	   		console.log('done button is working');
	   		clearInterval(timer);
	   		displayResults();
	   	 //done click end	
	   	})

   	//triviaFunction end
   }

   function displayResults() {
   	console.log('displayResults is working');
   	rustyCage.pause();
    manInTheBox.play();
  	$('.startDiv').attr('style', 'display: none');
   	$('.questionsDiv').attr('style', 'display: none');
   	$('.resultsDiv').attr('style', 'display: normal');

   	//The section below compares user answers to actual answers. When I have more time I would like to set up a loop
   	//to compare multiple arrays with both user answers and actual answers

          	//question 1, a
   	if($('#1a').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#1b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#1c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#1d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}

          	//question 2, d
   	if($('#2a').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#2b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#2c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#2d').is(':checked')){
        rightQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}

          	//question 3, b
   	if($('#3a').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#3b').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#3c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#3d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}

          	//question 4, a
   	if($('#4a').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#4b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#4c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#4d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}

   	          	//question 5, c
   	if($('#5a').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#5b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#5c').is(':checked')){
        rightQuestions += 1;
   	}
  	else if($('#5d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}

   	          	//question 6, b
   	if($('#6a').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#6b').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#6c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#6d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}

   	          	//question 7, d
   	if($('#7a').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#7b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#7c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#7d').is(':checked')){
        rightQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}
          	//question 8, a
   	if($('#8a').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#8b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#8c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#8d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}
          	//question 9, c
   	if($('#9a').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#9b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#9c').is(':checked')){
        rightQuestions += 1;
   	}
  	else if($('#9d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}
          	//question 10, b
   	if($('#10a').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#10b').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#10c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#10d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}


   	//
   	$('#rightQuestions').html(rightQuestions);
   	$('#wrongQuestions').html(wrongQuestions);
   	$('#unasweredQuestions').html(unasweredQuestions);
   	console.log('unanswered questions' + unasweredQuestions);

   	//displayResults end
   }
 //document ready end
})