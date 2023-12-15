"use client";
import Image from "next/image";
import { SiFlutter } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDjango } from "react-icons/si";
import { useRef, useState } from "react";
import Typewriter from "typewriter-effect";

function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${name}`);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });
    const { msg } = await res.json();
    setError(msg);
  };

  return (
    <>
      <div className="border-b-gray-100  bg-gray-200 sticky top-0 z-50 shadow-md">
        <header className="pb-10">
          <h1 className="font-bold p-10 text-2xl">MyPortfolio</h1>
          <ul className="flex flex-row space-x-4 justify-center text-2xl text-black text">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </header>
      </div>

      {/* first section starts */}
      <div className="flex justify-between p-10 bg-gray-200">
        {/* some text to the left  */}
        <div className="p-52 space-y-3 text-black">
          <h4 className="font-bold text-3xl ">Im</h4>
          <h2 className="e text-6xl">Friday Malate</h2>
          <div className="text-3xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Flutter Developer!")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Kotlin Developer!")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Django Developer!")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Nextjs Developer!")
                .start();
            }}
            options={{
              strings: [
                "Flutter Developer!",
                "Kotlin Developer!",
                "Nextjs Developer!",
                "Django Developer!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          </div>
         
          <div className="space-x-4">
            <button className="h-12 w-32 text-xl bg-white rounded-md text-black">
              Hire me
            </button>
          </div>
        </div>
        {/* my image to the right */}
        <div className="px-52">
          <Image
            src="/images/grad.png"
            alt="myImage"
            width={400}
            height={400}
          />
        </div>
      </div>
      {/* first section ends */}

      {/* about section start */}
      <section id="about" className="">
        <div className="flex p-40 space-x-20 bg-gray-100">
          <Image
            src="/images/grad.png"
            alt="myImage"
            width={400}
            height={400}
          />
          <div className="space-y-10">
            <div className="pt-20 text-xl">
              <h1 className="font-extrabold text-3xl border-b border-black">
                About Me
              </h1>
              <p>
                Hello! My name is Friday Malate Kamuli and I am passionate about
                Programming.
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
      <section id="service" className="">
        <div className="text-4xl font-extrabold pb-10 flex justify-center bg-gray-100">
          <h1>Services Offered</h1>
        </div>
        <div className="bg-gray-100">
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
      <section id="resume" className=" bg-gray-100 pt-20 pb-20">
        <div className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-8">
              Working Experience
            </h2>
            <div className="space-y-8">
              <div className="flex items-center justify-between space-x-5">
                <div className="w-1/2 relative">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-gray-600 mb-2">2023 - Date</div>
                    <h2 className="text-xl font-semibold mb-2">
                      Software Developer
                    </h2>
                    <h4 className="text-gray-500 mb-2">
                      BookNowZambia, Lusaka, Zambia
                    </h4>
                    <p className="text-gray-700">
                      Ive worked for booknowzambia as an intern software
                      developer
                    </p>
                  </div>
                  <div className="absolute h-full w-1 bg-gray-300 top-6 left-0"></div>
                </div>
                <div className="w-1/2 relative">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-gray-600 mb-2">2022 - 2023</div>
                    <h2 className="text-xl font-semibold mb-2">IT Support</h2>
                    <h4 className="text-gray-500 mb-2">
                      Lusaka Water, Lusaka, Zambia
                    </h4>
                    <p className="text-gray-700">
                      Ive worked for lusaka water and sewerage company as a IT
                      assistant personale.
                    </p>
                  </div>
                  <div className="absolute h-full w-1 bg-gray-300 top-6 right-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* resume section end */}

      {/* contact section start */}
      <section id="contact" className="bg-gray-100">
        <div className="text-4xl font-extrabold pb-10 flex justify-center pt-20">
          <h1>Contact Me</h1>
        </div>
        {/* add a map here for now an image will do */}
        <div className="flex justify-evenly">
          <Image
            src="/images/mail.png"
            height={50}
            width={300}
            alt="contact-image"
            className="pb-5"
          />
          <div className="flex space-x-10 ">
            <form onSubmit={handleFormSubmit} className="flex flex-col">
              <div className="big-slate-100 ">
                {error &&
                  error.map((e, index) => (
                    <div key={index} className="text-red-600">
                      {e}
                    </div>
                  ))}
              </div>
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                placeholder=" name"
                className="p-2 rounded-md"
              />
              <label htmlFor="">email</label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder=" email"
                className="p-2 rounded-md"
              />
              <label htmlFor="">Subject</label>
              <input
                type="text"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                value={subject}
                placeholder=" subject"
                className="p-2 rounded-md"
              />
              <label htmlFor="">Message</label>
              <input
                type="text-area"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
                placeholder=" message"
                className="p-2 rounded-md"
              />
              <div className="p-5 h-100 w-100">
                <button
                  type="submit"
                  className="text-white bg-red-200 rounded-sm p-5 shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* contact section end */}

      {/* footer start */}
      <section className="bg-gray-200 pt-20">
        <div className="p-10 flex justify-center">
          <div className="container-fluid">
            <div className="container">
              <div className="footer-info">
                <h2>Friday Kamuli Malate</h2>
                <h3>Makeni, Lusaka, Zambia</h3>
                <div className="footer-menu">
                  <p>+260 0972194844</p>
                  <p>malatefriday12@gmail.com</p>
                </div>
                <div className="">
                  <a href="">
                    <i className=""></i>
                  </a>
                  <a href="">
                    <i className=""></i>
                  </a>
                  <a href="">
                    <i className=""></i>
                  </a>
                  <a href="">
                    <i className=""></i>
                  </a>
                  <a href="">
                    <i className=""></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="container copyright">
              <p>
                &copy; <a href="#">Developer portfolio</a>, All Right Reserved |{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* footer ends */}
    </>
  );
}
export default LandingPage;
