$(document).ready(function() {
  // this fires when the form is submitted
  $('#limerick-form').submit(function(e) {
    // prevent the submit button from refreshing the page
    e.preventDefault();
		
    // copy this line (line 5) for each word you will be replacing; .val() gets the value of the input field
    var nounOne = $('input#noun-one').val();
    var verbOne = $('input#verb-one').val();
    var nounTwo = $('input#noun-two').val();
    var nounThree = $('input#noun-three').val();
    var nounFour = $('input#noun-four').val();
    var nounFive = $('input#noun-five').val();
    // this adds the submitted word to the limerick via a span tag id
    $('span#noun-one-new').text(nounOne);
    $('span#verb-one-new').text(verbOne);
    $('span#noun-two-new').text(nounTwo);
    $('span#noun-three-new').text(nounThree);
    $('span#noun-four-new').text(nounFour);
    $('span#noun-five-new').text(nounFive);
    // add a line here to show the limerick with the new words
    $('#limerick').show();
		$('#limerick-form').hide();
  });
});


