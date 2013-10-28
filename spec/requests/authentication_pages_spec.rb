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

			describe "when signing in again" do
				before do 
					click_link "Sign out"
					sign_in user
				end

				it "Should render default profile page" do
					expect(page).to have_title(user.name)
				end
			end
		end

	end

	describe "signout appearance" do
		let(:user) { FactoryGirl.create (:user) }
		before do 
			sign_in user
			click_link "Sign out"
		end

		it { should have_signed_out_appearance }
		it { should_not have_signed_user_page_info(user) }	
		it { should_not have_signed_in_appearance }
	end

	describe "authorization" do

		describe "for non-signed-in users" do
			let(:user) { FactoryGirl.create(:user) }

			describe "when attemptig to visit a protected page" do
				before do
					visit edit_user_path(user)
					valid_signin(user) 
				end

				describe "after signing in" do

					it "should render the desired protected page" do
						expect(page). to have_title('Edit user')
					end
				end
			end

			describe "in the Users controller " do

				describe "visitig the editing page" do
					before { visit edit_user_path(user) }
					it { should have_title('Sign in') }
				end
				
				describe "submitting to the update action" do
					before { patch user_path(user) }
					specify { expect(response).to redirect_to(signin_path) }
				end

				describe "visiting the user index" do
					before { visit users_path }
					it { should have_title('Sign in') }
				end
			end
		end

		describe "as wrong user" do
			let(:user) { FactoryGirl.create(:user) }
			let(:wrong_user) {  FactoryGirl.create(:user, email: "wrong@example.com") }
			before { sign_in user, no_capybara: true }

			describe "submitting a GET request to the Users#edit action" do
				before { get edit_user_path(wrong_user) }
				specify { expect(response.body).not_to match(full_title('Edit user')) }
				specify { expect(response).to redirect_to(root_url) }
			end

			describe "submitting a PATCH request to the Users#update action" do
				before { patch user_path(wrong_user) }
				specify { expect(response).to redirect_to(root_url) }
			end
		end

		describe "as non-admin user" do
			let(:user) { FactoryGirl.create(:user) }
			let(:non_admin) { FactoryGirl.create(:user) }

			before { sign_in non_admin, no_capybara: true }

			describe "submitting a DELETE request to the Users#destroy action" do
				before { delete user_path(user) }
				specify { expect(response).to redirect_to(root_url) }
			end
		end

		describe "as signed in users" do
			let(:user) { FactoryGirl.create(:user) }
			before { sign_in user }
			
			describe "visiting the signup page" do
				before { visit signup_path }

				it { should have_content("Welcome") }
			end

			# describe "visiting the signin page" do
			# 	before { visit signin_path }

			# 	it { should have_content("Welcome") }
			# end
		end
	end
end