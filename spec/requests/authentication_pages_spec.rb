require 'spec_helper'



describe "Authentication" do

	subject { page }

	describe "signin page" do
		before { visit signin_path }

		it { should have_sign_in_page_text }		

		describe "with invalid information" do
			before { click_button "Sign in" }

			it { should have_sign_in_page_text }
			it { should have_error_message('Invalid') }

			describe "after visiting another page" do
				before { click_link "Home" }

				it { should_not have_error_message('Invalid') }
			end
		end

		describe "with valid information" do
			let(:user) { FactoryGirl.create (:user) }
			before { valid_signin(user) }

			it { should have_signed_user_page_info(user) }
			it { should have_signed_in_appearance }
			it { should_not have_signed_out_appearance }

			describe "followed by signout" do
				before { click_link "Sign out" }

				it { should have_signed_out_appearance }
			end
		end
	end
end