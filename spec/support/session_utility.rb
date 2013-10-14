module SessionUtility
	
	def valid_signin(user)
	  fill_in "Email",    with: user.email
	  fill_in "Password", with: user.password
	  click_button "Sign in"
	end	

	RSpec::Matchers.define :have_signed_in_appearance do
		match do |page| 
			expect(page).to have_link('Sign out',href: signout_path)
		end	
	end

	RSpec::Matchers.define :have_signed_out_appearance do
		match do |page| 
			expect(page).to have_link('Sign in',href: signin_path)
		end	
	end

	RSpec::Matchers.define :have_signed_user_page_info do |user|
		match do |page| 
			expect(page).to have_title(user.name)
			expect(page).to have_link('Profile', href: user_path(user))
		end	
	end

	RSpec::Matchers.define :have_sign_in_page_text do
	  match do |page|
	  	expect(page).to have_content('Sign in')
		expect(page).to have_title('Sign in')
	  end
	end

	RSpec::Matchers.define :have_welcome_message do
		match do |page| 
			expect(page).to have_selector('div.alert.alert-success', text: 'Welcome') 
		end	
	end

	RSpec::Matchers.define :have_error_message do |message|
	  match do |page|
	    expect(page).to have_selector('div.alert.alert-error', text: message)
	  end
	end
end
