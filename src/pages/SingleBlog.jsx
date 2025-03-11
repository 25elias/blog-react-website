import React from "react";
import { FaClock, FaUser } from "react-icons/fa6";
import { useLoaderData } from "react-router";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    image,
    title,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  // console.log(data);

  
  return (
    <div>
      {/* header section */}
      <div className="bg-black text-white px-8 py-32 m-auto text-center">
        <h1 className="text-5xl lg:text-7xl leading-[1.5] font-semibold py-8">
          Single Blog Page
        </h1>
      </div>

      {/* single blog section */}
      <div className="max-w-7xl px-8 lg:px-12 py-8  mx-auto
      ">
        <div className="w-full">
          {/* image */}
          <div  className="w-full  h-[500px]">
            <img src={image} alt="" className="w-full" />
          </div>
          {/* blog content */}
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:justify-between">
            
            <div className="w-full">
                <h2 className="text-3xl mb-2 text-blue-500">{title}</h2>
                <p className="text-gray-900 mt-4 mb-2 mr-8 inline-flex items-base">
                  <FaUser className="w-4 h-4 mr-4" /> {author} | {published_date}
                </p>
                <p className="text-gray-900 mt-4 mb-2 inline-flex items-base">
                  <FaClock className="w-4 h-4 mr-4" /> {reading_time}
                </p>
                <p className="mb-2 text-gray-900 ">{content}</p>
                <div className="flex flex-col gap-4 mb-8 text-gray-900 text-justify text-wrap">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    voluptate exercitationem temporibus molestias ipsam quibusdam
                    facilis tempora hic facere omnis obcaecati et ipsa, modi
                    voluptatum sunt, iste alias fugiat dolore.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    voluptate exercitationem temporibus molestias ipsam quibusdam
                    facilis tempora hic facere omnis obcaecati et ipsa, modi
                    voluptatum sunt, iste alias fugiat dolore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    voluptate exercitationem temporibus molestias ipsam quibusdam
                    facilis tempora hic facere omnis obcaecati et ipsa, modi
                    voluptatum sunt, iste alias fugiat dolore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    voluptate exercitationem temporibus molestias ipsam quibusdam
                    facilis tempora hic facere omnis obcaecati et ipsa, modi
                    voluptatum sunt, iste alias fugiat dolore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    voluptate exercitationem temporibus molestias ipsam quibusdam
                    facilis tempora hic facere omnis obcaecati et ipsa, modi
                    voluptatum sunt, iste alias fugiat dolore.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    voluptate exercitationem temporibus molestias ipsam quibusdam
                    facilis tempora hic facere omnis obcaecati et ipsa, modi
                    voluptatum sunt, iste alias fugiat dolore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    voluptate exercitationem temporibus molestias ipsam quibusdam
                    facilis tempora hic facere omnis obcaecati et ipsa, modi
                    voluptatum sunt, iste alias fugiat dolore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    voluptate exercitationem temporibus molestias ipsam quibusdam
                    facilis tempora hic facere omnis obcaecati et ipsa, modi
                    voluptatum sunt, iste alias fugiat dolore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    voluptate exercitationem temporibus molestias ipsam quibusdam
                    facilis tempora hic facere omnis obcaecati et ipsa, modi
                    voluptatum sunt, iste alias fugiat dolore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    voluptate exercitationem temporibus molestias ipsam quibusdam
                    facilis tempora hic facere omnis obcaecati et ipsa, modi
                    voluptatum sunt, iste alias fugiat dolore.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    voluptate exercitationem temporibus molestias ipsam quibusdam
                    facilis tempora hic facere omnis obcaecati et ipsa, modi
                    voluptatum sunt, iste alias fugiat dolore.
                  </p>
                </div>

            </div>
            {/* Latest Blog */}
            <div className="md:w-1/3">
              <SideBar />
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default SingleBlog;
