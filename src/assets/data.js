import { Terminal } from "lucide-react";

const data = [
  {
    "name": "Luxury Beachfront Villa",
    "photo": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    "details": "A stunning villa located on the beachfront with panoramic ocean views, private pool, and modern interiors.",
    "price": 45000000,
    "bedrooms": 5,
    "bathrooms": 4,
    "type": "Villa",
    "location": "Goa, India"
  },
  {
    "name": "Modern City Apartment",
    "photo": "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    "details": "Spacious 3BHK apartment in the heart of the city, close to metro, shopping malls, and schools.",
    "price": 12000000,
    "bedrooms": 3,
    "bathrooms": 2,
    "type": "Apartment",
    "location": "Bangalore, India"
  },
  {
    "name": "Cozy Countryside House",
    "photo": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    "details": "A peaceful countryside home surrounded by greenery, with a large backyard and private parking.",
    "price": 8500000,
    "bedrooms": 4,
    "bathrooms": 3,
    "type": "House",
    "location": "Shimla, India"
  },
  {
    "name": "Ultra-Modern Penthouse",
    "photo": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    "details": "A luxurious penthouse with rooftop terrace, smart home features, and breathtaking skyline views.",
    "price": 25000000,
    "bedrooms": 4,
    "bathrooms": 4,
    "type": "Penthouse",
    "location": "Mumbai, India"
  },
  {
    "name": "Elegant Duplex",
    "photo": "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "Stylish duplex house with spacious rooms, open kitchen, and premium interiors.",
    "price": 15000000,
    "bedrooms": 4,
    "bathrooms": 3,
    "type": "Duplex",
    "location": "Hyderabad, India"
  },
  {
    "name": "Affordable Studio Apartment",
    "photo": "https://images.unsplash.com/photo-1688653802629-5360086bf632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "Compact and modern studio apartment perfect for bachelors or working professionals.",
    "price": 3500000,
    "bedrooms": 1,
    "bathrooms": 1,
    "type": "Studio",
    "location": "Delhi, India"
  },
  {
    "name": "Heritage Bungalow",
    "photo": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "A vintage bungalow with colonial architecture, surrounded by gardens and trees.",
    "price": 22000000,
    "bedrooms": 5,
    "bathrooms": 4,
    "type": "Bungalow",
    "location": "Pune, India"
  },
  {
    "name": "Smart Villa with Pool",
    "photo": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "A fully automated smart villa with private pool, home theater, and modern design.",
    "price": 38000000,
    "bedrooms": 6,
    "bathrooms": 5,
    "type": "Villa",
    "location": "Chennai, India"
  },
  {
    "name": "Urban Loft",
    "photo": "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "Trendy loft apartment with open floor plan, high ceilings, and industrial interiors.",
    "price": 10000000,
    "bedrooms": 2,
    "bathrooms": 2,
    "type": "Loft",
    "location": "Bangalore, India"
  },
  {
    "name": "Hilltop Villa",
    "photo": "https://images.unsplash.com/photo-1616012760010-8da02da071fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "A villa with breathtaking hill views, private terrace, and luxury amenities.",
    "price": 27000000,
    "bedrooms": 4,
    "bathrooms": 4,
    "type": "Villa",
    "location": "Manali, India"
  },
  {
    "name": "Family-Friendly Apartment",
    "photo": "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "Spacious apartment with kids’ play area, gym, and clubhouse facilities.",
    "price": 9000000,
    "bedrooms": 3,
    "bathrooms": 2,
    "type": "Apartment",
    "location": "Kolkata, India"
  },
  {
    "name": "Riverside Villa",
    "photo": "https://images.unsplash.com/photo-1721989518229-3e84837fc398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "Elegant villa next to a river with large balconies and scenic views.",
    "price": 32000000,
    "bedrooms": 5,
    "bathrooms": 4,
    "type": "Villa",
    "location": "Kerala, India"
  },
  {
    "name": "Downtown Studio",
    "photo": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "Compact studio apartment located in the heart of the city.",
    "price": 4000000,
    "bedrooms": 1,
    "bathrooms": 1,
    "type": "Studio",
    "location": "Delhi, India"
  },
  {
    "name": "Suburban House",
    "photo": "https://source.unsplash.com/800x600/?house,https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "A quiet suburban home perfect for families with a garden and garage.",
    "price": 7500000,
    "bedrooms": 3,
    "bathrooms": 2,
    "type": "House",
    "location": "Lucknow, India"
  },
  {
    "name": "Premium Penthouse",
    "photo": "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "High-end penthouse with rooftop bar and jacuzzi.",
    "price": 30000000,
    "bedrooms": 5,
    "bathrooms": 5,
    "type": "Penthouse",
    "location": "Mumbai, India"
  },
  {
    "name": "Farmhouse Retreat",
    "photo": "https://images.unsplash.com/photo-1596178067639-5c6e68aea6dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "Beautiful farmhouse with acres of farmland, ideal for peaceful living.",
    "price": 16000000,
    "bedrooms": 4,
    "bathrooms": 3,
    "type": "Farmhouse",
    "location": "Punjab, India"
  },
  {
    "name": "Seaside Cottage",
    "photo": "https://source.unsplash.com/800x600/?cottage,sehttps://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "Cozy seaside cottage with a stunning view of the ocean.",
    "price": 12000000,
    "bedrooms": 3,
    "bathrooms": 2,
    "type": "Cottage",
    "location": "Goa, India"
  },
  {
    "name": "City Duplex",
    "photo": "https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "Modern duplex in the city center with premium finishes.",
    "price": 18000000,
    "bedrooms": 4,
    "bathrooms": 3,
    "type": "Duplex",
    "location": "Delhi, India"
  },
  {
    "name": "Luxury Mansion",
    "photo": "https://images.unsplash.com/photo-1479642758906-86ea61b235af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHZpbGxhfGVufDB8fDB8fHww",
    "details": "A massive luxury mansion with private cinema, spa, and gym.",
    "price": 80000000,
    "bedrooms": 10,
    "bathrooms": 8,
    "type": "Mansion",
    "location": "Hyderabad, India"
  }
]

