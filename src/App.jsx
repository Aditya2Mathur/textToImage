import { useState } from 'react';
import './App.css'
// import horse from '../public/image.jpeg'
import example1 from '../public/image (1).webp'
import example2 from '../public/image (2).jpeg'
import example3 from '../public/image (3).jpeg'
import example4 from '../public/image (5).jpeg'
import example5 from '../public/image (6).jpeg'
import example6 from '../public/image (7).jpeg'
function App() {

  const [imageSrc, setImageSrc] = useState(null);
  const [input, setinput] = useState("Ram Mandir Temple");
  const [loading, setloading] = useState(false);

  const query = async (data) => {
    try {
      console.log("Fetching...");
      setloading(true);
      const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
          headers: { Authorization: "Bearer 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" },
          method: "POST",
          body: JSON.stringify(data),
        }
      );


      console.log("Got the res");
      setloading(false);
      const result = await response.blob();
      const imageUrl = URL.createObjectURL(result);
      setImageSrc(imageUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleButtonClick = () => {
    query({ "inputs": input });
  };

  const handleSaveButtonClick = () => {
    // Implement logic to save the image, for example:
    const a = document.createElement('a');
    a.href = imageSrc;
    a.download = 'image.jpg';
    a.click();
  };


  return (
    <>


      <nav className="bg-transparent ">
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
          <a className='text-white' href="http://www.instagram.com/code_assaulter" target='_blank' rel="noreferrer">

           <h1> <span className="self-center text-xl text-center font-semibold whitespace-nowrap">College Project by </span> Abhishek Kumar </h1>
          </a>
          
        </div>
      </nav>

      <div className='flex flex-col gap-1 lg:pt-0 pt-12'>
        <h3 className='lg:text-lg md:text-xl text-sm'>Text to Image <span className='text-pink-50 0'>Reality</span></h3>
        <br />
        <div className='flex flex-row justify-center items-center gap-2'>

          <input className='p-3 rounded' value={input} onChange={(e) => { setinput(e.target.value) }} type="text" name="" id="" />
          <button className='flex flex-row gap-1 border-2 border-orange-400' onClick={handleButtonClick}>Imagine <span><img src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_darkmode_2bdb7df2724e450073ede.gif" className='h-6' alt="" srcSet="" /></span></button>
        </div>
        {
          loading && (
            <div className='flex items-center justify-center my-10'>
              <div className="relative">
                <div className="h-16 w-16 rounded-full border-t-8 border-b-8 border-black"></div>
                <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8 border-orange-500 animate-spin">
                </div>
              </div>
            </div>
          )
        }
        {imageSrc && (
          <div className='flex flex-col justify-center items-center p-5 sm:pt-5'>
            <img className='h-72 hover:scale-105 duration-300 rounded shadow-xl shadow-slate-800 drop-shadow-lg' src={imageSrc} alt="Fetched Image" />
            <button className='m-5 z-10 ease-in border-2 border-pink-600' onClick={handleSaveButtonClick}>Save Image</button>
          </div>
        )}


      </div>



      <h1 className='text-2xl mt-12'>Images Generated using Stability AI</h1>
      <div className="lg:p-20 lg:pt-6 lg:px-56 p-8 pt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg shadow-xl shadow-slate-800 hover:scale-105 duration-300" src={example1} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg shadow-xl shadow-slate-800 hover:scale-105 duration-300" src={example2} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg shadow-xl shadow-slate-800 hover:scale-105 duration-300" src={example3} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg shadow-xl shadow-slate-800 hover:scale-105 duration-300" src={example4} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg shadow-xl shadow-slate-800 hover:scale-105 duration-300" src={example6} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg shadow-xl shadow-slate-800 hover:scale-105 duration-300" src={example5} alt="" />
        </div>

      </div>

    </>
  )
}

export default App
