import Img1 from "../../assets/images/organicCometics.jpg"
import Img2 from "../../assets/images/organicFertilizer.jpg"
import Img3 from "../../assets/images/SustainableAgricultureSolutions.jpg"

// Services data
const services = [
  {
    title: "Transforming Surplus Vegetables into High-Quality Beauty Products",
    description:
      "Green Synergy Limited produces organic cosmetics from surplus vegetables, rich in nutrients and antioxidants, supporting sustainability and eco-friendly practices.",
    products: ["Shower Gels", "Scrubs"],
    image: Img1, // Use imported image directly
    alt: "Organic Cosmetics",
  },
  {
    title: "Utilizing By-Products to Promote Sustainable Farming",
    description:
      "At Green Synergy Limited, we produce eco-friendly fertilizers from by-products of our manufacturing process. These fertilizers improve soil health and support sustainable farming practices.",
    products: [
      "Calcium-Rich Fertilizers",
      "Organic Compost",
      "Soil Conditioners",
    ],
    image: Img2, // Use imported image directly
    alt: "Eco-Friendly Fertilizers",
  },
  {
    title: "Education and Community Engagement",
    description:
      "Green Synergy Limited is dedicated to educating farmers and rural communities on sustainable farming practices. Our approach includes workshops and environmental sustainability education.",
    products: [
      "Workshops on Sustainable Farming",
      "Environmental Sustainability Education",
      "Waste Management Solutions",
    ],
    image: Img3, // Use imported image directly
    alt: "Sustainable Agriculture Solutions",
  },
];

export default services;
