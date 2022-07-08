import nightImage from "../images/intro/blocks/night.png";
import nightBG from "../images/intro/background/night.jpg"
import earlyMorningImage from "../images/intro/blocks/early-morning.png";
import earlyMorningBG from "../images/intro/background/early-morning.jpg"
import morningImage from "../images/intro/blocks/morning.png";
import morningBG from "../images/intro/background/morning.jpg";
import lunchImage from "../images/intro/blocks/lunch.png";
import lunchBG from "../images/intro/background/lunch.jpg";
import afternoonImage from "../images/intro/blocks/afternoon.png";
import afternoonBG from "../images/intro/background/afternoon.jpg";
import eveningImage from "../images/intro/blocks/evening.png";
import eveningBG from "../images/intro/background/evening.jpg";
import dinnerImage from "../images/intro/blocks/dinner.png";
import dinnerBG from "../images/intro/background/dinner.jpg";
import lateEveningImage from "../images/intro/blocks/late-evening.png";
import lateEveningBG from "../images/intro/background/late-evening.jpg";

const intro = [{
        introBG: nightBG,
        introBGClass: "intro__bg--night",
        introBGAlt: "View of the sun over the water",
        introImage: nightImage,
        introImageAlt: "Image of two pillows",
        introText: "night owl",
        introImageWidth: 1280,
        introImageHeight: 1224
    },
    {
        introBG: earlyMorningBG,
        introBGClass: "intro__bg--early-morning",
        introBGAlt: "Inside chronographic watch",
        introImage: earlyMorningImage,
        introImageAlt: "London skyline",
        introText: "early bird",
        introImageWidth: 1279,
        introImageHeight: 694
    },
    {
        introBG: morningBG,
        introBGClass: "intro__bg--morning",
        introBGAlt: "Inside an empty underground train compartment",
        introImage: morningImage,
        introImageAlt: "London undeground station post sign",
        introText: "commuters",
        introImageWidth: 1280,
        introImageHeight: 1297
    },
    {
        introBG: lunchBG,
        introBGClass: "intro__bg--lunch",
        introBGAlt: "View of restaurant outside table set",
        introImage: lunchImage,
        introImageAlt: "Image of table cloth and cutlery",
        introText: "foodie",
        introImageWidth: 1022,
        introImageHeight: 1232
    },
    {
        introBG: afternoonBG,
        introBGClass: "intro__bg--afternoon",
        introBGAlt: "Park view with bench and pink leaved tree",
        introImage: afternoonImage,
        introImageAlt: "Image of headphones and mobile phone screen",
        introText: "youtubers",
        introImageWidth: 1280,
        introImageHeight: 1280
    },
    {
        introBG: eveningBG,
        introBGClass: "intro__bg--evening",
        introBGAlt: "London Barclays bike",
        introImage: eveningImage,
        introImageAlt: "Image of sporting activities",
        introText: "fitness enthusiasts",
        introImageWidth: 1280,
        introImageHeight: 1122
    },
    {
        introBG: dinnerBG,
        introBGClass: "intro__bg--dinner",
        introBGAlt: "salt and pepper shakers at table",
        introImage: dinnerImage,
        introImageAlt: "Image of food basket",
        introText: "chef",
        introImageWidth: 1280,
        introImageHeight: 770
    },
    {
        introBG: lateEveningBG,
        introBGClass: "intro__bg--late-evening",
        introBGAlt: "Evening view of London Tower Bridge",
        introImage: lateEveningImage,
        introImageAlt: "Image of laptop and tablet screen",
        introText: "late stumbler",
        introImageWidth: 1280,
        introImageHeight: 626
    }
]

export default intro;