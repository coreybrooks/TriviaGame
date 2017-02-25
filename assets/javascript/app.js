$(document).ready( function() {

//display global variables
var rightQuestions = 0, wrongQuestions = 0, unasweredQuestions = 0, time; 


//function that runs when the start button is clicked
   $('.start').on('click', function() {
   	$('.startDiv').attr('style', 'display: none');
   	$('.questionsDiv').attr('style', 'display: normal');
   	$('.resultsDiv').attr('style', 'display: none');

   	//setup timeout function to end after 2 minutes



    twoMinutes();
   	triviaFunction();
   })

//runs a timed interval, displays the amount of time remaining, and goes to results when the time runs out

function twoMinutes(){
        t=10;

        timer = setInterval(function(){
        t--;
        console.log('t' + t);
        
        if(t>=0){
            $('.timerSpan').text(t);
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
  	$('.startDiv').attr('style', 'display: none');
   	$('.questionsDiv').attr('style', 'display: none');
   	$('.resultsDiv').attr('style', 'display: normal');

          	//question 1
   	if($('#1t').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#1f').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}
   	          	//question 2
   	if($('#2f').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#2t').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}
   	   	         //question 3
   	if($('#3f').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#3t').is(':checked')){
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