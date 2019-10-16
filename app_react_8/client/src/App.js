import React, { Fragment } from "react";
import axios from "axios";

function App() {
  const [savedImage, setSavedImage] = React.useState(null);
  const [selectedImage, selectImage] = React.useState(null);
  const [isDisplayed, setDisplayed] = React.useState(false);

  const sendImage = () => {
    const formData = new FormData();
    formData.append("path", selectedImage);
    axios
      .post("/pictures", formData)
      .then(res => {
        setDisplayed(true);
        console.log(res.statusText);
      })
      .catch(err => console.log(err));
  };

  const handleChange = event => {
    selectImage(event.target.files[0]);
  };

  const showImage = () => {
    setSavedImage("/uploads/image1.jpeg");
  };

  return (
    <Fragment>
      <div>
        <input type="file" name="file" onChange={handleChange} />
        <button onClick={sendImage}>Send image</button>
      </div>
      {isDisplayed && (
        <div>
          <button onClick={showImage}>Show saved image</button>
          <img src={savedImage} alt="Saved image" />
        </div>
      )}
    </Fragment>
  );
}

export default App;
