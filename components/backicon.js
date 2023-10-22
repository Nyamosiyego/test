import Link from 'next/link';
import React from 'react'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Back = () => {
  return (
    <div>
        <Link href="/account">
          <h3
            style={{
              fontSize: "2em",
              color: "#000", // Set the default color
              transition: "color 0.3s ease",
              cursor: "pointer"
            }}
            onMouseOver={(e) => (e.target.style.color = "#888")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            <BsFillArrowLeftCircleFill />
          </h3>
        </Link>
    </div>
  )
}

export default Back