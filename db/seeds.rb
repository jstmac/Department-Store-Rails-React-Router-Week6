5.times do
d = Department.create(
    name: Faker::Commerce.department,
    description: Faker::Lorem.sentence
  )
  5.times do 
    Item.create(
    name: Faker::Commerce.product_name,
    price: Faker::Commerce.price.to_i,
    department_id: d.id
  )
 end
end
 
 puts "25 Products Seeded"
 