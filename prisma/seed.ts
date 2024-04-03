import {prisma} from '../src/lib/prisma'


async function seed() {
    await prisma.event.create({
        data: {
            id: '85e5626f-de38-45b6-bf53-6976045aa66b',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados por código',
            maximumAttendees: 120,          
        }
    })
}

seed().then(() => {
    console.log('Database seeded')
    prisma.$disconnect()
})