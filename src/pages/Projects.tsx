// import { Paper } from "@mui/material";
import { ProjectCard } from "components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { projects } from "projects";
import { useSound } from "use-sound";
import slideSound from "assets/slide.wav";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Projects = () => {
  const [play] = useSound(slideSound, { volume: 0.5 });
  return (
    <>
      <Swiper
        style={{ width: "50%" }}
        slidesPerView={2}
        spaceBetween={20}
        onSlideChange={() => {
          play();
        }}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        // breakpoints={{ 900: { slidesPerView: 3 } }} // example
        grabCursor
        loop
      >
        {projects.map((project) => (
          <SwiperSlide key={project.name}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))} */}
    </>
  );
};
