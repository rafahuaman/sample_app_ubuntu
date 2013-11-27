updateCountdown = ->
	remaining = 140 - jQuery("#micropost_content").val().length
	char_word = pluralize_characters(remaining)
	jQuery(".countdown").text remaining + " " + char_word + " remaining"
	# " " + pluralize_characters(remaining) +" remaining"

pluralize_characters = (char_count) -> 
	if char_count == 1 then 'character' else 'characters'

jQuery ->
	updateCountdown()
	$("#micropost_content").change updateCountdown
	$("#micropost_content").keyup updateCountdown