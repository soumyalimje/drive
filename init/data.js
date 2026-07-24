// Reusable Unsplash base URLs (real photos, resized/cropped via Unsplash's
// image params — no API key needed for these). Grouped by vehicle type,
// same way the old loremflickr tags were grouped.
const IMG = {
  evSedan: "https://images.unsplash.com/photo-1572191267337-c1705e46645c",
  offroad4x4: "https://images.unsplash.com/photo-1619226796274-9f0adda6d5aa",
  supercar: "https://images.unsplash.com/photo-1560361586-8242b1fc06c5",
  luxurySedan: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd",
  suv: "https://images.unsplash.com/photo-1560996667-33386f60e00b",
  scooter: "https://images.unsplash.com/photo-1519750292352-c9fc17322ed7",
  convertible: "https://images.unsplash.com/photo-1658250709337-46fb7cc5e74a",
  bikeTouring: "https://images.unsplash.com/photo-1558980664-3a031cf67ea8",
  bikeAdventureDirt:
    "https://images.unsplash.com/reserve/bIdO4DDS4qwVF6pHN4qr__MG_1605.jpg",
  bikeSuperbike: "https://images.unsplash.com/photo-1683455534320-75ce657f11c6",
  bikeCruiser: "https://images.unsplash.com/photo-1567651336571-633e3d0877d5",
  bikeNaked: "https://images.unsplash.com/photo-1560752486-6857e1c49231",
  bikeKtm: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f",
};

const IMG_PARAMS = "?auto=format&fit=crop&w=800&h=600&q=80";

