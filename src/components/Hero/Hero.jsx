import { motion } from "framer-motion";
import Slider from "react-slick";
import { SlideRight } from "../../utility/animation";
import HeroImg from "../../assets/hero.png";
// import dev from "../../assets/hibanner.mp4";
import Web from "../../assets/Web.mp4"
const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const heroContent = [
    {
      id: 1,
      title: "IT Solutions",
      description:
        "Empowering businesses with seamless IT solutions for growth, security, and innovation.",
      image: HeroImg,
      path: "/services/web-development",
    },
    {
      id: 2,
      title: "Digital Marketing",
      description:
        "Driving growth through data-driven digital marketing strategies and innovative campaigns.",
      image: HeroImg,
      path: "/services/digital-marketing",
    },
    {
      id: 3,
      title: "Business Consulting",
      description:
        "Unlocking potential with expert business consulting for strategic growth and efficiency.",
      image: HeroImg,
      path: "/services/business-consulting",
    },
  ];

  return (
    <div className="w-full relative mt-[90px]">
      {/* Static Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Web}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay to Darken the Background Video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Slider Content */}
      <Slider {...settings} className="w-full relative z-10">
        {heroContent.map((slide) => (
          <div key={slide.id} className="w-full relative">
            {/* Main Content */}
            <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[800px] items-center">
              {/* Text Content */}
              <div className="flex flex-col justify-center py-10 md:pr-16 xl:pr-40 md:py-0">
                <div className="text-center md:text-left space-y-6">
                  <motion.p
                    variants={SlideRight(0.4)}
                    initial="hidden"
                    animate="visible"
                    className="text-red-500 uppercase font-semibold text-2xl"
                  >
                    Innovate Tech for a Digital Future..!
                  </motion.p>
                  <motion.h4
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl font-bold lg:text-8xl !leading-tight text-white whitespace-nowrap"
                  >
                    {slide.title}
                  </motion.h4>

                  <motion.p
                    variants={SlideRight(0.8)}
                    initial="hidden"
                    animate="visible"
                    className="text-white"
                  >
                    {slide.description}
                  </motion.p>
                  {/* Button Section */}
                  <motion.div
                    variants={SlideRight(1.0)}
                    initial="hidden"
                    animate="visible"
                    className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
                  >
                    <a href={slide.path}>
                      <button className="primary-btn bg-blue-800 text-white">
                        Get Started
                      </button>
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="flex justify-center items-center md:justify-end">
                {/* <motion.img
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  src={slide.image}
                  alt="Hero Slide"
                  className="w-[250px] md:w-[450px] xl:w-[550px] object-contain py-2"
                /> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
