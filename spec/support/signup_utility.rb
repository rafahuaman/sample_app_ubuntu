module SignUpUtility
	
	def valid_signup
		fill_in "Name",			with: "Example User"
		fill_in "Email", 		with: "user@example.com"
		fill_in "Password",		with: "foobar"
		fill_in "Confirmation",	with: "foobar"
	end

	def invalid_signup_with_password_mismatch
		fill_in "Name",			with: "Example User"
		fill_in "Email", 		with: "user@example.com"
		fill_in "Password",		with: "foobar" 
		click_button submit
	end

	RSpec::Matchers.define :have_signup_page_appearance do
	  match do |page|
	    expect(page).to have_content('Sign up')
		expect(page).to have_title('Sign up')
	  end
	end
	
	RSpec::Matchers.define :have_invalid_signup_with_blanks_message do
	  match do |page|
	    expect(page).to have_content('error')
		expect(page).to have_content('Name can\'t be blank' )
		expect(page).to have_content('Email can\'t be blank' )
		expect(page).to have_content('Password can\'t be blank' )
		expect(page).to have_content('Password is too short (minimum is 6 characters)' )
	  end
	end

	RSpec::Matchers.define :have_invalid_signup_with_password_mismatch_message do
	  match do |page|
	    expect(page).to have_content('Password confirmation can\'t be blank' )
		expect(page).to have_content('Password confirmation doesn\'t match Password' )
	  end
	end

end