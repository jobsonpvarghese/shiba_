import React from "react"
import one from "../../images/patner/1.png"
import two from "../../images/patner/2.png"
import three from "../../images/patner/3.png"
import four from "../../images/patner/4.jpg"
import five from "../../images/patner/5.png"
import six from "../../images/patner/6.png"
import seven from "../../images/patner/7.png"
import eight from "../../images/patner/8.png"
import nine from "../../images/patner/9.jpg"
import ten from "../../images/patner/10.png"
import eleven from "../../images/patner/11.png"

import "./partner.css"

const Partner = () => {
  const data = [one, two, three, four, five, six, seven, eight, nine, ten, eleven]
  return (
    <div className="pt_container">
      {data.map((item, i) => (
        <img className="pt_icon" src={item} alt={item} id={item} />
      ))}
    </div>
  )
}

export default Partner
