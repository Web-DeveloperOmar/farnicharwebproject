// import React from 'react'
import '../css/shopingCard.css'
import SquareIcon from "../assets/SquareIcon.svg"
import SquareIcon2 from "../assets/SquareIcon2.svg"
import SquareIcon3 from "../assets/SquareIcon3.svg"
import SquareIcon4 from "../assets/SquareIcon4.svg"

export const ShopingCard = () => {
  return (
    <div className="shopingCardContainer">
      <div className="title">
        <h1>SHOPING CART</h1>
        <h6>THIS IS YOUR CART BASED ON WHAT YOU WANTED TO BY</h6>
      </div>

      <div className="process">
        <div className="dot"></div>
        <div className="processing"></div>
        <div className="base"></div>
      </div>

      <div className="process-nav">
        <div className="step">
          <a href="">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="#2F302C" />
              <path
                d="M32 27V23C32 21.9391 31.5786 20.9217 30.8284 20.1716C30.0783 19.4214 29.0609 19 28 19C26.9391 19 25.9217 19.4214 25.1716 20.1716C24.4214 20.9217 24 21.9391 24 23V27M21 25H35L36 37H20L21 25Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {/* <img src={SquareIcon} alt="squareIcone" /> */}
            <h4 className="titleh4">CART</h4>
            <p className="dec">
              Review all your product <br /> and edit the number.
            </p>
          </a>
        </div>
        {/* --------------end--  */}

        <div className="step">
          <a href="">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="#F6F6F6" />
              <path
                d="M21.121 33.804C23.2194 32.6179 25.5896 31.9963 28 32C30.5 32 32.847 32.655 34.879 33.804M31 26C31 26.7956 30.6839 27.5587 30.1213 28.1213C29.5587 28.6839 28.7956 29 28 29C27.2044 29 26.4413 28.6839 25.8787 28.1213C25.3161 27.5587 25 26.7956 25 26C25 25.2044 25.3161 24.4413 25.8787 23.8787C26.4413 23.3161 27.2044 23 28 23C28.7956 23 29.5587 23.3161 30.1213 23.8787C30.6839 24.4413 31 25.2044 31 26ZM37 28C37 29.1819 36.7672 30.3522 36.3149 31.4442C35.8626 32.5361 35.1997 33.5282 34.364 34.364C33.5282 35.1997 32.5361 35.8626 31.4442 36.3149C30.3522 36.7672 29.1819 37 28 37C26.8181 37 25.6478 36.7672 24.5558 36.3149C23.4639 35.8626 22.4718 35.1997 21.636 34.364C20.8003 33.5282 20.1374 32.5361 19.6851 31.4442C19.2328 30.3522 19 29.1819 19 28C19 25.6131 19.9482 23.3239 21.636 21.636C23.3239 19.9482 25.6131 19 28 19C30.3869 19 32.6761 19.9482 34.364 21.636C36.0518 23.3239 37 25.6131 37 28Z"
                stroke="#2F302C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {/* <img src={SquareIcon2} alt="squareIcone" /> */}
            <h4 className="titleh4">CUSTOMER INFORMATION</h4>
            <p className="dec">
              Add your name, phone <br />
              number and address.
            </p>
          </a>
        </div>

        {/* --------------end--  */}
        <div className="step">
          <a href="">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="#F6F6F6" />
              <path
                d="M19 26H37M23 31H24M28 31H29M22 35H34C34.7956 35 35.5587 34.6839 36.1213 34.1213C36.6839 33.5587 37 32.7956 37 32V24C37 23.2044 36.6839 22.4413 36.1213 21.8787C35.5587 21.3161 34.7956 21 34 21H22C21.2044 21 20.4413 21.3161 19.8787 21.8787C19.3161 22.4413 19 23.2044 19 24V32C19 32.7956 19.3161 33.5587 19.8787 34.1213C20.4413 34.6839 21.2044 35 22 35Z"
                stroke="#2F302C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {/* <img src={SquareIcon3} alt="squareIcone" /> */}
            <h4 className="titleh4">SHIPPING & PAYMENT</h4>
            <p className="dec">
              With many payment <br /> method, included yours.
            </p>
          </a>
        </div>
        {/* --------------end--  */}
        <div className="step">
          <a href="">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="#F6F6F6" />
              <path
                d="M30.1213 30.1213C30.6839 29.5587 31 28.7956 31 28C31 27.2044 30.6839 26.4413 30.1213 25.8787C29.5587 25.3161 28.7956 25 28 25C27.2044 25 26.4413 25.3161 25.8787 25.8787C25.3161 26.4413 25 27.2044 25 28C25 28.7956 25.3161 29.5587 25.8787 30.1213C26.4413 30.6839 27.2044 31 28 31C28.7956 31 29.5587 30.6839 30.1213 30.1213Z"
                stroke="#2F302C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.458 28C19.732 23.943 23.523 21 28 21C32.478 21 36.268 23.943 37.542 28C36.268 32.057 32.478 35 28 35C23.523 35 19.732 32.057 18.458 28Z"
                stroke="#2F302C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {/* <img src={SquareIcon4} alt="squareIcone" /> */}
            <h4 className="titleh4">REVIEW</h4>
            <p className="dec">
              View all your information <br /> before the confimation.
            </p>
          </a>
        </div>
        {/* --------------end--  */}
      </div>
    </div>
  );
}
