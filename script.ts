import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // ...you will write your prisma client queries here
  // const user = await prisma.user.create({ data: { name: 'Oscar' } });
  const users = await prisma.user.findMany()
  console.log('the user', users);
}

main()
  .catch((err) => {
    console.error(err.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })