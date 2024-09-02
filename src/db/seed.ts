import { faker } from "@faker-js/faker";
import { users } from "./schema";
import { db } from ".";

async function main() {
  const count = 25;
  const data: (typeof users.$inferInsert)[] = [];

  for (let i = 0; i < count; i++) {
    const bday = faker.date.birthdate({ min: 18, max: 65 });

    data.push({
      id: faker.database.mongodbObjectId(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      birthday: bday,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  await db.insert(users).values(data);

  console.log("Database has been seeded.");
}

main();
