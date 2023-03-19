import React, {useState, useRef} from 'react'
import { QRCodeCanvas } from "qrcode.react";

const Qr = () => {
    const [url, setUrl] = useState("");

    const qrRef = useRef();
    const downloadQRCode = (e) => {
      e.preventDefault();
      let canvas = qrRef.current.querySelector("canvas");
      let image = canvas.toDataURL("image/png");
      let anchor = document.createElement("a");
      anchor.href = image;
      anchor.download = `qr-code.png`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      setUrl("");
    };
  
    const qrCodeEncoder = (e) => {
      setUrl(e.target.value);
    };

    const qrcode = (
        <QRCodeCanvas
          id="qrCode"
          value={url}
          size={350}
          bgColor={"#ffffff"}
          level={"H"}
        />
      );
  return (
    <div className="qrcode__container m-auto flex flex-col items-center w-screen">
      <div className='mb-8' ref={qrRef}>{qrcode}</div>
      <div className="input__group  flex flex-col">
        <form onSubmit={downloadQRCode}>
          <div className=' flex flex-col'>
          <label className=' text-xl font-thin'>Enter URL</label>
          <input
          className='h-16 w-80 rounded-lg px-4 border border-indigo-300 focus:outline-indigo-700 focus:bg-white text-xl font-thin'
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="https://yoururl.com"
          />
          </div>
          <button className='h-16 w-80 bg-indigo-500 rounded-lg text-white font-thin mt-8' type="submit" disabled={!url}>
            Download QR code
          </button>
        </form>
      </div>
      <a href="https://oputah-portfolio.netlify.app" target='_blank'><div className='flex flex-row justify-center items-center  items-center h-12 w-80 font-mono font-semibold  mt-8 text-indigo-500 text-sm animate-bounce border border-indigo-500'>
        Check out Developer's Portfolio >>
 
    

    </div> </a>
    </div>
  )
}

export default Qr