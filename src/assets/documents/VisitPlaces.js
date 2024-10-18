const VisitPlaces = [
  {
    no: "1",
    place: "Sigiriya",
    description:
      "An ancient rock fortress and UNESCO World Heritage site, Sigiriya is famous for its palace ruins, frescoes, and breathtaking views.",
    image: "sigiriya.jpg",
  },
  {
    no: "2",
    place: "Ella",
    description:
      "A small town surrounded by scenic hills, Ella is known for hiking trails such as the one to Ella Rock and the iconic Nine Arches Bridge.",
    image: "ella.jpg",
  },
  {
    no: "3",
    place: "Kandy",
    description:
      "A cultural hub, Kandy is home to the Temple of the Tooth, one of Buddhism's most sacred sites, set against a backdrop of lush hills.",
    image: "kandy.jpg",
  },
  {
    no: "4",
    place: "Galle Fort",
    description:
      "A historic fort built by the Portuguese and later fortified by the Dutch, Galle Fort is a UNESCO World Heritage site with cobblestone streets and colonial architecture.",
    image: "galle_fort.jpg",
  },
  {
    no: "5",
    place: "Yala National Park",
    description:
      "One of Sri Lanka's largest national parks, Yala is famous for its diverse wildlife, including leopards, elephants, and exotic birds.",
    image: "yala.jpg",
  },
  {
    no: "6",
    place: "Dambulla Cave Temple",
    description:
      "A UNESCO World Heritage site, this temple complex features ancient caves with beautiful Buddhist murals and statues.",
    image: "dambulla.jpg",
  },
  {
    no: "7",
    place: "Horton Plains National Park",
    description:
      "A highland plateau known for its biodiversity and popular hiking trails like the one to World's End, a sheer cliff with panoramic views.",
    image: "horton_plains.jpg",
  },
  {
    no: "8",
    place: "Anuradhapura",
    description:
      "One of Sri Lanka's ancient capitals, Anuradhapura is home to well-preserved ruins of ancient palaces, temples, and stupas.",
    image: "anuradhapura.jpg",
  },
  {
    no: "9",
    place: "Mirissa",
    description:
      "A beautiful coastal town famous for whale watching, sandy beaches, and lively nightlife.",
    image: "mirissa.jpg",
  },
  {
    no: "10",
    place: "Polonnaruwa",
    description:
      "Another ancient capital of Sri Lanka, Polonnaruwa is known for its archaeological sites and ruins, including the Gal Vihara rock temple.",
    image: "polonnaruwa.jpg",
  },
  {
    no: "11",
    place: "Arugam Bay",
    description:
      "A surfer's paradise, Arugam Bay is famous for its waves and laid-back beach town vibe.",
    image: "arugam_bay.jpg",
  },
  {
    no: "12",
    place: "Adam's Peak",
    description:
      "A sacred pilgrimage site, Adam's Peak is famous for its sunrise views and the footprint-shaped mark at the summit, which is significant to multiple religions.",
    image: "adams_peak.jpg",
  },
  {
    no: "13",
    place: "Pinnawala Elephant Orphanage",
    description:
      "A sanctuary for orphaned elephants where visitors can watch them being fed and bathing in the river.",
    image: "pinnawala.jpg",
  },
  {
    no: "14",
    place: "Nuwara Eliya",
    description:
      "Known as 'Little England,' Nuwara Eliya is famous for its tea plantations, cool climate, and colonial architecture.",
    image: "nuwara_eliya.jpg",
  },
  {
    no: "15",
    place: "Udawalawe National Park",
    description:
      "This park is a great place to see elephants in the wild, as well as other wildlife like crocodiles and water buffalo.",
    image: "udawalawe.jpg",
  },
  {
    no: "16",
    place: "Bentota",
    description:
      "A coastal town known for its golden beaches, luxury resorts, and water sports such as windsurfing and jet skiing.",
    image: "bentota.jpg",
  },
  {
    no: "17",
    place: "Trincomalee",
    description:
      "A natural harbor town with beautiful beaches like Nilaveli and Uppuveli, and cultural sites such as the Koneswaram Temple.",
    image: "trincomalee.jpg",
  },
  {
    no: "18",
    place: "Kalpitiya",
    description:
      "A coastal town known for its dolphin watching, kitesurfing, and unspoiled beaches.",
    image: "kalpitiya.jpg",
  },
  {
    no: "19",
    place: "Hikkaduwa",
    description:
      "A lively beach town with vibrant nightlife, coral reefs, and opportunities for snorkeling and diving.",
    image: "hikkaduwa.jpg",
  },
  {
    no: "20",
    place: "Jaffna",
    description:
      "The cultural heart of Sri Lanka's Tamil community, Jaffna offers historical and religious sites like the Nallur Kandaswamy Temple.",
    image: "jaffna.jpg",
  },
  {
    no: "21",
    place: "Ratnapura",
    description:
      "Known as the 'City of Gems,' Ratnapura is the center of Sri Lanka's gem industry and a gateway to Sinharaja Forest Reserve.",
    image: "ratnapura.jpg",
  },
  {
    no: "22",
    place: "Sinharaja Forest Reserve",
    description:
      "A UNESCO World Heritage site, Sinharaja is a tropical rainforest with incredible biodiversity and rare wildlife.",
    image: "sinharaja.jpg",
  },
  {
    no: "23",
    place: "Knuckles Mountain Range",
    description:
      "A UNESCO World Heritage site, this mountain range is a great place for trekking and birdwatching, with beautiful landscapes.",
    image: "knuckles.jpg",
  },
  {
    no: "24",
    place: "Kitulgala",
    description:
      "A small town known for white-water rafting on the Kelani River and as the location for the movie 'The Bridge on the River Kwai.'",
    image: "kitulgala.jpg",
  },
  {
    no: "25",
    place: "Colombo",
    description:
      "Sri Lanka's bustling capital, Colombo is a vibrant mix of modernity and tradition, with colonial architecture, shopping, and dining.",
    image: "colombo.jpg",
  },
  {
    no: "26",
    place: "Negombo",
    description:
      "A coastal town known for its fishing industry, Dutch canals, and sandy beaches.",
    image: "negombo.jpg",
  },
  {
    no: "27",
    place: "Matara",
    description:
      "A coastal town with historic sites such as the Star Fort and the beautiful Polhena Beach.",
    image: "matara.jpg",
  },
  {
    no: "28",
    place: "Kalutara",
    description:
      "A beach town with a famous Buddhist shrine, the Kalutara Bodhiya, and beautiful coastlines.",
    image: "kalutara.jpg",
  },
  {
    no: "29",
    place: "Diyaluma Falls",
    description:
      "Sri Lanka's second-highest waterfall, Diyaluma is a stunning cascade with natural pools at the top for swimming.",
    image: "diyaluma.jpg",
  },
  {
    no: "30",
    place: "Badulla",
    description:
      "A scenic town in the hill country, Badulla is surrounded by waterfalls, tea plantations, and the famous Dunhinda Falls.",
    image: "badulla.jpg",
  },
  {
    no: "31",
    place: "Pidurangala Rock",
    description:
      "A large rock formation offering an excellent view of Sigiriya and the surrounding landscape, often considered a quieter alternative to Sigiriya.",
    image: "pidurangala.jpg",
  },
  {
    no: "32",
    place: "Pasikuda",
    description:
      "A pristine beach with shallow waters and coral reefs, Pasikuda is perfect for swimming and relaxation.",
    image: "pasikuda.jpg",
  },
  {
    no: "33",
    place: "Batticaloa",
    description:
      "A coastal town with a scenic lagoon, colonial forts, and tranquil beaches.",
    image: "batticaloa.jpg",
  },
  {
    no: "34",
    place: "Mannar",
    description:
      "A town on the northwestern coast, Mannar is known for its baobab trees, ancient forts, and birdwatching opportunities.",
    image: "mannar.jpg",
  },
  {
    no: "35",
    place: "Vavuniya",
    description:
      "A gateway to the northern regions of Sri Lanka, Vavuniya is a cultural hub with ancient temples and a peaceful atmosphere.",
    image: "vavuniya.jpg",
  },
  {
    no: "36",
    place: "Hambantota",
    description:
      "A growing city in the south, Hambantota is home to the Bundala National Park and salt flats, with excellent birdwatching opportunities.",
    image: "hambantota.jpg",
  },
  {
    no: "37",
    place: "Tissamaharama",
    description:
      "A historical town with ancient stupas and a gateway to Yala National Park.",
    image: "tissamaharama.jpg",
  },
  {
    no: "38",
    place: "Bundala National Park",
    description:
      "A birdwatcher's paradise, Bundala is a UNESCO biosphere reserve known for its wetlands and migratory bird species.",
    image: "bundala.jpg",
  },
  {
    no: "39",
    place: "Wilpattu National Park",
    description:
      "Sri Lanka's largest national park, known for its diverse wildlife, including leopards, elephants, and sloth bears.",
    image: "wilpattu.jpg",
  },
  {
    no: "40",
    place: "Mihintale",
    description:
      "An ancient site believed to be the birthplace of Buddhism in Sri Lanka, with stupas and scenic views.",
    image: "mihintale.jpg",
  },
  {
    no: "41",
    place: "Negombo Lagoon",
    description:
      "A large lagoon with mangrove swamps, a vibrant fishing industry, and opportunities for boat tours.",
    image: "negombo_lagoon.jpg",
  },
  {
    no: "42",
    place: "Kumana National Park",
    description:
      "A bird sanctuary on Sri Lanka's east coast, Kumana is home to rare species like the black-necked stork.",
    image: "kumana.jpg",
  },
  {
    no: "43",
    place: "Beruwala",
    description:
      "A coastal town known for its long sandy beaches and the historic Kechimalai Mosque.",
    image: "beruwala.jpg",
  },
  {
    no: "44",
    place: "Mount Lavinia",
    description:
      "A popular suburb of Colombo, Mount Lavinia is known for its beach and colonial-era Mount Lavinia Hotel.",
    image: "mount_lavinia.jpg",
  },
  {
    no: "45",
    place: "Aluthgama",
    description:
      "A town near Bentota, known for its riverboat cruises and proximity to the beautiful Brief Garden.",
    image: "aluthgama.jpg",
  },
  {
    no: "46",
    place: "Mulkirigala Raja Maha Vihara",
    description:
      "An ancient rock temple complex with intricate murals and a beautiful location on a large rock outcrop.",
    image: "mulkirigala.jpg",
  },
  {
    no: "47",
    place: "Embilipitiya",
    description:
      "A town near Udawalawe National Park, offering easy access to wildlife safaris.",
    image: "embilipitiya.jpg",
  },
  {
    no: "48",
    place: "Weligama",
    description:
      "A beach town known for its beginner-friendly surfing spots and stilt fishing.",
    image: "weligama.jpg",
  },
  {
    no: "49",
    place: "Gal Oya National Park",
    description:
      "A remote park offering boat safaris on Sri Lanka's largest reservoir, where you can see elephants swimming.",
    image: "gal_oya.jpg",
  },
  {
    no: "50",
    place: "Haputale",
    description:
      "A small town in the highlands offering stunning views and tea plantations, including the Lipton's Seat viewpoint.",
    image: "haputale.jpg",
  },
  {
    no: "51",
    place: "Ritigala",
    description:
      "An ancient monastery site hidden in the jungle, Ritigala is known for its mysterious ruins and lush surroundings.",
    image: "ritigala.jpg",
  },
  {
    no: "52",
    place: "Ella Rock",
    description:
      "A popular hiking destination with breathtaking views of the surrounding countryside.",
    image: "ella_rock.jpg",
  },
  {
    no: "53",
    place: "Nine Arches Bridge",
    description:
      "A stunning colonial-era railway bridge set in a picturesque valley in Ella.",
    image: "nine_arches.jpg",
  },
  {
    no: "54",
    place: "Royal Botanical Gardens, Peradeniya",
    description:
      "A vast botanical garden near Kandy, featuring thousands of plant species and beautiful landscapes.",
    image: "peradeniya.jpg",
  },
  {
    no: "55",
    place: "Pettah Market",
    description:
      "A bustling market in the heart of Colombo, where you can find everything from spices to textiles.",
    image: "pettah.jpg",
  },
  {
    no: "56",
    place: "Dutch Hospital Shopping Precinct",
    description:
      "A historic building turned into a trendy shopping and dining complex in Colombo.",
    image: "dutch_hospital.jpg",
  },
  {
    no: "57",
    place: "Aukana Buddha Statue",
    description:
      "A towering ancient Buddha statue carved out of a single rock, located near Kala Wewa reservoir.",
    image: "aukana.jpg",
  },
  {
    no: "58",
    place: "Ambuluwawa Tower",
    description:
      "A unique multi-religious monument and biodiversity complex offering panoramic views from its tower.",
    image: "ambuluwawa.jpg",
  },
  {
    no: "59",
    place: "Surathali Falls",
    description:
      "A beautiful waterfall located near Belihuloya, ideal for nature lovers and hikers.",
    image: "surathali.jpg",
  },
  {
    no: "60",
    place: "Dunhinda Falls",
    description:
      "One of Sri Lanka's most beautiful waterfalls, located near Badulla, offering a scenic hiking trail to reach it.",
    image: "dunhinda.jpg",
  },
  {
    no: "61",
    place: "Victoria Park, Nuwara Eliya",
    description:
      "A well-maintained park in the heart of Nuwara Eliya, popular with families and nature lovers.",
    image: "victoria_park.jpg",
  },
  {
    no: "62",
    place: "Hakgala Botanical Garden",
    description:
      "A cool-climate botanical garden near Nuwara Eliya, famous for its rose gardens and diverse plant species.",
    image: "hakgala.jpg",
  },
  {
    no: "63",
    place: "Moon Plains",
    description:
      "A scenic plateau offering panoramic views of the surrounding mountains and valleys near Nuwara Eliya.",
    image: "moon_plains.jpg",
  },
  {
    no: "64",
    place: "Ramboda Falls",
    description:
      "A stunning waterfall located in the central highlands, perfect for a scenic stop on the way to Nuwara Eliya.",
    image: "ramboda.jpg",
  },
  {
    no: "65",
    place: "Seetha Amman Temple",
    description:
      "A colorful Hindu temple near Nuwara Eliya, believed to be the site where Sita was held captive in the Ramayana.",
    image: "seetha_amman.jpg",
  },
  {
    no: "66",
    place: "Baker's Falls",
    description:
      "A beautiful waterfall located in Horton Plains National Park, popular with hikers.",
    image: "bakers_falls.jpg",
  },
  {
    no: "67",
    place: "Lover's Leap Waterfall",
    description:
      "A scenic waterfall located near Nuwara Eliya, offering a beautiful view of the surrounding landscape.",
    image: "lovers_leap.jpg",
  },
  {
    no: "68",
    place: "Hunas Falls",
    description:
      "A peaceful waterfall near Matale, offering a tranquil escape into nature.",
    image: "hunas_falls.jpg",
  },
  {
    no: "69",
    place: "Pidurutalagala",
    description:
      "Sri Lanka's highest peak, offering panoramic views and cool weather.",
    image: "pidurutalagala.jpg",
  },
  {
    no: "70",
    place: "Gal Vihara",
    description:
      "An ancient rock temple in Polonnaruwa, famous for its large Buddha statues carved into granite.",
    image: "gal_vihara.jpg",
  },
  {
    no: "71",
    place: "Medirigiriya Vatadage",
    description:
      "A well-preserved ancient Buddhist structure, located near Polonnaruwa.",
    image: "medirigiriya.jpg",
  },
  {
    no: "72",
    place: "Manikdena Archaeological Site",
    description:
      "An ancient monastery and stupa located near Dambulla, set amidst beautiful natural surroundings.",
    image: "manikdena.jpg",
  },
  {
    no: "73",
    place: "Somawathiya Chaitya",
    description:
      "An ancient stupa located in the Polonnaruwa District, believed to house a relic of the Buddha's tooth.",
    image: "somawathiya.jpg",
  },
  {
    no: "74",
    place: "Kokduwa Temple",
    description:
      "A picturesque Buddhist temple located on a small island in the middle of a river near Polonnaruwa.",
    image: "kokduwa.jpg",
  },
  {
    no: "75",
    place: "Thivanka Image House",
    description:
      "An ancient image house located in Polonnaruwa, known for its frescoes and large Buddha statues.",
    image: "thivanka.jpg",
  },
  {
    no: "76",
    place: "Lotus Pond (Polonnaruwa)",
    description:
      "A beautifully preserved lotus-shaped bathing pond in the ancient city of Polonnaruwa.",
    image: "lotus_pond.jpg",
  },
  {
    no: "77",
    place: "Ruwanwelisaya",
    description:
      "One of the most famous stupas in Sri Lanka, located in the sacred city of Anuradhapura.",
    image: "ruwanwelisaya.jpg",
  },
  {
    no: "78",
    place: "Jethawanaramaya Stupa",
    description:
      "A massive ancient stupa located in the ancient city of Anuradhapura, once the third tallest structure in the world.",
    image: "jethawanaramaya.jpg",
  },
  {
    no: "79",
    place: "Isurumuniya",
    description:
      "An ancient rock temple located in Anuradhapura, known for its rock carvings and serene surroundings.",
    image: "isurumuniya.jpg",
  },
  {
    no: "80",
    place: "Abhayagiri Stupa",
    description:
      "One of the largest ancient stupas in Anuradhapura, part of a grand monastic complex.",
    image: "abhayagiri.jpg",
  },
  {
    no: "81",
    place: "Lankarama Stupa",
    description:
      "A small but historically significant stupa in the ancient city of Anuradhapura.",
    image: "lankarama.jpg",
  },
  {
    no: "82",
    place: "Thuparamaya",
    description:
      "The first stupa built in Sri Lanka after the introduction of Buddhism, located in Anuradhapura.",
    image: "thuparamaya.jpg",
  },
  {
    no: "83",
    place: "Samadhi Buddha",
    description:
      "A famous statue of the Buddha in the Samadhi posture, located in the ancient city of Anuradhapura.",
    image: "samadhi_buddha.jpg",
  },
  {
    no: "84",
    place: "Lovamahapaya",
    description:
      "An ancient building in Anuradhapura, known as the Brazen Palace, once a magnificent nine-story structure.",
    image: "lovamahapaya.jpg",
  },
  {
    no: "85",
    place: "Kuttam Pokuna",
    description:
      "Ancient bathing ponds located in Anuradhapura, known for their intricate stone carvings.",
    image: "kuttam_pokuna.jpg",
  },
  {
    no: "86",
    place: "Sri Maha Bodhi",
    description:
      "A sacred fig tree in Anuradhapura, believed to be a cutting from the original Bodhi tree under which Buddha attained enlightenment.",
    image: "sri_maha_bodhi.jpg",
  },
  {
    no: "87",
    place: "Tantirimale",
    description:
      "An ancient Buddhist site located near Anuradhapura, known for its rock carvings and tranquil surroundings.",
    image: "tantirimale.jpg",
  },
  {
    no: "88",
    place: "Ritigala Strict Nature Reserve",
    description:
      "A nature reserve centered around the Ritigala mountain, offering ancient ruins and rich biodiversity.",
    image: "ritigala_nature.jpg",
  },
  {
    no: "89",
    place: "Bahirawakanda Temple",
    description:
      "A temple in Kandy with a giant Buddha statue overlooking the city, offering panoramic views.",
    image: "bahirawakanda.jpg",
  },
  {
    no: "90",
    place: "Udawattakele Forest Reserve",
    description:
      "A forest reserve in Kandy, popular for hiking and birdwatching, with historical significance as a royal sanctuary.",
    image: "udawattakele.jpg",
  },
  {
    no: "91",
    place: "Embekka Devalaya",
    description:
      "An ancient temple near Kandy, famous for its intricately carved wooden pillars.",
    image: "embekka.jpg",
  },
  {
    no: "92",
    place: "Lankatilaka Temple",
    description:
      "A beautiful temple near Kandy, known for its architectural blend of Sinhalese and South Indian styles.",
    image: "lankatilaka.jpg",
  },
  {
    no: "93",
    place: "Gadaladeniya Temple",
    description:
      "An ancient Buddhist temple near Kandy, built in the South Indian architectural style.",
    image: "gadaladeniya.jpg",
  },
  {
    no: "94",
    place: "Knuckles Waterfalls",
    description:
      "A series of picturesque waterfalls located in the Knuckles Mountain Range, popular with hikers.",
    image: "knuckles_waterfalls.jpg",
  },
  {
    no: "95",
    place: "Sembuwatta Lake",
    description:
      "A man-made lake in the hill country, offering breathtaking views and a tranquil atmosphere.",
    image: "sembuwatta.jpg",
  },
  {
    no: "96",
    place: "Mahiyanganaya",
    description:
      "A small town with historical significance as one of the oldest settlements in Sri Lanka, home to the Mahiyangana Stupa.",
    image: "mahiyanganaya.jpg",
  },
  {
    no: "97",
    place: "Dambana",
    description:
      "A remote village home to Sri Lanka's indigenous Vedda community, offering cultural insights and eco-tourism experiences.",
    image: "dambana.jpg",
  },
  {
    no: "98",
    place: "Kataragama",
    description:
      "A sacred town for Buddhists, Hindus, and Muslims, known for its vibrant religious festivals and Kataragama Temple.",
    image: "kataragama.jpg",
  },
  {
    no: "99",
    place: "Panama",
    description:
      "A tranquil coastal village near Arugam Bay, known for its wildlife and peaceful atmosphere.",
    image: "panama.jpg",
  },
  {
    no: "100",
    place: "Sithulpawwa",
    description:
      "An ancient Buddhist monastery located in Yala National Park, known for its rock cave temples and serene surroundings.",
    image: "sithulpawwa.jpg",
  },
];

export default VisitPlaces;