const sampleListings = [
  {
    title: "Tesla Model 3 - Long Range",
    description:
      "Glide through the city in this all-electric Tesla Model 3. Autopilot, 350+ mile range, and zero emissions make it perfect for both daily commutes and weekend road trips.",
    image: { filename: "listingimage", url: IMG.evSedan + IMG_PARAMS },
    price: 95,
    location: "Los Angeles",
    country: "United States",
    categories: ["electric", "sedan", "automatic"],
  },
  {
    title: "BMW R1250GS Adventure",
    description:
      "Built for the open road and rough terrain alike. This adventure-touring motorcycle comes with panniers, heated grips, and a full tank ready for your next escape.",
    image: { filename: "listingimage", url: IMG.bikeTouring + IMG_PARAMS },
    price: 85,
    location: "Denver",
    country: "United States",
    categories: ["offroad"],
  },
  {
    title: "Jeep Wrangler Rubicon 4x4",
    description:
      "Take on any trail with this fully-equipped Wrangler Rubicon. Removable doors, off-road tires, and a rugged 4x4 drivetrain make it the ultimate adventure vehicle.",
    image: { filename: "listingimage", url: IMG.offroad4x4 + IMG_PARAMS },
    price: 130,
    location: "Moab",
    country: "United States",
    categories: ["offroad", "suv"],
  },
  {
    title: "Ferrari 488 Spider",
    description:
      "Turn every drive into an event. This convertible Ferrari 488 delivers 660 horsepower, a screaming V8, and head-turning Italian design.",
    image: { filename: "listingimage", url: IMG.supercar + IMG_PARAMS },
    price: 899,
    location: "Miami",
    country: "United States",
    categories: ["luxury", "convertible", "automatic"],
  },
  {
    title: "Royal Enfield Himalayan",
    description:
      "A rugged, no-fuss adventure bike built for mountain passes and gravel roads. Comfortable, reliable, and easy to handle for riders of all levels.",
    image: { filename: "listingimage", url: IMG.bikeAdventureDirt + IMG_PARAMS },
    price: 45,
    location: "Manali",
    country: "India",
    categories: ["offroad", "budget"],
  },
  {
    title: "Toyota Innova Crysta",
    description:
      "Spacious, comfortable, and reliable — the ideal family or group vehicle for long road trips across the country with plenty of luggage room.",
    image: { filename: "listingimage", url: IMG.suv + IMG_PARAMS },
    price: 75,
    location: "Jaipur",
    country: "India",
    categories: ["suv", "automatic"],
  },
  {
    title: "Ducati Panigale V4",
    description:
      "A track-bred superbike for the road. 210+ horsepower, aerodynamic winglets, and razor-sharp handling for the serious rider.",
    image: { filename: "listingimage", url: IMG.bikeSuperbike + IMG_PARAMS },
    price: 210,
    location: "Austin",
    country: "United States",
    categories: ["luxury", "automatic"],
  },
  {
    title: "Mercedes-Benz S-Class",
    description:
      "Executive comfort meets cutting-edge technology. Massaging seats, ambient lighting, and a whisper-quiet cabin for business travel done right.",
    image: { filename: "listingimage", url: IMG.luxurySedan + IMG_PARAMS },
    price: 260,
    location: "New York City",
    country: "United States",
    categories: ["luxury", "sedan", "automatic"],
  },
  {
    title: "Vespa Primavera 150",
    description:
      "Cruise the coastal streets in classic Italian style. Lightweight, fuel-efficient, and effortless to park anywhere in the city.",
    image: { filename: "listingimage", url: IMG.scooter + IMG_PARAMS },
    price: 35,
    location: "Rome",
    country: "Italy",
    categories: ["budget", "automatic"],
  },
  {
    title: "Land Rover Defender 110",
    description:
      "A go-anywhere SUV with serious off-road credentials and a surprisingly refined interior. Perfect for safaris, mountains, or city streets.",
    image: { filename: "listingimage", url: IMG.suv + IMG_PARAMS },
    price: 190,
    location: "Cape Town",
    country: "South Africa",
    categories: ["suv", "offroad", "luxury"],
  },
  {
    title: "Harley-Davidson Fat Boy",
    description:
      "Big attitude, low seat, thumping V-twin. Nothing says the open highway quite like a classic Harley-Davidson cruiser.",
    image: { filename: "listingimage", url: IMG.bikeCruiser + IMG_PARAMS },
    price: 120,
    location: "Route 66, Chicago",
    country: "United States",
    categories: ["automatic"],
  },
  {
    title: "Porsche 911 Carrera",
    description:
      "The benchmark sports car for six decades running. Precise steering, a howling flat-six engine, and timeless design.",
    image: { filename: "listingimage", url: IMG.supercar + IMG_PARAMS },
    price: 420,
    location: "San Francisco",
    country: "United States",
    categories: ["luxury", "automatic"],
  },
  {
    title: "Honda Activa 125",
    description:
      "The everyday scooter for getting around town — reliable, fuel-efficient, and easy to ride even in heavy traffic.",
    image: { filename: "listingimage", url: IMG.scooter + IMG_PARAMS },
    price: 18,
    location: "Indore",
    country: "India",
    categories: ["budget", "automatic"],
  },
  {
    title: "Range Rover Sport SVR",
    description:
      "Supercharged V8 power in a luxury SUV body. Commands the road with authority while still handling gravel and mud with ease.",
    image: { filename: "listingimage", url: IMG.suv + IMG_PARAMS },
    price: 280,
    location: "London",
    country: "United Kingdom",
    categories: ["luxury", "suv", "offroad"],
  },
  {
    title: "Kawasaki Ninja ZX-6R",
    description:
      "A sharp-handling middleweight sportbike with race-derived electronics. Aggressive styling with a top-end that doesn't disappoint.",
    image: { filename: "listingimage", url: IMG.bikeSuperbike + IMG_PARAMS },
    price: 110,
    location: "Los Angeles",
    country: "United States",
    categories: ["automatic"],
  },
  {
    title: "Mahindra Thar",
    description:
      "A compact, go-anywhere 4x4 with open-top styling. Popular for beach drives and off-road weekend getaways.",
    image: { filename: "listingimage", url: IMG.offroad4x4 + IMG_PARAMS },
    price: 70,
    location: "Goa",
    country: "India",
    categories: ["offroad", "suv"],
  },
  {
    title: "Audi R8 V10",
    description:
      "A daily-drivable supercar with a naturally aspirated V10 soundtrack. Sharp looks, sharper performance, all-wheel drive grip.",
    image: { filename: "listingimage", url: IMG.supercar + IMG_PARAMS },
    price: 650,
    location: "Las Vegas",
    country: "United States",
    categories: ["luxury", "automatic"],
  },
  {
    title: "Triumph Street Triple RS",
    description:
      "A punchy naked bike with a triple-cylinder growl. Light, agile, and packed with modern rider aids.",
    image: { filename: "listingimage", url: IMG.bikeNaked + IMG_PARAMS },
    price: 95,
    location: "Berlin",
    country: "Germany",
    categories: ["automatic"],
  },
  {
    title: "Toyota Fortuner",
    description:
      "A powerful and spacious SUV with three rows of seating. Built to handle both city driving and long highway hauls.",
    image: { filename: "listingimage", url: IMG.suv + IMG_PARAMS },
    price: 100,
    location: "Mumbai",
    country: "India",
    categories: ["suv", "automatic"],
  },
  {
    title: "Chevrolet Camaro SS Convertible",
    description:
      "American muscle with the top down. A booming V8 and aggressive styling make this the perfect coastal cruiser.",
    image: { filename: "listingimage", url: IMG.convertible + IMG_PARAMS },
    price: 230,
    location: "Miami",
    country: "United States",
    categories: ["convertible", "luxury", "automatic"],
  },
  {
    title: "Yamaha MT-15",
    description:
      "A compact naked streetfighter built for city agility. Sporty ergonomics with a peppy engine for weaving through traffic.",
    image: { filename: "listingimage", url: IMG.bikeNaked + IMG_PARAMS },
    price: 30,
    location: "Bengaluru",
    country: "India",
    categories: ["budget"],
  },
  {
    title: "Volkswagen Golf GTI",
    description:
      "The hot hatch that started it all. Balanced handling, a punchy turbo engine, and everyday practicality.",
    image: { filename: "listingimage", url: IMG.luxurySedan + IMG_PARAMS },
    price: 90,
    location: "Munich",
    country: "Germany",
    categories: ["hatchback", "automatic"],
  },
  {
    title: "Lamborghini Huracán EVO",
    description:
      "A screaming V10 supercar with sharp Italian lines. All-wheel drive traction meets show-stopping presence.",
    image: { filename: "listingimage", url: IMG.supercar + IMG_PARAMS },
    price: 950,
    location: "Dubai",
    country: "United Arab Emirates",
    categories: ["luxury", "automatic"],
  },
  {
    title: "Suzuki Access 125",
    description:
      "A dependable and lightweight scooter, ideal for short errands and easy city commuting.",
    image: { filename: "listingimage", url: IMG.scooter + IMG_PARAMS },
    price: 15,
    location: "Pune",
    country: "India",
    categories: ["budget", "automatic"],
  },
  {
    title: "Ford Mustang GT",
    description:
      "The quintessential American pony car. Loud exhaust note, rear-wheel drive fun, and unmistakable retro-modern styling.",
    image: { filename: "listingimage", url: IMG.convertible + IMG_PARAMS },
    price: 175,
    location: "Los Angeles",
    country: "United States",
    categories: ["convertible", "automatic"],
  },
  {
    title: "BMW 5 Series",
    description:
      "A refined executive sedan that balances performance and comfort — ideal for both business trips and weekend drives.",
    image: { filename: "listingimage", url: IMG.luxurySedan + IMG_PARAMS },
    price: 150,
    location: "Frankfurt",
    country: "Germany",
    categories: ["sedan", "luxury", "automatic"],
  },
  {
    title: "KTM 390 Duke",
    description:
      "A sharp, lightweight streetfighter with a punchy single-cylinder engine. Built for riders who like to carve corners.",
    image: { filename: "listingimage", url: IMG.bikeKtm + IMG_PARAMS },
    price: 40,
    location: "Delhi",
    country: "India",
    categories: ["budget"],
  },
  {
    title: "Nissan GT-R",
    description:
      "Nicknamed 'Godzilla' for good reason. All-wheel drive launch control and twin-turbo power for supercar-slaying performance.",
    image: { filename: "listingimage", url: IMG.supercar + IMG_PARAMS },
    price: 380,
    location: "Tokyo",
    country: "Japan",
    categories: ["luxury", "automatic"],
  },
];

module.exports = { data: sampleListings };