import React, { Fragment } from "react";
import axios from "axios";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  dark_primary: "#5D4037",
  light_primary: "#D7CCC8",
  primary: "#795548",
  text: "#FFFFFF",
  bg_color: "#FAFAFA"
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${props => props.theme.bg_color};
  }
`;

const StyledHeader = styled.div`
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.primary};
  .status-bar {
    height: 12px;
    background-color: ${props => props.theme.dark_primary};
  }
  h1 {
    text-align: center;
    margin: 0;
    padding: 1rem 0;
  }
`;

const App = () => {
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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledHeader>
          <div className="status-bar"></div>
          <h1>Image Selector</h1>
        </StyledHeader>
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
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
