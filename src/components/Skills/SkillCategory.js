// React Animate On Scroll Imports
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";



export default function SkillSection({ icons, title, Icon }) {

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" offset={150}>
      <div className="flex flex-col lg:flex-row w-full items-center justify-between lg:my-8">
        <div className="flex items-center justify-center">
          <Icon className="hidden lg:block" />
          <h2 className="text-white text-3xl">{title}</h2>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center flex-wrap lg:flex-nowrap">
            {icons.map(({ Icon, name }, i) => (
              <div className="flex flex-col items-center justify-center mx-1" key={i}>
                <Icon />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}