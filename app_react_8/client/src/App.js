import React, { Fragment } from "react";
import axios from "axios";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  dark_primary: "#5D4037",
  light_primary: "#D7CCC8",
  primary: "#795548",
  text: "#FFFFFF",
  primary_text: "#212121",
  secondary_text: "#757575",
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
  box-shadow: 0px 3px 4px 1px rgba(181, 181, 181, 1);
  z-index: 10;
  .status-bar {
    height: 12px;
    background-color: ${props => props.theme.dark_primary};
  }
  h1 {
    text-align: center;
    font-weight: 200;
    text-shadow: 2px 2px ${props => props.theme.secondary_text};
    margin: 0;
    padding: 1rem 0;
  }
`;

const StyledContainer = styled.div`
  width: 80%;
  height: calc(100vh - 92px);
  margin: 0 auto;
  background-color: ${props => props.theme.bg_container};
  z-index: 1;
`;

const StyledControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;
`;

const StyledButton = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const StyledLabel = styled.label`
  font-size: 1.25rem;
  color: ${props => props.theme.secondary_text};
  padding: 0.6rem 0.8rem;
  border: none;
  background-color: ${props => props.theme.accent};
  cursor: pointer;
  ${StyledButton}:focus &,
  &:hover {
    color: ${props => props.theme.primary_text};
  }
  ${StyledButton}:focus & {
    outline: 1px dotted #000;
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
        <StyledContainer>
          <StyledControls>
            <StyledLabel htmlFor="file">Select an image</StyledLabel>
            <StyledButton
              type="file"
              id="file"
              name="file"
              onChange={handleChange}
            />
            <button onClick={sendImage}>Send image</button>
          </StyledControls>
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
