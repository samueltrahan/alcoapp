import Caymus from './assets/caymus1.jpg';
import FrankFamilyCab from './assets/frankfamilycab.jpg';
import Intrinsic from './assets/intrinsic1.jpg';
import LaCrema from './assets/lacrema.jpg';
import Benziger from './assets/benziger1.jpg';
import Ouragan from './assets/ouragan1.jpg';
import FrankFamilyChard from './assets/frankfamily1.jpg';
import OysterBay from './assets/oysterbay2.jpg';
import Cutrer from './assets/cutrer1.jpg';
import J from './assets/j2.jpg';
import Bieler from './assets/bieler1.jpg';
import Takara from './assets/takaraplum1.jpg';

const REDWINE = [
    {
        id: 1,
        name: "Caymus",
        type: "Cabernet Sauvignon",
        glass: "",
        bottle: 150,
        region: "Napa Valley, CA",
        year: 2017,
        tastingNotes: "Cocoa, Cassis, Ripe Dark Berries",
        picture: Caymus
    },
    {
        id: 2,
        name: "Frank Family",
        type: "Cabernet Sauvignon",
        glass: "",
        bottle: 95,
        region: "Napa Valley, CA",
        year: 2017,
        tastingNotes: "Oak, Vanilla, Chocolate",
        picture: FrankFamilyCab
    },
    {
        id: 3,
        name: "Intrinsic",
        type: "Cabernet Sauvignon",
        glass: 14,
        bottle: 54,
        region: "Columbia Valley, Washington",
        year: 2017,
        tastingNotes: "Pomegranate, Chocolate, Blueberry",
        picture: Intrinsic
    },
    {
        id: 4,
        name: "La Crema",
        type: "Pinot Noir",
        glass: 14,
        bottle: 54,
        region: "Sonoma Coast, CA",
        year: 2018,
        tastingNotes: "Berries, Plums, Hints of Spice and Toast",
        picture: LaCrema
    },
    {
        id: 5,
        name: "Benziger",
        type: "Pinot Noir/Organic",
        glass: 12,
        bottle: 46,
        region: "Central Coast, CA",
        year: 2018,
        tastingNotes: "Berry Aromas, Touch of Spice, Earthy",
        picture: Benziger
    },
    {
        id: 6,
        name: "Ouragan",
        type: "Pinot Noir",
        glass: 11,
        bottle: 42,
        region: "Oregon",
        year: 2017,
        tastingNotes: "Strawberry, Hint of Vanilla, Toasted Almonds",
        picture: Ouragan
    }
]

const WHITEWINES = [
    {
        id: 1,
        name: "Frank Family",
        type: "Chardonnay",
        glass: 14,
        bottle: 54,
        region: "Carneros, CA",
        year: 2016,
        tastingNotes: "Yellow Apple, Lemon, Pear, Melon",
        picture: FrankFamilyChard
    }, 
    {
        id: 2,
        name: "Oyster Bar",
        type: "Sauvignon Blanc",
        glass: 12,
        bottle: 46,
        region: "Malborough, New Zealand",
        year: 2019,
        tastingNotes: "Citrus, Tropical, Zesty",
        picture: OysterBay
    },
    {
        id: 3,
        name: "Cutrer",
        type: "Chardonnay",
        glass: 12,
        bottle: 46,
        region: "Russian River Valley, CA",
        tastingNotes: "Vanilla, Toasted Nuts, Light Caramel, Subtle Cinnamon",
        picture: Cutrer
    }, 
    {
        id: 4,
        name: "J",
        type: "Pinot Gris",
        glass: 11,
        bottle: 42,
        region: "California",
        year: 2019,
        tastingNotes: "Pear, Apricot, White Peach, Lime",
        picture: J
    },
    {
        id: 5,
        name: "Bieler Père et Fils",
        type: "Rosé",
        glass: 9,
        bottle: 41,
        region: "South France",
        year: 2019,
        tastingNotes: "Raspberry, Cherry, Peach, Herbal",
        picture: Bieler,
    }, 
    {
        id: 6,
        name: "Takara Plum Wine",
        glass: 8,
        bottle: 40,
        region: "Japan",
        tastingNotes: "Rich, Sweet, Natural Plum",
        picture: Takara
    }
]

export {REDWINE, WHITEWINES}