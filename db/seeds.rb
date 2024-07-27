# SearchHistory.destroy_all
# puts "Destroying search histories"
# User.destroy_all
# puts "Destroying users"

User.create!(name: "John", email: "user@user.com", password: "password")
puts "Creating user"
SearchHistory.create!(pick_up_address: "123 Main St", drop_off_address: "456 Elm St", user_id: User.last.id)
puts "Creating search history"
