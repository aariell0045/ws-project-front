function addMessageIcon() {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
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
        <circle
          cx="31"
          cy="27"
          r="26.5"
          stroke="black"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M38.5005 21.9999C39.9583 26.3731 37.0004 28.4999 39.5004 31.4999C31.9856 35.4405 22.9125 33.6389 23.0003 29.9999C23.0882 26.361 28.7454 22.9553 31.6092 23.8488C34.4731 24.7423 37.5005 18.9999 38.5005 21.9999Z"
        fill="white"
      />
      <rect x="23" y="21" width="16" height="12" rx="2" stroke="black" />
      <path
        d="M23 24L30.1056 27.5528C30.6686 27.8343 31.3314 27.8343 31.8944 27.5528L39 24"
        stroke="black"
      />
      <path
        d="M41.167 31.6665L41.167 38.6665"
        stroke="black"
        stroke-linecap="round"
      />
      <path
        d="M44.667 35.1665L37.667 35.1665"
        stroke="black"
        stroke-linecap="round"
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

export default addMessageIcon