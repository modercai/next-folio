"use client";
import Image from "next/image";
import contactImage from "./assets/chat.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SiFlutter } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDjango } from "react-icons/si";
import { useState } from "react";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import { isContext } from "vm";

function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([])

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      console.log(`${name}`)

      const res = await fetch('api/contact',{
        method:"POST",
        headers: {
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          name,email,subject,message
        })
      })
      const {msg} = await res.json();
      setError(msg);
      console.log(error)
  };

  return (
    <>
      <div className="border-b-2 border-b-gray-100 border-dotted bg-red-300">
        <header className="pb-10">
          <h1 className="font-bold p-10 text-2xl">MyPortfolio</h1>
          <ul className="flex flex-row space-x-4 justify-center text-2xl text-white text">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </header>
      </div>

      {/* first section starts */}
      <div className="flex justify-between p-10 bg-red-300">
        {/* some text to the left  */}
        <div className="p-52 space-y-3">
          <h4 className="font-bold text-3xl text-white">I'm</h4>
          <h2 className="text-white text-6xl">Friday Malate</h2>
          <h3 className="text-white text-4xl">Nextjs Developer</h3>
          <div className="space-x-4">
            <button className="h-12 w-32 text-xl bg-white rounded-md text-red-500">
              Hire me
            </button>

            <button className="h-12 w-32 text-xl bg-white rounded-md text-red-500">
              Contact me
            </button>
          </div>
        </div>
        {/* my image to the right */}
        <div className="px-52">
          <Image
            src="/images/image.png"
            alt="myImage"
            width={500}
            height={500}
          />
        </div>
      </div>
      {/* first section ends */}

      {/* about section start */}
      <section id="about" className="">
        <div className="flex p-40 space-x-20">
          <Image src="" alt="Second-pic" />
          <div className="space-y-10">
            <div className="pt-20 text-xl">
              <h1 className="font-extrabold text-3xl border-b border-black">
                About Me
              </h1>
              <p className="pt-5">
                Hello! My name is Friday Malate Kamuli and I am passionate about
                Programming. I am a junior software developer based in lusaka
                Zambia.
              </p>
              <p>
                I have a strong background in the technologies listed below.
              </p>
              <p>
                This website is a platform where I share my thoughts,
                experiences, and expertise in software development.Feel free to
                explore my content and get in touch with me if you have any
                questions or opportunities for collaboration.
              </p>
              <p>Thank you for visiting!</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Javascript</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                <div
                  className="bg-red-200 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Python</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-red-200 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Git</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                <div
                  className="bg-red-200 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">NextJs</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                <div
                  className="bg-red-200 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Django</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                <div
                  className="bg-red-200 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about section end */}

      {/* experince section start */}
      <section id="about" className="">
        <div className="text-4xl font-extrabold pb-10 flex justify-center">
          <h1>Services | Offered</h1>
        </div>
        <div>
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              title="Woman holding a mug"
            ></div>

            <div className="flex justify-center space-x-40">
              <div className="border-r border-b border-l border-red-200 lg:border-l-0 lg:border-t lg:border-red-200 bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    <div className="flex">
                      <IoLogoAndroid className="h-40 w-40" />
                      <SiFlutter className="h-40 w-40" />
                    </div>
                    MOBILE APP DEVELOPMENT
                  </div>
                  <p className="text-gray-700 text-base">
                    I can develop mobile apps for both android and IOS using
                    flutter
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="text-md">
                    <p className="text-black font-bold border-b border-black space-y-5">
                      Technology stack
                    </p>
                    <p className="text-black">Flutter</p>
                    <p className="text-black">Native Android(Java)</p>
                  </div>
                </div>
              </div>
              <div className="border-r border-b border-l border-red-200 lg:border-l-0 lg:border-t lg:border-red-200 bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    <div className="flex">
                      <TbBrandNextjs className="h-40 w-40" />
                      <SiDjango className="h-40 w-40" />
                    </div>
                    WEB APP DEVELOPMENT
                  </div>
                  <p className="text-gray-700 text-base">
                    I can develop and deploy web apps in NextJS and Django
                    python
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="text-md">
                    <p className="text-black font-bold border-b border-black space-y-5">
                      Technology stack
                    </p>
                    <p className="text-black">NextJS</p>
                    <p className="text-black">Django</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* experince section end */}

      {/* resume section start */}
      <section id="about" className="">
        <div className="text-4xl font-extrabold pb-10 flex justify-center pt-20">
          <h1>My Resume</h1>
        </div>
      </section>
      {/* resume section end */}

      {/* contact section start */}
      <section id="contact" className="bg-gray-100">
        {/* add a map here for now an image will do */}
        <div className="flex">
          <Image src="" alt="contact-image" />
          <div className="flex flex-col-reverse">
            <form onSubmit={handleFormSubmit} className="flex flex-col">
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                placeholder=" name"
              />
              <label htmlFor="">email</label>
              <input type="email" onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email} placeholder=" email" />
              <label htmlFor="">Subject</label>
              <input type="text" onChange={(e) => {
                  setSubject(e.target.value);
                }}
                value={subject} placeholder=" subject" />
              <label htmlFor="">Message</label>
              <input type="text-area" onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message} placeholder=" message" />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      {/* contact section end */}

      {/* footer start */}
      <section>
        <div>
          <h3>The footer goes here</h3>
        </div>
      </section>
      {/* footer ends */}
    </>
  );
}
export default LandingPage;
