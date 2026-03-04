type StatsIconProps = {
  className?: string;
};

export function StatsIcon({ className }: StatsIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_ii_503_408)">
        <rect
          width="50"
          height="50"
          rx="8.58689"
          fill="white"
          fillOpacity="0.05"
        />
        <rect
          x="0.5"
          y="0.5"
          width="49"
          height="49"
          rx="8.08689"
          stroke="white"
          strokeOpacity="0.1"
        />
      </g>
      <path
        d="M18.75 20H25M28.75 20H31.25M31.25 25H23.75M20 25H18.75M18.75 30H25M28.75 30H31.25M13.75 20V17.5C13.75 16.8369 14.0134 16.201 14.4822 15.7322C14.9511 15.2634 15.587 15 16.25 15H33.75C34.413 15 35.0489 15.2634 35.5178 15.7322C35.9866 16.201 36.25 16.8369 36.25 17.5V32.5C36.25 33.163 35.9866 33.7989 35.5178 34.2677C35.0489 34.7366 34.413 35 33.75 35H16.25C15.587 35 14.9511 34.7366 14.4822 34.2677C14.0134 33.7989 13.75 33.163 13.75 32.5V20Z"
        stroke="#1AEFD0"
        strokeWidth="1.84005"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_ii_503_408"
          x="-4"
          y="0"
          width="56"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_503_408"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_503_408"
            result="effect2_innerShadow_503_408"
          />
        </filter>
      </defs>
    </svg>
  );
}

