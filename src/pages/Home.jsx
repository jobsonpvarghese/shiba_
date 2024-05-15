import React from "react"
import Navbar from "../components/Navbar/Navbar"
import { Button } from "@mui/material"

function Home() {
  return (
    <div>
      <div className="landing">
        <Navbar />
        <div className="title">
          <h1>Welcome to Shiba</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam velit earum blanditiis at et temporibus eum ab, dicta qui esse illo,
            mollitia commodi ad sapiente maxime! Dolor, maxime vero. Eos? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore iusto
            placeat maiores at eum exercitationem ullam possimus non assumenda. Incidunt, praesentium. Obcaecati voluptatibus tenetur ad corrupti odio
            rem tempora laborum?
          </p>
          <Button variant="contained">How to Buy</Button> &nbsp;
          <Button variant="outlined">About us</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
