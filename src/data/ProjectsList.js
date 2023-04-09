// Imported Assets
import project1img from "../assets/project_photos/FMC_nft_gallery.webp";
import project2img from "../assets/project_photos/Mortgage.webp";
import project3img from "../assets/project_photos/Ticketsbot.webp";
import project4img from "../assets/project_photos/Portfolio.webp"



const imageStyle = {
  border: "black solid 2px",
  width: 400,
  height: 300,
};


const projects = [
  {
    title: "FMC Site Mockup",
    tech: ["NextJS", "AlchemySDK", "FontAwesome", "NFTs", "Crypto"],
    description:
      "A mockup site for a company that I co-founded in late September 2021. This company started as a discord server for NFT traders and friends. It quickly grew to over 15k members and 60k twitter followers all organically (no bots.) The server was focused on NFT education and alpha, and as such we also launched our own NFT to token-gate the valuable information in April 2022. This mockup has all information needed about the company and a dashboard area that includes: connection to your web 3 wallet or typed in wallet address, gallery of nfts, token balances, last 30 day history of transactions, floor price and holder informational charts by collection, and some more work-in-progress components.",
    imageLink: project1img,
    imageAlt: "Project1",
    imageStyle: imageStyle,
    hrefSourceCode: "https://github.com/xscottxbrownx/mint-club",
    hrefViewLive: "http://www.fmc.scottxbrown.com",
  },
  {
    title: "Mortgage App",
    tech: ["React", "Bootstrap", "DayJS", "MetaTags"],
    description:
      "Calculates and displays monthly payment, total interest paid, and other details of loan - based on user provided inputs. URL parameters are used, so the resulting table and information can be shared to others via a web address link.",
    imageLink: project2img,
    imageAlt: "Mortgage App",
    imageStyle: imageStyle,
    hrefSourceCode: "https://github.com/xscottxbrownx/amortization",
    hrefViewLive: "http://www.loan.scottxbrown.com",
  },
  {
    title: "Tickets Bot Documentation",
    tech: ["Markdown", "mdbook", "webpImages"],
    description:
      "I've used this discord bot since February 2022. It was clear their team needed much help with customer support and the documentation on the bot was lacking. I took it upon myself to help their users in the Tickets bot Support discord server. Tickets bot team ultimately saw the value I provided and offered me a spot on their official support team.  Shortly after, I convinced them to allow me to completely re-write the documentation to explain all features, settings, and possible configuration options - as it was obviously needed.",
    imageLink: project3img,
    imageAlt: "Tickets bot",
    imageStyle: imageStyle,
    hrefSourceCode: "https://github.com/xscottxbrownx/docs",
    hrefViewLive: "https://docs.ticketsbot.net/",
  },
  {
    title: "Portfolio Site",
    tech: ["React", "EmailJS", "AnimateOnScroll", "Tailwind"],
    description:
      "You are currently here. Site to house the current portfolio and resume of Scott Brown. Contact information available as well as links to social media profiles.",
    imageLink: project4img,
    imageAlt: "Portfolio Site",
    imageStyle: imageStyle,
    hrefSourceCode: "https://github.com/xscottxbrownx/sxb-portfolio",
    hrefViewLive: "https://www.scottxbrown.com",
  }
]

export default projects;