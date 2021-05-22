import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-400 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="https://user-images.githubusercontent.com/62456972/119230358-d0e8dc00-bae9-11eb-83b2-c7a2b6ec0b7a.jpg" alt="" srcset="" />
                </div>
                <div>
                    <img loading="lazy" src="https://user-images.githubusercontent.com/62456972/119232927-db5ca300-baf4-11eb-86d2-e21189171b70.jpg" alt="" srcset="" />
                </div>
                <div>
                    <img loading="lazy" src="https://user-images.githubusercontent.com/62456972/119230592-ed394880-baea-11eb-93f7-c88f6b6b6844.jpg" alt="" srcset="" />
                </div>

            </Carousel>
        </div>
    )
}

export default Banner
