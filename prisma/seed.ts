import {prisma} from '../src/lib/prisma'


async function seed() {
    await prisma.event.create({
        data: {
            id: '5283c8e9-43ef-4a90-935c-30a90a264e99',
            title: 'Escola de combustão',
            slug: 'combustão',
            details: 'Um evento para devs apaixonados por combustão',
            maximumAttendees: 100,          
        }
    })
}

seed().then(() => {
    console.log('Database seeded')
    prisma.$disconnect()
})