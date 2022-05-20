import logo from "./logo.svg";
import "./App.css";
import { LIST_PRODUCT } from "./constants";
import { useEffect, useState } from "react";
import { Rating } from "./components/Rating";
import { Typography } from "@mui/material";

function App() {
  const [content, setContent] = useState();

  useEffect(() => {
    const idProduct = new URL(window.location.href).searchParams.get("id");
    setContent(LIST_PRODUCT.find((i) => i.id === idProduct) || null);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {content === null && <p>ไม่พบข้อมูล</p>}
        {content && (
          <>
            <p>{content.title}</p>
            <Typography>Rating</Typography>
            <Rating onClick={(value) => console.log("Rating", value)} />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
