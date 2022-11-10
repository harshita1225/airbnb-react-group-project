import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";

const data = [
  {
    name: "44 Sardine Slow Life Houseboat - Carsibor Island",
    rating: 4.25,
    num_reviews: 147,
    city: "Świnoujście, Województwo zachodniopomorski",
    country: "Poland",
    price: 106,
    superhost: "true",
    host: "Sebastian",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/4532d3d4-dd10-472c-bc9b-fda35645f074.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/f080ece9-3d5d-4686-b1f3-fbd66ae8f181.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/42943aae-a61d-44cf-ac74-032872b406ec.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e57df990-3268-4c4e-8fbf-b430675d6696.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/a9add02a-76e5-4ec3-b25f-c6bfc00ca512.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31259411/original/6d65b71b-31e2-4751-8f68-feaddda1481a.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/45292c18-7615-40e9-9da3-e2a499d0045b.jpg?im_w=1200",
    ],
    latlong: ["53.86329846276284", "14.286039249140556"],
    description:
      "The island is incredibly picturesque. The green area is surrounded by old-growth pine trees, old pine trees, oak trees, donkeys, donkeys, donkeys, and blue. They have long and lovely hiking trails through the forests and woods. Karsibor is an important hub of water sports and fishing. It is a unique cycling experience. The village houses a 15th-century church.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },
  {
    name: "Private room in serviced apartment hosted by Sylvia",
    rating: 4.7,
    reviews: 102,
    city: "Schladming, Steiermark",
    country: "Austria",
    price: 316,
    superhost: "true",
    host: "Sylvia",
    guests: 4,
    bedrooms: 2,
    beds: 4,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/3ed0cf4d-6016-4485-be4d-6f1a8ab758ff.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/17f6e5ac-007d-4664-8dcc-f9a254bcb73f.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/0b6775a6-a0bc-4d8f-9602-ace39701114e.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/e6a2f788-2967-4cb8-8f71-195425ab3194.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/cf30fcd4-c31b-4de3-b86f-f16caa264c7b.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/e0deaffb-b2fe-4f08-a1f6-87b536f2a9fe.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/0db2b954-598f-4a2e-ad78-1161baf44bee.jpeg?im_w=1200",
    ],
    latlong: ["47.372987385108416", "13.724369913599194"],
    description:
      "In the 62m² apartment with sauna, you can live wonderfully with four people. Including terrace & balcony with roof stone view. You can order your breakfast with regional delicacies as you please. The kitchen is fully equipped with an oven, dishwasher, etc. Upon arrival, you will find coffee, tea, salt, pepper & sugar. We will tell you about our recommendations for food.Located directly on the ski slope. Shoe room, ski cellar, bike room and sockets for e-bike & e-car available.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },
  {
    name: "Entire rental unit hosted by Julia",
    rating: 4.12,
    num_reviews: 144,
    city: "Geisenheim, Hessen",
    country: "Germany",
    price: 76,
    superhost: "false",
    host: "Julia",
    guests: 5,
    bedrooms: 2,
    beds: 3,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-597806156879860866/original/523e2c37-ef4b-44af-85ea-24398be19b2b.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-597806156879860866/original/e630f0a7-68cb-4387-a1c5-5950cb28d9c0.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-597806156879860866/original/a053138b-8366-4187-ab26-7a05e6344c4c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-597806156879860866/original/25ebc33d-a063-4f1b-b553-af53e0e80edd.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/a4e0bb21-d01d-4457-815d-1398123ca9eb.jpg?im_w=720",
    ],
    latlong: ["49.970337179185584", "7.945917259737131"],
    description:
      "Go on holiday where the late harvest was discovered - in Johannisberg, a stone's throw from the Johannisberg Abbey. The 70 sqm light-flooded jewel on the 2nd floor is centrally located and invites you to hikes and wine tastings.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },
  {
    name: "Entire home hosted by Jon",
    rating: 4.92,
    num_reviews: 104,
    city: "Kullavik, Hallands län",
    country: "Sweden",
    price: 125,
    superhost: "true",
    host: "Jon",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/ccb54791-b4cd-4a04-a489-892d5be13cff.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-24173392/original/b570ed5b-0560-4f9c-8ec8-9950c328c48a.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/71e30706-90a4-4fdf-bac2-5c540f81dd12.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/8f58649a-efc6-4ab0-a055-e08788ea6a16.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/5fe862df-a7b4-4bc6-8999-cb4d14fdecae.jpg?im_w=720",
    ],
    latlong: ["49.970337179185584", "7.945917259737131"],
    description:
      "Newly built 42 square meters two-story souterrain house surrounded by Swedish west coast nature and the beautiful sea! With a private road, parking space, and dedicated EV charging station, the house is located alone at the edge of the property. Surrounded by the typical Swedish west coast nature, overlooking both the western sea horizon and the beautiful archipelago.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },

  {
    name: "Entire home hosted by Marieke",
    rating: 4.26,
    num_reviews: 17,
    city: "Sint-Oedenrode, Noord-Brabant",
    country: "Netherlands",
    price: 355,
    superhost: "false",
    host: "Marieke",
    guests: 8,
    bedrooms: 4,
    beds: 6,
    bath: 2,
    images: [
      "https://a0.muscache.com/im/pictures/c9b67a1c-518c-43e4-b7d9-9438d42dcca3.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/5094cb9f-b7ce-45ca-abcc-aea927afe104.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e1fbf76a-5477-4330-a282-de0a4a11fb95.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/f69bdd3d-7cf5-4967-8c18-9399174214a4.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e9941284-2a71-48a8-a0c6-9c67d1c5f331.jpg?im_w=720",
    ],
    latlong: ["51.55830158266192", "5.419437777305826"],
    description:
      "Luxuriously furnished vacation home with all the comforts, made in a historic jacket.4 bedrooms, 2 bathrooms and a lovely private terrace directly adjacent to the horse meadows.De Oude Stal and De Woelige Stal are two separate vacation homes for each 4 people that can be linked by means of a large sliding wall to one large house: De Oude Woelige Stal for 8 people.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },

  {
    name: "Entire rental unit hosted by Sara",
    rating: 4.66,
    num_reviews: 67,
    city: "Vielsalm, Wallonie",
    country: "Belgium",
    price: 95,
    superhost: "false",
    host: "Sara",
    guests: 2,
    bedrooms: 1,
    beds: 2,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/e94d6428-8206-4dc6-b4a2-d299c2e22618.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/3228f1eb-ab6d-409c-8c83-33202fd7183a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-50006894/original/94fd3065-98a1-4c69-8eaf-64e512ee7cae.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/310951e5-360c-43be-b691-132f4809985d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/8bc9bb30-a7e8-429a-8471-9b5250ee5d1e.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-50006894/original/46b76b6c-3f40-49e3-9508-e10942b25045.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-50006894/original/4b5f7f1d-564d-4094-8329-b22117ee4a97.jpeg?im_w=1200",
    ],
    latlong: ["50.26886695552791", "5.9059808029102445"],
    description:
      "The strengths of VLS Studio are above all its location, its facilities, its comfort and its atypical decoration.The apartment is located close to the city center, the train station and the lake of Vielsalm - Les Doyards Linen, necessary for cooking : all you have to do is put your bags down !Ideal for a romantic weekend, a few days of vacation or a business trip.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },

  {
    name: "Entire rental unit hosted by Justin",
    rating: 4.82,
    num_reviews: 77,
    city: "London, England",
    country: "United Kingdom",
    price: 260,
    superhost: "false",
    host: "Justin",
    guests: 6,
    bedrooms: 3,
    beds: 2,
    bath: 2,
    images: [
      "https://a0.muscache.com/im/pictures/8a695865-4b99-4d4c-908d-02030091bdae.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/d84dec18-b22a-4ab4-a62b-f9b1068666b8.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/4fe22984-eea1-42b8-b34b-fde6f6a4ed4d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/25af5223-5d8f-4cd1-b308-82382a12c4e6.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/ebe92836-06e6-4fa4-a776-b7ec551d30ef.jpg?im_w=720",
    ],
    latlong: ["51.52781023365028", "-0.14322171472229164"],
    description:
      "A stunning duplex, period conversion arranged over the top two floors of this impressive building in Little Venice, Central London.  The accommodation comprises entrance hall off which  master bedroom with en-suite bathroom, reception room with modern fireplace and open plan to a contemporary kitchen/breakfast room. A lovely modern spiral staircase leads up to the floor above with two good sized bedrooms and a modern shower room. The property also benefits from a private roof terrace.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },

  {
    name: "Entire cabin hosted by Martin",
    rating: 4.91,
    num_reviews: 44,
    city: "Holbæk, Region Zealand ",
    country: "Denmark",
    price: 252,
    superhost: "true",
    host: "Martin",
    guests: 12,
    bedrooms: 3,
    beds: 8,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-14393977/original/c4ae9b1f-0945-4b6b-b769-6cab5cf87768.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-14393977/original/955e3761-9294-4e5b-ab36-2f4c0355240d.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/a348dd7f-b254-4d84-ad28-ebf2ccde2563.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/ba1ea453-505c-45e5-ad9c-afc0aef41149.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e31890a3-7c8c-4fb8-ac09-f9b8a857d4ae.jpg?im_w=720",
    ],
    latlong: ["55.75809012961058", "11.711353940066243"],
    description:
      "The house is our second home, hobby and construction project.For 8 years, we have worked to make the house stand sharp and welcoming, thoughtful and delicious with a focus on ease of use and function.The new kitchen is the heart of the house and completely equipped with everything ( see table of contents below ) 100 m2 Rap round Terrace and 4 person SPA . Gas grill with equipment, sun loungers, cushions, blankets, outdoor fireplace that is good for outdoor fun and warmth.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },

  {
    name: "Private room in cave hosted by Sam",
    rating: 4.61,
    num_reviews: 54,
    city: "Göreme Belediyesi, Nevşehir",
    country: "Turkey",
    price: 125,
    superhost: "true",
    host: "Sam",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/3cf5662b-8eed-40f6-ab9b-9637b6631610.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/58d5afee-54e6-4c69-83ed-a1bb2046960e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/521d5dda-85d4-4d99-84d2-159d43fcd4cc.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/731276f0-37a4-473a-8a49-f9ed7e81a866.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/ce5e65e7-036a-4a03-ad8b-0d0eba2d02f7.jpg?im_w=720",
    ],
    latlong: ["38.640622783217346", "34.83096944334566"],
    description:
      "Bringing a new level of eco-inspired chic to Göreme, Koza Cave is a masterclass in stylish sustainable tourism. Passionate owner Derviş spent decades living in Holland and has incorporated Dutch eco-sensibility into every cave crevice of the 10 stunning rooms. Grey water is reused, and recycled materials and local handcrafted furniture are utilised in abundance to create sophisticated spaces.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },

  {
    name: "Entire rental unit hosted by Linnea",
    rating: 4.71,
    num_reviews: 74,
    city: "Milano, Lombardia",
    country: "Italy",
    price: 453,
    superhost: "true",
    host: "Linnea",
    guests: 6,
    bedrooms: 3,
    beds: 5,
    bath: 2,
    images: [
      "https://a0.muscache.com/im/pictures/d45291aa-fdbb-4a86-a9af-34bee2e91ee2.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/74d97964-765a-4c14-9db2-6d8b29d128cf.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/07212ba2-916f-4c70-9a96-920dabd2340f.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/74952862-bfc4-4515-b7bc-3029f74b41ae.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/a2af8128-d767-4548-b2ea-ed33685b074c.jpg?im_w=720",
    ],
    latlong: ["45.46183294232915", " 9.196593496310898"],
    description:
      "The Penthouse you've always dreamed of is waiting for you in Milan! With its lavish rooftop garden and luxurious hot tub that overlooks the iconic Duomo cathedral, this brand new Penthouse has been designed with those who want to live their lives like royalty. You'll find her pristine rooms tranquil with tall windows that offer breathtaking views across the city. ",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },

  {
    name: "Entire loft hosted by Thomas",
    rating: 5,
    num_reviews: 148,
    city: "Gent, Vlaams Gewest",
    country: "Belgium",
    price: 111,
    superhost: "false",
    host: "Thomas",
    guests: 4,
    bedrooms: 2,
    beds: 4,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-33248221/original/8dd2344f-5f1d-4a15-95d4-f9cd0cdd3f7c.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-33248221/original/bdb1d931-fd55-4e03-904b-3e4d97bb4163.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-33248221/original/87ff4efa-3728-42dd-b5b7-402243c6392b.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-33248221/original/156284fe-a164-48de-89e3-c580e02df7fb.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-33248221/original/ed996df4-0fa1-4fbe-b49e-440dc598db25.jpeg?im_w=720",
    ],
    latlong: ["51.06242605229066", "3.7268429129683716"],
    description:
      "Spacious unique loft in the New York Loft Building. The building used to be a warehouse, constructed in 1913, in what was at that time a busy harbour area. Now it is the biggest protected city view of Ghent and becoming more and more a touristic hotspot. A really unique area! Free parking zone. ",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },
];

const LocalData = () => {
  const { state, dispatch } = useContext(Context);
  console.log(data);
  useEffect(() => {
    const getData = () => {
      return dispatch({ type: "localData", payload: data });
    };

    getData();
  }, [data]);
};

export default LocalData;
