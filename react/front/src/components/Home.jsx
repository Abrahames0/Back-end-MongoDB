import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
