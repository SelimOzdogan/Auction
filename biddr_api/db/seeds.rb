# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bid.destroy_all
Auction.destroy_all
User.destroy_all

PASSWORD = "1"

10.times do |u|
  user = User.create({
    email: Faker::Internet.email,
    password: PASSWORD,
  })
end

users = User.all

10.times do |a|
  auction = Auction.create({
    title: Faker::Commerce.product_name,
    description: Faker::Commerce.department,
    ends_at: Faker::Date.between(from: 10.days.ago, to: 10.days.from_now),
    reserve_price: rand(1..1000),
    user: users.sample,
  })

  if auction.valid?
    rand(0..10).times do |b|
      bid = Bid.create({
        bid: rand(1..1500),
        user: users.sample,
        auction: auction,
      })
    end
  end
end

puts "Created #{Bid.count} Bid"
puts "Created #{Auction.count} Auction"
