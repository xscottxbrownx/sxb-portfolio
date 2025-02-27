// Imported Assets
import project1img from "../assets/project_photos/Elstarling.webp";
import project2img from "../assets/project_photos/Papermaker.webp";
import project3img from "../assets/project_photos/FMC_nft_gallery.webp";
import project4img from "../assets/project_photos/Mortgage.webp";
import project5img from "../assets/project_photos/Ticketsbot.webp";
import project6img from "../assets/project_photos/Portfolio.webp";

// breakpoint to determine when to size of images
const mobileView = window.innerWidth <= 1024;

const imageStyle = {
  border: "black solid 2px",
  width: mobileView ? 250 : 400,
  height: mobileView ? 200 : 300,
};

const projects = [
  {
    title: "elstarling.com",
    tech: ["React", "Vite", "ChakraUI", "ReactIcons"],
    description:
      "A single-page website for a Portland, OR debut author. This website has all information about the author, their works, and contact info. Used subtle animations, plenty of images, and form to signup for newsletter. The author is currently working on their first novel and this site will be updated as they progress.",
    imageLink: project1img,
    imageAlt: "elstarling.com site",
    imageStyle: imageStyle,
    hrefSourceCode: "https://github.com/xscottxbrownx/elstarling",
    hrefViewLive: "https://elstarling.com/",
  },
  {
    title: "Paper Maker Race Site",
    tech: ["React", "ReactRouter", "MaterialUI", "SwiperJS", "ReactIcons"],
    description:
      "A single-page website for a local race that was relying solely on facebook previously. As a participant of the race for the first two years, I recognized a need to have a single more accesible location of all information. This website has all information needed about the race, it's founders, and link to registration.  Currently still a work-in-progress with input from founders and participants.",
    imageLink: project2img,
    imageAlt: "Papermaker Race Site",
    imageStyle: imageStyle,
    hrefSourceCode: "https://github.com/xscottxbrownx/paper-maker-race",
    hrefViewLive: "https://paper-maker-race.vercel.app/",
    wip: true,
  },
  {
    title: "FMC Site Mockup",
    tech: ["NextJS", "AlchemySDK", "FontAwesome", "Web3"],
    description:
      "A mockup site for a company that I co-founded in late September 2021. This company started as a discord server for NFT traders and friends. It quickly grew to over 15k members and 60k twitter followers all organically. This mockup has all information needed about the company and a dashboard area that includes: connection to your web 3 wallet or typed in wallet address, gallery of nfts, token balances, last 30 day history of transactions, floor price and holder informational charts by collection, and some more work-in-progress components.",
    imageLink: project3img,
    imageAlt: "FMC Site",
    imageStyle: imageStyle,
    hrefSourceCode: "https://github.com/xscottxbrownx/mint-club",
    hrefViewLive: "https://fmc.scottxbrown.com",
  },
  {
    title: "Mortgage App",
    tech: ["React", "Bootstrap", "DayJS", "MetaTags"],
    description:
      "Calculates and displays monthly payment, total interest paid, and other details of loan - based on user provided inputs. URL parameters are used, so the resulting table and information can be shared to others via a web address link.",
    imageLink: project4img,
    imageAlt: "Mortgage App",
    imageStyle: imageStyle,
    hrefSourceCode: "https://github.com/xscottxbrownx/amortization",
    hrefViewLive: "https://loan.scottxbrown.com",
  },
  {
    title: "Tickets Bot Documentation",
    tech: ["Markdown", "mdbook", "webpImages"],
    description:
      "I've used this discord bot since February 2022. It was clear their team needed much help with customer support and the documentation on the bot was lacking. I took it upon myself to help their users in the Tickets bot Support discord server. Tickets bot team ultimately saw the value I provided and offered me a spot on their official support team.  Shortly after, I convinced them to allow me to completely re-write the documentation to explain all features, settings, and possible configuration options - as it was obviously needed.",
    imageLink: project5img,
    imageAlt: "Tickets bot",
    imageStyle: imageStyle,
    hrefSourceCode: "https://github.com/xscottxbrownx/docs",
    hrefViewLive: "https://docs.ticketsbot.cloud/",
  },
  {
    title: "Portfolio Site",
    tech: ["React", "EmailJS", "AnimateOnScroll", "Tailwind"],
    description:
      "You are currently here. Site to house the current portfolio and resume of Scott Brown. Contact information available as well as links to social media profiles.",
    imageLink: project6img,
    imageAlt: "Portfolio Site",
    imageStyle: imageStyle,
    hrefSourceCode: "https://github.com/xscottxbrownx/sxb-portfolio",
    hrefViewLive: "https://www.scottxbrown.com",
  },
];

export default projects;
