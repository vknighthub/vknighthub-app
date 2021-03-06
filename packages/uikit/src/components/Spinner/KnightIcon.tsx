import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 917 1280" {...props}>
      <svg width="917" height="1280" viewBox="0 0 917 1280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ff5722" stroke="none">
          <path
            d="M4299 10682 l-285 -547 8 -280 c43 -1413 146 -4991 143 -4993 -2 -2
-132 152 -291 342 -158 191 -289 345 -291 343 -2 -3 106 -220 241 -483 134
-264 242 -481 240 -483 -1 -2 -21 11 -42 28 -22 17 -43 31 -47 31 -3 0 28 -49
69 -110 42 -60 76 -113 76 -117 0 -4 -8 -18 -18 -31 l-18 -23 -544 121 c-300
66 -554 123 -565 126 -54 16 37 -33 500 -266 275 -139 502 -255 504 -257 11
-9 -18 -17 -133 -36 -69 -12 -126 -24 -126 -27 0 -3 37 -11 83 -19 115 -18
177 -32 177 -39 0 -4 -10 -12 -23 -17 -85 -40 -984 -499 -992 -507 -7 -7 -3
-8 10 -5 11 4 265 61 564 127 l545 122 18 -24 c9 -12 18 -27 18 -31 0 -4 -31
-51 -68 -105 -87 -124 -89 -127 -71 -116 8 4 57 39 110 76 54 37 100 68 103
68 3 0 30 -16 60 -35 30 -19 73 -42 95 -51 l41 -16 0 -897 0 -897 28 -27 c74
-71 261 -69 338 4 l22 21 1 886 c0 488 0 892 1 898 0 7 19 19 42 29 23 9 65
32 93 51 29 19 55 34 60 34 4 0 50 -31 104 -68 53 -37 102 -72 110 -76 18 -11
16 -8 -71 116 -37 54 -68 101 -68 105 0 4 9 19 18 31 l18 24 545 -122 c299
-66 553 -123 564 -127 13 -3 17 -2 10 5 -8 8 -907 467 -992 507 -13 5 -23 13
-23 17 0 7 62 21 178 39 45 8 82 16 82 19 0 3 -57 15 -126 27 -115 19 -144 27
-133 36 2 2 229 118 504 257 463 233 554 282 500 266 -11 -3 -265 -60 -565
-126 l-544 -121 -18 23 c-10 13 -18 27 -18 31 0 4 34 57 76 117 41 61 72 110
69 110 -4 0 -25 -14 -47 -31 -21 -17 -41 -30 -42 -28 -2 2 106 219 240 483
135 263 243 480 241 483 -2 2 -133 -152 -291 -343 -159 -190 -289 -344 -291
-342 -2 2 32 1189 74 2638 l77 2635 -283 544 c-156 300 -285 546 -286 548 -2
1 -132 -244 -288 -545z"
          />
        </g>
      </svg>
    </Svg>
  );
};

export default Icon;
