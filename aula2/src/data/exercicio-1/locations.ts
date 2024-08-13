import birminghamAppleStore from "@images/exercicio_um/birmingham/applestore.jpg";
import birminghamBritain from "@images/exercicio_um/birmingham/britain.jpg";
import seattleDowntown from "@images/exercicio_um/seattle/seattle_downtown.jpg";
import seattleMed from "@images/exercicio_um/seattle/seattle_med.jpg";
import seattleShuffle from "@images/exercicio_um/seattle/seattle_shuffle.jpg";

export const locations = [
  {
    location: "Seattle, Washington",
    description:
      "Me and my iPod in Seattle! You can see rain clouds and the Space Needle. You can't see the 628 coffee shops.",
    images: [
      {
        src: seattleMed,
        alt: "Seattle Medical Center",
        slug: "seattle-med",
        description: "My iPod in Seattle, WA",
      },
      {
        src: seattleShuffle,
        alt: "Seattle Shuffle",
        slug: "seattle-shuffle",
        description: "An iPod Shuffle in Seattle, WA",
      },
      {
        src: seattleDowntown,
        alt: "Seattle downtown",
        slug: "seattle-downtown",
        description: "An iPod in downtown Seattle, WA",
      },
    ],
  },
  {
    location: "Birmingham, England",
    description:
      "Here are some iPod photos around Birmingham. We've obviously got some passionate folks over here who love their iPods. Check out the classic red British telephone box!",
    images: [
      {
        src: birminghamBritain,
        alt: "Britain",
        slug: "birmingham-britain",
        description: "An iPod in Birmingham at a telephone box",
      },
      {
        src: birminghamAppleStore,
        alt: "Apple Store in Birmingham",
        slug: "birmingham-applestore",
        description: "An iPod at the Birmingham Apple store",
      },
    ],
  },
];

