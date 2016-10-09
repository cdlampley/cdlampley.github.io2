$(document).ready(function(){
//TBR Jar book picking logic
    $('#tbr-challenge').submit(function(e){
      e.preventDefault();
	  //list of books
	  var books = [
	  	{
	  	title: 'Clockwork Angel',
	  	author: 'Cassandra Clare',
	  	cover:
	  	},
	  	{
	  	title: 'The Golem and the Jinni',
	  	author: 'Helene Wecker',
	  	cover:
	  	},
	  	{
	  	title: 'The Cuckoos Calling',
	  	author: 'Robert Galbraith',
	  	cover:
	  	},
	  	{
	  	title: 'Vampire Academy',
	  	author: 'Richelle Mead',
	  	cover:
	  	},
	  	{
	  	title: 'The Name of the Wind',
	  	author: 'Patrick Rothfuss',
	  	cover:
	  	},
	  	{
	  	title: 'Lexicon',
	  	author: 'Max Barry',
	  	cover:
	  	},
	  	{
	  	title: 'Sekret',
	  	author: 'Lindsay Smith',
	  	cover:
	  	},
	  	{
	  	title: 'Monument 14',
	  	author: 'Emmy Laybourne',
	  	cover:
	  	},
	  	{
	  	title: 'Article 5',
	  	author: 'Kristen Simmons',
	  	cover:
	  	},
	  	{
	  	title: 'The Kite Runner',
	  	author: 'Khaled Hosseini',
	  	cover:
	  	},
	  	{
	  	title: 'The Tragedy Paper',
	  	author: 'Elizabeth LaBan',
	  	cover:
	  	},
	  	{
	  	title: 'Boy, Snow, Bird',
	  	author: 'Helen Oyeyemi',
	  	cover:
	  	},
	  	{
	  	title: 'Reboot',
	  	author: 'Amy Tintera',
	  	cover:
	  	},
	  	{
	  	title: 'Sea of Shadows',
	  	author: 'Kelley Armstrong',
	  	cover:
	  	},
	  	{
	  	title: 'The Enchanted',
	  	author: 'Rene Denfeld',
	  	cover:
	  	},
	  	{
	  	title: 'The Flame Throwers',
	  	author: 'Rachel Kushner',
	  	cover:
	  	},
	  	{
	  	title: 'Scarlett',
	  	author: 'Marissa Meyer',
	  	cover:
	  	},
	  	{
	  	title: 'Leigh Bardugo',
	  	author: 'Shadow and Bone',
	  	cover:
	  	},
	  	{
	  	title: 'The Interestings',
	  	author: 'Meg Wolitzer',
	  	cover:
	  	},
	  	{
	  	title: 'The Queen of the Tearling',
	  	author: 'Erika Johansen',
	  	cover:
	  	},
	  	{
	  		title: 'Hollow City',
	  		author: 'Ransom Riggs',
	  		cover:
	  	},
	  	{
	  		title: 'Scorpio Races',
	  		author: 'Maggie Stiefvater',
	  		cover:
	  	},
	  	{
	  		title: 'The Quick',
	  		author: 'Lauren Owen',
	  		cover:
	  	},
	  	{
	  		title: 'Silver Sparrow',
	  		author: 'Tayara Jones',
	  		cover:
	  	},
	  	{
	  		title: 'Interview With the Vampire',
	  		author: 'Anne Rice',
	  		cover:
	  	},
	  	{
	  		title: 'The Book Theif',
	  		author: 'Markus Zusak',
	  		cover:
	  	},
	  	{
	  		title: 'Life After Life',
	  		author: 'Kate Atkinson',
	  		cover:
	  	},
	  	{
	  		title: 'An Ember in the Ashes',
	  		author: 'Sabaa Tahir',
	  		cover:
	  	},
	  	{
	  		title: 'Blue Lily, Lily Blue',
	  		author: 'Maggie Stiefvater',
	  		cover:
	  	},
	  	{
	  		title: 'An Untamed State',
	  		author: 'Roxane Gay',
	  		cover:
	  	},
	  	{
	  		title: 'First & Then',
	  		author: 'Emma Mills',
	  		cover:
	  	},
	  	{
	  		title: 'The Song of Achilles',
	  		author: 'Madeline Miller',
	  		cover:
	  	},
	  	{
	  		title: 'A Reunion of Ghosts',
	  		author: 'Judith Claire Mitchell',
	  		cover:
	  	},
	  	{
	  		title: 'Cruel Beauty',
	  		author: 'Rosamund Hodge',
	  		cover:
	  	},
	  	{
	  		title: 'City of Dark Magic',
	  		author: 'Magnus Flyte',
	  		cover:
	  	},
	  	{
	  		title: 'Girl At War',
	  		author: 'Sara Novic',
	  		cover:
	  	},
	  	{
	  		title: 'The Book of Speculation',
	  		author: 'Erika Swyler',
	  		cover:
	  	},
	  	{
	  		title: 'The Rosie Project',
	  		author: 'Graeme Simsion',
	  		cover:
	  	},
	  	{
	  		title: 'Burial Rites',
	  		author: 'Hannah Kent',
	  		cover:
	  	},
	  	{
	  		title: 'The Magician King',
	  		author: 'Lev Grossman',
	  		cover:
	  	},
	  	{
	  		title: 'Legacy of Kings',
	  		author: 'Eleanor Herman',
	  		cover:
	  	},
	  	{
	  		title: 'The One & Only',
	  		author: 'Emily Giffin',
	  		cover:
	  	},
	  	{
	  		title: 'The Warrior Heir',
	  		author: 'Cinda Williams Chima',
	  		cover:
	  	},
	  	{
	  		title: 'City of Ashes',
	  		author: 'Cassandra Clare',
	  		cover:
	  	}
	  ];
	  //picking the next read
	  var random = books[Math.floor(Math.random() * books.length)];
	  $('#book').text(random).fadeIn('slow', function(){});
	$('#read').show();
	$('#refresh-button').show();
	$('#tbr-challenge').hide();
	  });	
});