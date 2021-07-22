# Nuber Eats

The Backend of Nuber Eats Clones

> # User

## User Model

- id
- createdAt
- updatedAt
- email
- password
- role(client|owner|delivery)

## User CRUD

- Create Account
- Log In
- See Profile
- Edit Profile
- Verify Email

> # Restaurant

## Restaurant Model

- name
- category
- address
- coverImage

## Restaurant CRUD

- See Categories
- See Restaurants by Category (pagination)
- See Restaurants (pagination)
- See Restaurant
- Search Restaurant

* Edit Restaurant
* Delete Restaurant
* Create Dish
* Edit Dish
* Delete Dish

- Orders CRUD
- Orders Subscription:
  - Pending Orders (Owner) (T: createOrder)
  - Order Status (Customer, Delivery, Owner) (T: editOrder)
  - Pending Pickup Order (Delivery)

* Payments (CRON)
