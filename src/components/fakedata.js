const hotels = [
  {
    image: "https://i.ibb.co/bzz6FHM/Rectangle-26.png",
    id: "1",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
  {
    image: "https://i.ibb.co/b1F4Y05/Rectangle-27.png",
    id: "2",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
  {
    image: "https://i.ibb.co/cyVL3st/Rectangle-28.png",
    id: "3",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },

  {
    image:
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "4",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
  {
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "5",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
  {
    image:
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "6",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
  {
    image:
      "https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "7",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
  {
    image:
      "https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "8",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
  {
    image:
      "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "9",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
  {
    image:
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "10",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
  {
    image:
      "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "11",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
  {
    image:
      "https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "12",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
  {
    image:
      "https://images.pexels.com/photos/3201765/pexels-photo-3201765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "13",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
  {
    image:
      "https://images.pexels.com/photos/3682240/pexels-photo-3682240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    id: "14",
    title: "Light bright airy stylish apt & safe peaceful stay",
    description: "4 guests 2 bedrooms 2 beds 2 baths",
    rating: " 4.9 (20)",
    price: "$34/night",
  },
];

const shuffle = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

shuffle(hotels);

export default hotels;
