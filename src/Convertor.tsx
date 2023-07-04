import { useState } from "react";
import { image_compression } from "./svd_comp/compress";

function Convertor() {

    const [selectedImage, setSelectedImage] = useState(null);
  
    return (
      <>
        {selectedImage && (
          <div>
            <div className="images">
              <img
                alt="not found"
                className="uploaded"
                width={"512px"}
                src={URL.createObjectURL(selectedImage)}
              />
              <img
                alt="not found"
                className="compressed"
                width={"512px"}
                src={image_compression(URL.createObjectURL(selectedImage))}
                id="new_image"
              />
              </div>
            <br />
            <button className="delete" onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
  
        <br />
        <br />
        
        <input
          className="choose"
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </>
    );
  };
  
  export default Convertor;