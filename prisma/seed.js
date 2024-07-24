const { faker } = require("@faker-js/faker");

const users = [];

for (let i = 0; i < 10; i++) {
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  users.push(user);
}
