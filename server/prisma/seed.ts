import { PrismaClient, User } from "@prisma/client";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

const db = new PrismaClient();

async function main() {
  await db.post.deleteMany();
  await db.relationship.deleteMany();
  await db.user.deleteMany();
  const users = await createUsers();
  await Promise.all([createPosts(users), createRelashionships(users)]);
}

async function createUsers() {
  return await Promise.all(
    Array.from({ length: 50 }).map(async () => {
      const email = faker.internet.email();
      return await db.user.upsert({
        where: { email },
        update: {},
        create: {
          email,
          passwordHash: await bcrypt.hash("password", 10),
          name: faker.internet.userName(),
          avatarUrl: faker.image.avatar(),
        },
      });
    })
  );
}

async function createPosts(users: User[]) {
  await Promise.all(
    users.map(async (user) => {
      const total = Math.floor(Math.random() * 50);
      return await Promise.all(
        Array.from({ length: total }).map(async () => {
          await db.post.create({
            data: { content: faker.hacker.phrase(), userId: user.id },
          });
        })
      );
    })
  );
}

async function createRelashionships(users: User[]) {
  const user = users[0];
  const followers = users.slice(3, 40).map(
    async (follower) =>
      await db.relationship.create({
        data: { followerId: follower.id, followedId: user.id },
      })
  );
  const following = users.slice(2, 50).map(
    async (followed) =>
      await db.relationship.create({
        data: { followedId: followed.id, followerId: user.id },
      })
  );
  await Promise.all([...followers, ...following]);
}

main()
  .then(async () => {
    await db.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
