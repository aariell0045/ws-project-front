import React from "react";

function NewGroupIcon() {
  return (
    <svg
      style={{ border: "0.01vw solid black", borderRadius: "50%" }}
      width="100%"
      height="100%"
      viewBox="4.5 0 52 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <circle
          cx="31"
          cy="27"
          r="27"
          fill="white"
          fill-opacity="0.8"
          shape-rendering="crispEdges"
        />
        {/* <circle cx='31' cy='27' r='26.5' stroke='black' shape-rendering='crispEdges' /> */}
      </g>
      <path
        d="M35.7386 29.3803C34.3748 32.6128 30.3523 32.8555 28.8153 32.0728C23.1624 28.8091 25.2599 23.5123 27.6614 22.0724C30.0629 20.6325 34.7568 21.7664 35.3541 23.9955C35.9514 26.2247 37.4433 25.3398 35.7386 29.3803Z"
        fill="white"
      />
      <circle
        cx="24.3222"
        cy="25.2818"
        r="2.57048"
        transform="rotate(39.4962 24.3222 25.2818)"
        stroke="black"
      />
      <circle
        cx="33.4128"
        cy="32.3767"
        r="2.57048"
        transform="rotate(39.4962 33.4128 32.3767)"
        stroke="black"
      />
      <circle
        cx="34.812"
        cy="21.0242"
        r="2.57048"
        transform="rotate(39.4962 34.812 21.0242)"
        stroke="black"
      />
      <line
        x1="26.7947"
        y1="24.0213"
        x2="32.0584"
        y2="21.3895"
        stroke="black"
      />
      <line x1="35.409" y1="23.662" x2="34.5318" y2="29.803" stroke="black" />
      <path
        d="M41.1667 25.6667L41.1667 32.6667"
        stroke="black"
        strokeLinecap="round"
      />
      <path
        d="M44.6667 29.1667L37.6667 29.1667"
        stroke="black"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="62"
          height="62"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default NewGroupIcon;
