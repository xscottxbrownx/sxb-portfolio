// React Animate On Scroll Imports
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function SkillSection({ icons, title, Icon }) {
  const iconsList = icons.map(({ Icon, name }, i) => (
    <div className="flex flex-col items-center justify-center mx-1" key={i}>
      <Icon />
      <p>{name}</p>
    </div>
  ));

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce offset={150}>
      <div className="flex flex-col lg:flex-row w-full items-center justify-between my-8">
        {/* Main Category Icons and Title */}
        <div className="flex items-center justify-center">
          <Icon className="hidden lg:block" />
          <h2 className="text-white text-3xl lg:mr-5">{title}</h2>
        </div>
        {/* Skills Icons of the Main Category */}
        <div className="flex items-center">
          <div className="flex items-center justify-center flex-wrap lg:flex-nowrap">
            {iconsList}
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}
