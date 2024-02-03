import React, { useState } from "react";
import "./ImageAi.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Lottie from "react-lottie";
import animationData from "./Image/Animation - 1706707120703.json";
import { Link } from "react-router-dom";
const ImageAi = () => {
  const [numImages, setNumImages] = useState(1);
  const [textDescription, setTextDescription] = useState("");
  const [generatedImage, setGeneratedImage] = useState(["https://i.pinimg.com/564x/7a/01/06/7a0106c3ab68dcd2d2ad8b8d27096ed0.jpg"]);
  const [loading, setLoading] = useState(false);
 
  const generateImage = async () => {
    setLoading(true);
    const apiUrl = "https://api.openai.com/v1/images/generations";
    const numberOfImages = numImages; // Capture the current value of numImages
  
    try {
      const responses = await Promise.all(
        Array.from({ length: numberOfImages }, async (_, index) => {
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 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",
            },
            body: JSON.stringify({
              prompt: textDescription,
              n: 1,
              size: "1024x1024",
            }),
          });
  
          if (!response.ok) {
            throw new Error(`Failed to generate image ${index + 1}`);
          }
  
          const imageData = await response.json();
          console.log(imageData)
          return imageData.data[0].url;
        })
      );
  
      setGeneratedImage(responses);
  
      setTimeout(() => {
        setTextDescription("");
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error generating images:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="ImgGenBody">
        <div className="backgroundImage">
          {loading ? (
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
              }}
              height="80vh"
              width="80vw"
            />
          ) : (
            generatedImage.map((imageUrl, index) => (
              <img key={index} src={imageUrl} height={480} width={450} alt="" />
            ))
          )}
        </div>
        <div className="imgInput">
          <h1>Generate Image Fusion as you wish</h1>
          <div className="outerdiv">
            <div className="inputContainerImg">
              <label htmlFor="numImages" className="imageGenPrompt">
                Number of Images:
              </label>
              {/* <input
                type="number"
                id="numImages"
                className="inputSectionOfImage"
                value={numImages}
                onChange={(e) => setNumImages(e.target.value)}
                min={1}
                max={5}
              /> */}
            </div>

            <div className="inputContainerImg">
              <label htmlFor="description" className="imageGenPrompt">
                Enter Your Image Prompt Here:
              </label>
              <input
                type="text"
                id="description"
                className="inputSectionOfImage"
                value={textDescription}
                onChange={(e) => setTextDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="imgBtnGen">
            <button onClick={generateImage} className="button">
              Generate Image
            </button>
          </div>

          <div className="anything_else_img">
          <label className="anything_label">Wanna Anything else?</label>
        <Link to='/image' className='anything_button'><button>Generate Image</button></Link>
        <Link to='/codegen' className='anything_button'><button>Generate Code</button></Link>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImageAi;
