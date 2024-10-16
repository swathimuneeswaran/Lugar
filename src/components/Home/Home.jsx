import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import NumberCounter from "../NumberCounter/NumberCounter";
import SubjectCard from "../SubjectCard/SubjectCard";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Img2 from "../../assets/banner2.png";
import BannerImage from '../../assets/Banner.png';


const BannerData = {
  image: BannerImage,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "WEDSITE-DEVELOPMENT",
  subtitle:
    "At Luger Prime, we believe that a website should be a powerful tool that moves your business forward, rather than just a beautiful one. Our team specialised in designing one-of-a-kind websites that run smoothly and captivate your audience. We can assist you if you require a rapid, secure platform for displaying your brand or a stunning, responsive website that works on all devices. In addition to creating visually beautiful websites, we optimise them for search engines, increasing your website's ranking and visits. Want to sell a product online? Store management is simple and secure thanks to our scalable e-commerce systems. We are ready to make your vision a reality, whether you are launching a new brand or revamping an existing website. Let us work together.",
  link: "#",
};

const BannerData2 = {
  image: 'https://img.freepik.com/free-vector/user-interface-development-isometric-concept-with-young-woman-creating-custom-design-mobile-application-vector-illustration_1284-72341.jpg?t=st=1729056866~exp=1729060466~hmac=e1a586f0de8ee36206fc0c329559af5fd3e013d8e4c15592698a3f265c4a42ba&w=740',
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "MOBILE APP DEVELOPMENT",
  subtitle:"Our main focus at developing unique mobile apps that improve user experiences and propel business growth. Our skilled developers are here to make your ideas a reality, whether your goal is to increase consumer interaction, create a new revenue stream, or streamline your business processes. With an emphasis on usability and maximum reach, we design apps for both the iOS and Android platforms. Our strategy focuses on creating seamless functionality with intuitive, user-friendly interfaces to provide a mobile experience that keeps customers coming back. Every software we develop is scalable, secure, and performance-optimized to ensure that it can expand with your company. We provide customized mobile apps that support your business objectives, ranging from easy-to-use apps to sophisticated, enterprise-level solutions.",
  link: "#",
};
const BannerData3 = {
  image:'https://img.freepik.com/free-vector/gradient-website-hosting-illustration_23-2149247164.jpg?t=st=1729057010~exp=1729060610~hmac=9a809a267138ab983767799ac6986a58cf65befed4f88a6fe8721cc6e395fde9&w=740',
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "WEB HOSTING",
  subtitle:"Moreover, you can simply increase your hosting as your website grows thanks to our flexible options. Managing your website is made easy with our intuitive control panel, and our committed support team is always here to help with any technical problems or questions you may have. We are dedicated to providing web hosting services that boost your online success and provide you peace of mind. Our goal is to guarantee a seamless and trouble-free hosting experience, regardless of whether you're embarking on a brand-new project or hoping to relocate your current website.",
  link: "#",
};
const BannerData4 = {
  image:'https://img.freepik.com/free-vector/digital-transformation-concept-illustration_114360-8589.jpg?t=st=1729057180~exp=1729060780~hmac=5ccc49cbd6cb6ac863a3aecf9a51c21151d10c694daf0cf3b6ba723e00ba6df9&w=740',
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Digital Transformation",
  subtitle:"In today’s rapidly evolving business landscape, digital transformation is crucial for organizations seeking to maintain a competitive edge and drive growth. At LugarPrime, we specialize in guiding businesses through this transformative journey, enabling them to harness technology to enhance operational efficiency, improve customer experiences, and foster innovation. Our comprehensive approach begins with a thorough assessment of your current processes and technology landscape, identifying opportunities for improvement and innovation. We help implement advanced technologies such as cloud computing, artificial intelligence, and data analytics to streamline operations and empower decision-making.",
  link: "#",
};

const Home = () => {
  return (
    <div>
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <Banner {...BannerData3}  />
      <Banner {...BannerData4} reverse={true} />
      <SubjectCard />
      {/* <ContactUsCard /> */}
    </div>
  );
};

export default Home;
