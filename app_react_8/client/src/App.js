import React, { Fragment } from "react";
import axios from "axios";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  dark_primary: "#5D4037",
  light_primary: "#D7CCC8",
  primary: "#795548",
  text: "#FFFFFF",
  accent: "#FFC107",
  bg_main: "#FAFAFA",
  bg_container: "#d6d6d6"
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    min-height: 100vh;
    line-height: 1.5;
    margin: 0;
    background-color: ${props => props.theme.bg_main};
  }
  h1, h2, h3, h4 {
    font-family: 'Modak', cursive;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  #root {
    min-height: 100vh;
  }
`;

const StyledHeader = styled.div`
  height: 90px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.primary};
  .status-bar {
    height: 12px;
    background-color: ${props => props.theme.dark_primary};
  }
  h1 {
    text-align: center;
    font-weight: 200;
    margin: 0;
    padding: 1rem 0;
  }
`;

const StyledContainer = styled.div`
  width: 80%;
  height: calc(100vh - 92px);
  margin: 0 auto;
  background-color: ${props => props.theme.bg_container};
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
        <StyledContainer>
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
        </StyledContainer>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
