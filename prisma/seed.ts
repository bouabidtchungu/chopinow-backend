import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create admin user
  await prisma.user.upsert({
    where: { email: 'admin@chopinow.test' },
    update: {},
    create: {
      email: 'admin@chopinow.test',
      name: 'Admin',
      role: 'admin',
    },
  });

  // Create sample products
  const products = [
    {
      title: 'Sample Product 1',
      description: 'A demo product for Chopinow',
      priceCents: 1999,
      inventory: 10,
      media: ['https://res.cloudinary.com/demo/image/upload/sample.jpg'],
    },
    {
      title: 'Sample Product 2',
      description: 'Another demo product',
      priceCents: 2999,
      inventory: 5,
      media: ['https://res.cloudinary.com/demo/image/upload/sample2.jpg'],
    },
    // Add more sample products as desired
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log('Seeding done!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });