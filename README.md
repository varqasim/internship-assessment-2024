$$$$$$$\   $$$$$$\  $$\        $$$$$$\  
$$  __$$\ $$  __$$\ $$ |      $$  __$$\ 
$$ |  $$ |$$ /  $$ |$$ |      $$ /  $$ |
$$$$$$$  |$$$$$$$$ |$$ |      $$ |  $$ |
$$  ____/ $$  __$$ |$$ |      $$ |  $$ |
$$ |      $$ |  $$ |$$ |      $$ |  $$ |
$$ |      $$ |  $$ |$$$$$$$$\  $$$$$$  |
\__|      \__|  \__|\________| \______/ 
 --------------------------------------------

# Introduction

Welcome to Palo! Your favourite platform to book the best pools in the whole wide world! Customers can sign up on the platform
& reserve any pool that is available near them.

This project is built using
1. express framework (https://expressjs.com/) 
2. sequelize ORM (https://sequelize.org/) with in-memory sqlite database
3. zod schema validation (https://zod.dev/)

Happy coding!

# Task

- [ ] Check TODO in `src/user/signUp.ts`
- [ ] Check TODO in `src/pool/createPool.ts`
- [ ] Design a model for the pool & reservations that can be done by the users (customers) and have the ability to cancel them as well.
    - A pool can only have two reservations for the same day since it has two slots (morning & night)
    - Some pools don't operate on certain days (i.e Pool X don't allow any reservations on Friday)
    - Each slot (morning or night) has a different price
    - In some special occaisions (i.e Eid, Ramadan) the price for both or one slot is priced differently
- [ ] Implement logic for `src/reservation/reservePool.ts`
- [ ] Implement logic for `src/reservation/cancelReservation.ts`

# Tips 

## Running the server
Run the command `npm run dev` on a new terminal to run the server

## Testing your API
Since the server is not accessible through the internet, you need to run `curl` commands locally

### POST
```bash
curl -H 'Content-Type: application/json' \
  -d '{ "email":"qasim@calo.app", "name": "qasim"}' \
  -X POST \
  http://localhost:8080/user
```