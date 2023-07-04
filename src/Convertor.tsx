import { useState } from "react";
import Heading from "./Heading";
import Explain from "./Explain";

function Convertor() {

    const [selectedImage, setSelectedImage] = useState(null);
  
    return (
      <>
        {!selectedImage && <Heading />}
        {selectedImage && (
          <div>
            <div className="images">
              <div>
                <h3>Original Image</h3>
                <img
                  alt="not found"
                  className="uploaded"
                  width={"512px"}
                  src={URL.createObjectURL(selectedImage)}
                />
              </div>
              <div>
                <h3>Compressed Image</h3>
                <img
                  alt="not found"
                  className="uploaded"
                  width={"512px"}
                  src={URL.createObjectURL(selectedImage)}
                />
              </div>
            </div>
            <br />
            <button className="delete" onClick={() => setSelectedImage(null)}>Remove</button>
            <br />
            <br />
            <label>Resulting Rank of the Image<sup>1</sup> </label>
            <input type="Number"></input>
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
        {selectedImage && <Explain />}
      </>
    );
  };
  
  export default Convertor;