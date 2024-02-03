// src/components/Home.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Lottie from 'react-lottie';
import animationData from './Image/Animation - 1706696434653.json';
import { Wave, Random } from 'react-animated-text';
import './Homepage.css';
import image from "./Image/shape-dotted-light.svg";
import FAQ from "./FAQ/index"
import { Link } from 'react-router-dom';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

const Home = () => {
  const [flipped, setFlipped] = useState(null);
  const [paused, setPaused] = useState(false);

  const handleFlip = (index) => {
    setFlipped(index === flipped ? null : index);
  };
  return (
    <>
     <div>
      <Navbar />

      <div className='hero'>
        <div className="left-side">
          <div className="page-heading">
            <Wave text="Welcome to FusionI" />
          </div>
          <div className='tagline'>
            <h1>Your solution for intelligent automation</h1>
          </div>
        </div>
        <div className="right-side">
        <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
            }}
            height={500} 
            width={500}
          />
        </div>
      </div>

      <div className="heading-Home" >
        <h3>Our Services</h3>
      </div>
        <div className="ai-cards">
        <div className={`ai-card ${flipped === 0 ? 'flipped' : ''}`} onClick={() => handleFlip(0)}>
          <div className="ai-card-inner">
            <div className="ai-card-front">
            <img
                src="https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg"
                alt=""
                className="card-image"
              />
              <h2>Conversation</h2>
              <p>Click to see description</p>
              <Link to='/conversation'><button className="try-now-btn">Try Now</button> </Link>
            </div>
            <div className="ai-card-back">
              <p>
                Unlock the power of language with our NLP services. Conversational AI allows
                computers to understand, process, and respond to natural language input.
              </p>
            </div>
          </div>
        </div>
        <div className={`ai-card ${flipped === 1 ? 'flipped' : ''}`} onClick={() => handleFlip(1)}>
          <div className="ai-card-inner">
            <div className="ai-card-front">
            <img
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="card-image"
              />
              <h2>Code Generator</h2>
              <p>Click to see description</p>
              <Link to='/codegen'><button className="try-now-btn">Try Now</button> </Link>
            </div>
            <div className="ai-card-back">
              <p>
                Generate code effortlessly with our advanced Code Generator. Boost your
                development workflow and save time.
              </p>
            </div>
          </div>
        </div>

        <div className={`ai-card ${flipped === 2 ? 'flipped' : ''}`} onClick={() => handleFlip(2)}>
          <div className="ai-card-inner">
            <div className="ai-card-front">
            <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="card-image"
              />
              <h2>Image Generator</h2>
              <p>Click to see description</p>
              <Link to='/image'><button className="try-now-btn">Try Now</button> </Link>
            </div>
            <div className="ai-card-back">
              <p>
                Create stunning images with our Image Generator powered by advanced AI algorithms.
                Unleash your creativity and design unique visuals.
              </p>
            </div>
          </div>
        </div>

        <div className={`ai-card ${flipped === 3 ? 'flipped' : ''}`} onClick={() => handleFlip(3)}>
          <div className="ai-card-inner">
            <div className="ai-card-front">
            <img
                src="https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="card-image"
              />
              <h2>Music Generator</h2>
              <p>Click to see description</p>
              <Link to='/music'><button className="try-now-btn">Try Now</button> </Link>
            </div>
            <div className="ai-card-back">
              <p>
                Explore AI-generated music and composition with our Song Generator. Enhance your
                creativity in songwriting and composition.
              </p>
            </div>
          </div>
        </div>

        <div className={`ai-card ${flipped === 4 ? 'flipped' : ''}`} onClick={() => handleFlip(4)}>
          <div className="ai-card-inner">
            <div className="ai-card-front">
            <img
                src="https://images.pexels.com/photos/64057/pexels-photo-64057.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="card-image"
              />
              <h2>Text to Speech Converter</h2>
              <p>Click to see description</p>
              <Link to='/txtspeech'><button className="try-now-btn">Try Now</button> </Link>
              
            </div>
            <div className="ai-card-back">
              <p>
                Automate video creation with our Video Generator. Transform ideas into engaging
                visual content with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="heading-Home" >
        <h3>Our Plans</h3>
      </div>     
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center"></div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1280px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <img fill src={image} alt="Dotted" />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border  bg-white p-7.5 shadow-solid-10 border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
            <div className="absolute -right-12 top-19 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                Student Discount 30%
              </div>
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              ₹199{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  / year
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Basic Plan
              </h4>
              <p>Essential features for a powerful learning experience at ₹199/year.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Unlimited Access to Core Content
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Affordable Price, Premium Learning Experience
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Basic Customer Support Included
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Yearly Updates for Continuous Learning
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-white transition-all duration-300 dark:text-white dark:hover:text-primary"
                src='https://rzp.io/l/RJbIhRzjS'
                
              >
                <a href="https://rzp.io/l/RJbIhRzjS" target='_blank'>
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                </a>
                
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border  bg-white p-7.5 shadow-solid-10 border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 mar">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              ₹499{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  / year
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Master Plan
              </h4>
              <p>Enhanced features for optimal learning at ₹499/year.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Exclusive Access to Premium Content
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Priority Support for Swift Assistance
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Interactive Learning for Engaged Experience
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Enhanced Features for Optimal Learning
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-white transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <a href="https://rzp.io/l/rcha1jARo6" target='_blank'>
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                </a>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border  bg-white p-7.5 shadow-solid-10 border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              ₹799{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  / year
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Premium plan
              </h4>
              <p>Premium offerings for advanced learning at ₹799/year.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Unlock Premium Courses and Resources
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    24/7 VIP Support for Assistance
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Personalized Learning Path and Recommendations
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Top-Tier Features for Advanced Learning
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-white transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <a href="https://rzp.io/l/NJvspc5MNZ" target='_blank'>
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                </a>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
      <FAQ/>
        <Footer/>   
    </div>

    </>
  );
};

export default Home;
