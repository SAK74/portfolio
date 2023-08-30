import { ProjectCard } from "components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper";
import { projects } from "data/projects";
import { useSound } from "use-sound";
import slideSound from "assets/sounds/slide.wav";
import "./projects.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRootCtx } from "components/RootProvider";

export const Projects = () => {
  const { onSound } = useRootCtx();
  const [play] = useSound(slideSound, { volume: 0.5 });
  return (
    <>
      <Swiper
        style={{ width: "80%" }}
        spaceBetween={20}
        onSlideChange={() => {
          if (onSound) {
            play();
          }
        }}
        modules={[Navigation, Pagination, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{ 600: { slidesPerView: 2 }, 900: { slidesPerView: 3 } }}
        grabCursor
        // loop
        keyboard
      >
        {projects.map((project) => (
          <SwiperSlide key={project.name}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
