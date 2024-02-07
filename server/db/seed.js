const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cabins = [
    {
       cabinName: "Cabin 1",
       occupancy: "3",
       amenities: "1 Double Bed, 1 Single Bed",
       price: "$140",
       cabinType: "Rustic",
       isAvail: true,
       pets: "yes",
    },
    {
        cabinName: "Cabin 2",
        occupancy: "5",
        amenities: "2 Double Beds, 1 Single Bed",
        price: "$150",
        cabinType: "Rustic",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Cabin 3",
        occupancy: "5",
        amenities: "2 Double Beds, 1 Single Bed",
        price: "$150",
        cabinType: "Rustic",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Cabin 4",
        occupancy: "6",
        amenities: "1 Double Bed, 4 Bunk Beds",
        price: "$160",
        cabinType: "Rustic",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Cabin 5",
        occupancy: "4",
        amenities: "2 Double Beds",
        price: "$145",
        cabinType: "Rustic",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Cabin 6",
        occupancy: "6",
        amenities: "2 Double Beds, 2 Bunk Beds",
        price: "$160",
        cabinType: "Rustic",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Cabin 7",
        occupancy: "3",
        amenities: "1 Double Bed, 1 Single Bed",
        price: "$140",
        cabinType: "Rustic",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Cabin 8",
        occupancy: "3",
        amenities: "1 Double Bed, 1 Single Bed",
        price: "$140",
        cabinType: "Rustic",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Matterhorn",
        occupancy: "6",
        amenities: "2 Queen Beds, Fold Out Sofa, Full Bathroom",
        price: "200",
        cabinType: "Modern",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Glacier",
        occupancy: "6",
        amenities: "2 Queen Beds, Fold Out Sofa, Full Bathroom",
        price: "200",
        cabinType: "Modern",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Silverado",
        occupancy: "6",
        amenities: "2 Queen Beds, Fold Out Sofa, Full Bathroom",
        price: "200",
        cabinType: "Modern",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Summit",
        occupancy: "6",
        amenities: "2 Queen Beds, Fold Out Sofa, Full Bathroom",
        price: "200",
        cabinType: "Modern",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Alpha Day",
        occupancy: "6",
        amenities: "1 Queen Beds, 2 Twin Beds, Fold Out Sofa, Full Bathroom",
        price: "200",
        cabinType: "Modern",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Eagle's Landing",
        occupancy: "6",
        amenities: "1 Queen Beds, 2 Twin Beds, Fold Out Sofa, Full Bathroom",
        price: "200",
        cabinType: "Modern",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Shoreline Lakeview",
        occupancy: "6",
        amenities: "1 Queen Beds, 2 Twin Beds, Fold Out Sofa, Full Bathroom",
        price: "200",
        cabinType: "Modern",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Lakeshore 2",
        occupancy: "2",
        amenities: "1 Double, Fold Out Sofa, Kitchen, Full Bathroom",
        price: "200",
        cabinType: "Lakeshore",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Lakeshore 3",
        occupancy: "4",
        amenities: "1 Queen, 3 Singles, Kitchen, Full Bathroom",
        price: "230",
        cabinType: "Lakeshore",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Lakeshore 4",
        occupancy: "4",
        amenities: "1 Queen, 2 Doubles, 1 Single, Kitchen, Full Bathroom",
        price: "275",
        cabinType: "Lakeshore",
        isAvail: true,
        pets: "yes",
     },
     {
        cabinName: "Glenbrook",
        occupancy: "4",
        amenities: "1 Double, 2 Twin Beds",
        price: "185",
        cabinType: "Mobile Home",
        isAvail: true,
        pets: "yes",
     },
]

const boats = [
    {
        boatType: "14ft",
        maxGuests: "4",
        halfDay: "40",
        fullDay: "55",
        isAvail: true,
    },
    {
        boatType: "14ft",
        maxGuests: "4",
        halfDay: "40",
        fullDay: "55",
        isAvail: true,
    },{
        boatType: "14ft",
        maxGuests: "4",
        halfDay: "40",
        fullDay: "55",
        isAvail: true,
    },{
        boatType: "14ft",
        maxGuests: "4",
        halfDay: "40",
        fullDay: "55",
        isAvail: true,
    },{
        boatType: "14ft",
        maxGuests: "4",
        halfDay: "40",
        fullDay: "55",
        isAvail: true,
    },{
        boatType: "14ft",
        maxGuests: "4",
        halfDay: "40",
        fullDay: "55",
        isAvail: false,
    },{
        boatType: "14ft",
        maxGuests: "4",
        halfDay: "40",
        fullDay: "55",
        isAvail: false,
    },{
        boatType: "14ft",
        maxGuests: "4",
        halfDay: "40",
        fullDay: "55",
        isAvail: true,
    },{
        boatType: "14ft",
        maxGuests: "4",
        halfDay: "40",
        fullDay: "55",
        isAvail: true,
    },
    {
        boatType: "15ft",
        maxGuests: "6",
        halfDay: "45",
        fullDay: "60",
        isAvail: false,
    },
    {
        boatType: "15ft",
        maxGuests: "6",
        halfDay: "45",
        fullDay: "60",
        isAvail: false,
    }, {
        boatType: "15ft",
        maxGuests: "6",
        halfDay: "45",
        fullDay: "60",
        isAvail: true,
    }, {
        boatType: "15ft",
        maxGuests: "6",
        halfDay: "45",
        fullDay: "60",
        isAvail: true,
    }, {
        boatType: "15ft",
        maxGuests: "6",
        halfDay: "45",
        fullDay: "60",
        isAvail: true,
    }, {
        boatType: "15ft",
        maxGuests: "6",
        halfDay: "45",
        fullDay: "60",
        isAvail: true,
    }, {
        boatType: "15ft",
        maxGuests: "6",
        halfDay: "45",
        fullDay: "60",
        isAvail: true,
    }, {
        boatType: "15ft",
        maxGuests: "6",
        halfDay: "45",
        fullDay: "60",
        isAvail: true,
    }, {
        boatType: "15ft",
        maxGuests: "6",
        halfDay: "45",
        fullDay: "60",
        isAvail: true,
    },
    {
        boatType: "Pontoon",
        maxGuests: "8",
        halfDay: "125",
        fullDay: "175",
        isAvail: true,
    },
    {
        boatType: "Pontoon",
        maxGuests: "8",
        halfDay: "125",
        fullDay: "175",
        isAvail: true,
    },{
        boatType: "Pontoon",
        maxGuests: "8",
        halfDay: "125",
        fullDay: "175",
        isAvail: false,
    },{
        boatType: "Pontoon",
        maxGuests: "8",
        halfDay: "125",
        fullDay: "175",
        isAvail: false,
    },{
        boatType: "Pontoon",
        maxGuests: "8",
        halfDay: "125",
        fullDay: "175",
        isAvail: true,
    },{
        boatType: "Pontoon",
        maxGuests: "8",
        halfDay: "125",
        fullDay: "175",
        isAvail: true,
    },{
        boatType: "Pontoon",
        maxGuests: "8",
        halfDay: "125",
        fullDay: "175",
        isAvail: true,
    },{
        boatType: "Pontoon",
        maxGuests: "8",
        halfDay: "125",
        fullDay: "175",
        isAvail: false,
    },
]
  

async function main() {
    console.log("Start seeding...");
  
    await Promise.all(
      cabins.map(async (cabin) => {
        return prisma.cabin.create({
          data: cabin,
        });
      })
    );
  
    await Promise.all(
      boats.map(async (boat) => {
        return prisma.boat.create({
          data: boat,
        });
      })
    );
  
    console.log("Seeding finished.");
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });