import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Steve Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Kristen",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Ariana",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
];

const Testimonial = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <div className="py-14 mb-10">
    //   <div className="container">
    //     {/* header section */}
    //     <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
    //       <h1 className="uppercase font-semibold text-orange-600">
    //         OUR TESTIMONIALS
    //       </h1>
    //       <p className="font-semibold text-3xl ">
    //         What Our CLient`s Say About Us
    //       </p>
    //     </div>
    //     {/* Testimonial cards section */}
    //     <div>
    //       <Slider {...setting}>
    //         {TestimonialsData.map((item) => {
    //           return (
    //             <div key={item.id}>
    //               <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
    //                 {/* upper section */}
    //                 <div className="flex justify-start items-center gap-5">
    //                   <img
    //                     src={item.img}
    //                     alt=""
    //                     className="w-16 h-16 rounded-full"
    //                   />
    //                   <div>
    //                     <p className="text-xl font-bold text-black/80">
    //                       {item.name}
    //                     </p>
    //                     <p>{item.name}</p>
    //                   </div>
    //                 </div>
    //                 {/* bottom section */}
    //                 <div className="py-6 space-y-4">
    //                   <p className="text-sm text-gray-500">{item.text}</p>
    //                   <p>⭐⭐⭐⭐⭐</p>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </Slider>
    //     </div>
    //   </div>
    // </div>
    <div>
      <section className="block">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Heading */}
        <h2 className="mx-auto mb-8 max-w-3xl text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
          What our clients are saying
        </h2>
        {/* Contents */}
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-8">
          {/* Content 1 */}
          <div className="grid grid-cols-1 gap-6 rounded-md border border-solid border-gray-300 bg-white p-8 md:p-10">
            <div className="flex">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
            </div>
            <div className="text-gray-500">
              “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </div>
            <div className="flex flex-row items-start">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
              />
              <div className="flex flex-col items-start">
                <h6 className="text-base font-bold">Laila Bahar</h6>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
          {/* Content 2 */}
          <div className="grid grid-cols-1 gap-6 rounded-md border border-solid border-gray-300 bg-white p-8 md:p-10">
            <div className="flex">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
            </div>
            <div className="text-gray-500">
              “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </div>
            <div className="flex flex-row items-start">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
              />
              <div className="flex flex-col items-start">
                <h6 className="text-base font-bold">Laila Bahar</h6>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
          {/* Content 3 */}
          <div className="grid grid-cols-1 gap-6 rounded-md border border-solid border-gray-300 bg-white p-8 md:p-10">
            <div className="flex">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
            </div>
            <div className="text-gray-500">
              “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </div>
            <div className="flex flex-row items-start">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
              />
              <div className="flex flex-col items-start">
                <h6 className="text-base font-bold">Laila Bahar</h6>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
        </div>
        {/* Text Button */}
        <div className="flex flex-col">
          <a href="#" className="mx-auto font-bold text-black">
            Check all reviews
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Testimonial;
