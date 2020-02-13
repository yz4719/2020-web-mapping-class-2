// when something with class album-list-cover is clicked, run some code
$('.Cities').on('click', function() {
	// pull out the album cover url from the element's attributes
	var mapUrl = $(this).attr('onclick')
  // log the album cover url to the console
  console.log(mapUrl)

  // clear the initial text from the div with id album-art
  $('#space').empty()

  // set the background-image of the div with id album-art to url(...)
  // I use a string literal to concatenate 'url(' + albumCoverUrl + ')'

  $('#space').css('background-image', `url(${mapUrl})`)
})
