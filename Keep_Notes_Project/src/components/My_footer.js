import React from 'react'       //react arrow function components(rafc)

const My_footer = (props) => {
let footerStyle = {
  margin : '28vh 0 0 0' ,
  position :'relative',
  width : "99vw",
  color : "white",
  height : "15vh"
}
let li ={
  listStyle : "none",
}

  return (
    <div>
      <footer className={"bg-black text-center"}style={footerStyle}>
        <ul>
          <li style={li}> All Rights Reserved &C</li>
        </ul>
      </footer>
    </div>
  )
}

export default My_footer
