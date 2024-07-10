import styles from "./styles/home.module.scss";
import projects from "./configs/projects.json";
import Slider from "./components/slider";
import SliderCard from "./components/sliderCard";

export default function Home() {
  return (
    <main className={styles.page}>
      <Slider
        elements={projects.map((project, index) => (
          <SliderCard
            key={index}
            title={project.name}
            banner={project.banner}
            logo={project.logo}
          />
        ))}
      />
    </main>
  );
}