export default data;

const testimonal = [
  {
    "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
    "name": "John Doe",
    "place": "New York, USA",
    "text": "This platform made my property search effortless! The interface is clean, and I found my dream home in just a few clicks.",
    "compliment": "⭐ Highly Recommended!"
  },
  {
    "avatar": "https://randomuser.me/api/portraits/women/44.jpg",
    "name": "Emily Johnson",
    "place": "London, UK",
    "text": "Amazing experience! I was able to explore a wide variety of properties without hassle. The support team was also very helpful.",
    "compliment": "🌟 Truly Impressive!"
  },
  {
    "avatar": "https://randomuser.me/api/portraits/men/65.jpg",
    "name": "Michael Smith",
    "place": "Toronto, Canada",
    "text": "Smooth and professional service. Everything was transparent and quick. I’ll definitely recommend this platform to my friends.",
    "compliment": "✅ Excellent Service!"
  },
  {
    "avatar": "https://randomuser.me/api/portraits/women/68.jpg",
    "name": "Sophia Williams",
    "place": "Sydney, Australia",
    "text": "I loved how easy it was to navigate through listings. Found exactly what I was looking for in no time.",
    "compliment": "💯 Great Experience!"
  },
  {
    "avatar": "https://randomuser.me/api/portraits/men/77.jpg",
    "name": "David Brown",
    "place": "Berlin, Germany",
    "text": "The service exceeded my expectations. The process was smooth and stress-free. Excellent job!",
    "compliment": "👏 Fantastic Work!"
  },
  {
    "avatar": "https://randomuser.me/api/portraits/women/21.jpg",
    "name": "Olivia Miller",
    "place": "Paris, France",
    "text": "From start to finish, the journey was seamless. Very professional and responsive team.",
    "compliment": "🌟 Highly Professional!"
  },
  {
    "avatar": "https://randomuser.me/api/portraits/men/90.jpg",
    "name": "James Wilson",
    "place": "Dubai, UAE",
    "text": "The listings were detailed and trustworthy. I found my dream property within a week!",
    "compliment": "✅ Trustworthy Platform!"
  },
  {
    "avatar": "https://randomuser.me/api/portraits/women/34.jpg",
    "name": "Isabella Martinez",
    "place": "Madrid, Spain",
    "text": "Absolutely love the design and functionality. Easy to use and reliable.",
    "compliment": "🔥 Top Notch!"
  },
  {
    "avatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "name": "William Anderson",
    "place": "Los Angeles, USA",
    "text": "Best experience ever! Found my property faster than I imagined. Highly satisfied.",
    "compliment": "⭐ Perfect Service!"
  },
  {
    "avatar": "https://randomuser.me/api/portraits/women/52.jpg",
    "name": "Ava Taylor",
    "place": "Rome, Italy",
    "text": "Everything was smooth and well organized. I appreciate the attention to detail.",
    "compliment": "🌟 Truly Outstanding!"
  }
]

export { testimonal };

const faqs = [
  {
    question: "How do I list my property on Estatein?",
    answer:
      "Simply sign up, navigate to your dashboard, and click on 'Add Property'. Fill in the details, upload photos, and submit for approval. Our team will review your submission and publish it once approved."
  },
  {
    question: "Are there any fees for property listings?",
    answer:
      "Basic property listings are free. However, premium features like highlighted listings or priority search placement may involve additional fees. These premium options help sellers gain more visibility."
  },
  {
    question: "Is my data secure on Estatein?",
    answer:
      "Yes! We use industry-standard encryption and secure servers to keep all user and property data safe. We also regularly update our security systems to protect against emerging threats."
  }
];

export {faqs}