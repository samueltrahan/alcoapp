import Heaven from './assets/heavenoftipsydelight3.jpg';
import Tenth from './assets/tenthdegree1.jpg';
import Autumn from './assets/autumnelixir4.jpg';
import SummerSnow from './assets/summersnow.jpg';
import HappyBride from './assets/happybride1.jpg';
import BlackGold from './assets/black&gold3.jpg';
import Sayuri from './assets/sayuri11.jpg';
import PureDusk from './assets/puredusk.jpg';
import PureDawn from './assets/puredawn3.jpg';
import LightlyCloudy from './assets/lightlycloudy.jpg';
import Hana from './assets/hana.jpg';
import DraftSake from './assets/zipang.jpg';
import Funaguchi from './assets/funaguchi3.jpg';
import Zipang from './assets/zipang2.jpg';
import ShiningPrince from './assets/shiningprince.jpg';

const SAKE = [
    {
        id: 1,
        name: "Heaven of Tipsy Delight",
        bottleSize: "720 ml",
        bottlePrice: 145,
        ABV: '15-16%',
        foodPairing: "Cheese, Grilled Chicken and Seafood, Fried Foods",
        tastingNotes: "Multi-hued Flavor, Gentle yet strong",
        tsuPairing: "Any rolls without heave sauce or fried items, Poke bowls, Pimp salad",
        picture: Heaven
    },
    {
        id: 2,
        name: "Tenth Degree",
        bottleSize: "720ml",
        bottlePrice: 66,
        ABV: "17-18%",
        foodPairing: "Salmon Roe, Caviar",
        tastingNotes: " Dry and clear, a martini-lovers sake",
        tsuPairing: "Sashimi, Nigiri, Edamame, Pimp Salad, Rolls that aren't fried or rich",
        picture: Tenth
    },
    {
        id: 3,
        name: "Autumn Elixir",
        bottleSize: "550ml",
        bottlePrice: 60,
        ABV: "16%",
        foodPairing: "Miso marinades, rich seafood, and earthy sweetness",
        tastingNotes: "Balance of tartness and sweetness, persimmon",
        tsuPairing: "Steak",
        picture: Autumn
    },
    {
        id: 4,
        name: "Shining Prince",
        bottleSize: "720ml",
        bottlePrice: 56,
        ABV: "15.5%",
        foodPairing: "Seared Tuna, Exotic Vegetables, Asaragus",
        tastingNotes: "Citrus, Crisp, Cedar",
        tsuPairing: "Any Complements",
        picture: ShiningPrince
    },
    {
        id: 5,
        name: "Summer Snow",
        bottleSize: "500ml",
        bottlePrice:  54,
        ABV: "17-18%",
        foodPairing: "Spicy Tuna, Salmon, Grilled Seabass",
        tastingNotes: "Creamy, Rich, Robust",
        tsuPairing: "Baked salmon, Feature noodle dish, Cisotaki, Sunflower, Thai spaghetti, Spicy Edamame, Ike fries, Rolls with jalepeno or sriracha, Fried rice",
        picture: SummerSnow
    },
    {
        id: 6,
        name: "Happy Bride",
        bottleSize: "500ml",
        bottlePrice: 54,
        ABV: "7-8%",
        foodPairing: "Light, Mildly Sweet, Desserts",
        tastingNotes: "Pleasantly Tart, Slightly Sweet, Crisp",
        picture: HappyBride,
    },
    {
        id: 7,
        name: "Black & Gold",
        bottleSize: "750ml",
        bottlePrice: 40,
        ABV: "15.6%",
        foodPairing: "Grilled Chicken and pork, Scallops, Dumplings",
        tastingNotes: "Honey Dew, Anise and roasted nuts, Balanced",
        tsuPairing: "Chicken, Small Plate, Tonkatsu, Gyoza",
        picture: BlackGold
    },
    {
        id: 8,
        name: "Sayuri",
        bottleSize: "720ml",
        bottlePrice: 40,
        ABV: "12.5%",
        foodPairing: "Medium spicy food, Kimchi, Saucy",
        tastingNotes: "Light taste, but full bodied, Touch of honey, Tropical fruit, Multiple melons",
        tsuPairing: "Spicy Edamame, Cisotaki, Sunflower, Ramen, Big Tuna Roll, Dynamite Rolls, Kabuki Roll, Anything with Sriracha, Tsinful Tsunami",
        picture: Sayuri
    },
    {
        id: 9,
        name: "Pure Dusk",
        bottleSize: "300ml",
        bottlePrice: 38,
        ABV: "15.5%",
        foodPairing: "Sashimi, Shrimp, Whitefish",
        tastingNotes: "Hints of orange peel and green apple, Bright pear, Canteloupe",
        picture: PureDusk
    },
    {
        id: 10,
        name: "Pure Dawn",
        bottleSize: "300ml",
        bottlePrice: 32,
        ABV: "15.5%",
        foodPairing: "Chicken, Pasta, Seafood",
        tastingNotes: "Subtle notes of pear, Fugi Apples, Soft-sweet to dry",
        picture: PureDawn
    },
    {
        id:11,
        name: "Lighly Cloudy",
        bottleSize: "250ml",
        bottlePrice: 32,
        ABV: "15-16%",
        foodPairing: "Mackerel, Toro, Yellowtail",
        tastingNotes: "Smooth vanilla, Hint of coconut and pineapple",
        picture: LightlyCloudy
    },
    {
        id: 12,
        name: "Hana-awaka",
        bottleSize: "250ml",
        bottlePrice: 18,
        ABV: "7%",
        foodPairing: "Sweet dishes and desserts",
        tastingNotes: "Fizzy, Mild sweetness, and Acidity",
        tsuPairing: "Sashimi, Nigiri, All Desserts, Cisotaki, Sunflower, Ramen, Big Tuna Roll, Dynamite Rolls, Kabuki Roll",
        picture: Hana
    },
    {
        id: 13,
        name: "Zipang",
        bottleSize: "250ml",
        bottlePrice: 18,
        ABV: "7%",
        foodPairing: "Light appetizers, Spicy food",
        tastingNotes: "Hints of tropical fruits, Medium bodied, Light finish",
        picture: Zipang
    },
    {
        id: 14,
        name: "Funaguchi",
        bottleSize: "750ml",
        bottlePrice: 17,
        ABV: "19%",
        foodPairing: "Salted fish, Noodles",
        tastingNotes: "Full bodied, Ripe fruits",
        picture: Funaguchi
    },
    {
        id: 15,
        name: "Draft Sake, Hakusuru",
        bottleSize: "200ml",
        bottlePrice: 9,
        ABV: "14%",
        foodPairing: "Salads, Tempura vegetables, Ponzu",
        tastingNotes: "Refined freshness, Light, Crisp",
        picture: DraftSake
    }
]

export {SAKE};