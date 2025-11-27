import { useState } from "react";
import CarouselComponent from "./CarouselComponent";
import CardComponent from "./CardComponent";

export default function Home() {
  const [carouselLoaded, setCarouselLoaded] = useState(false);

  return (
    <div>
      <CarouselComponent onLoad={() => setCarouselLoaded(true)} />
      <CardComponent shouldLoad={carouselLoaded} />
    </div>
  );
}
