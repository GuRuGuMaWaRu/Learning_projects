import React, { Fragment } from "react";
import axios from "axios";

function App() {
  const [savedImage, setSavedImage] = React.useState(null);
  const [selectedImage, selectImage] = React.useState(null);

  const sendImage = () => {
    const formData = new FormData();
    formData.append("path", selectedImage);
    axios
      .post("/pictures", formData)
      .then(res => {
        console.log(res.statusText);
      })
      .catch(err => console.log(err));
  };

  const handleChange = event => {
    selectImage(event.target.files[0]);
  };

  return (
    <Fragment>
      <input type="file" name="file" onChange={handleChange} />
      <button onClick={sendImage}>Send image</button>
      <div>{savedImage && <img src={savedImage} />}</div>
    </Fragment>
  );
}

export default App;
