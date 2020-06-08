# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bid.destroy_all
Auction.destroy_all

10.times do |a|
  auction = Auction.create({
    title: Faker::Commerce.product_name,
    description: Faker::Commerce.department,
    ends_at: Faker::Date.between(from: 10.days.ago, to: 10.days.from_now),
    reserve_price: rand(1..1000),
  })

  if auction.valid?
    rand(0..10).times do |b|
      bid = Bid.create({
        bid: rand(1..1000),
      })
    end
  end
end

puts "Created #{Bid.count} Bid"
puts "Created #{Auction.count} Auction"
