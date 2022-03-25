import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1280 1280" {...props}>
      <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ff5722" stroke="none">
        <path
          d="M6547 11729 c-123 -18 -255 -89 -361 -194 -123 -121 -165 -231 -186
-485 -5 -69 -20 -203 -32 -297 -22 -172 -22 -173 -5 -415 10 -134 17 -275 17
-315 l0 -71 -67 -15 c-38 -9 -99 -19 -136 -22 -51 -6 -74 -13 -90 -30 -13 -13
-46 -27 -80 -34 -69 -15 -259 -76 -298 -96 -15 -8 -29 -19 -31 -24 -1 -4 -32
-23 -68 -41 -112 -56 -243 -173 -325 -290 -168 -239 -424 -495 -588 -589 -141
-81 -304 -123 -386 -101 -23 6 -64 12 -92 13 -52 2 -69 -9 -98 -61 -8 -14 -16
-14 -64 -3 -73 18 -116 9 -157 -34 -26 -27 -42 -35 -70 -35 -19 0 -45 -7 -57
-15 -28 -20 -80 -103 -105 -167 -22 -58 -124 -166 -183 -194 -38 -17 -54 -45
-58 -95 -2 -27 -13 -44 -45 -73 -34 -31 -42 -45 -42 -73 0 -19 5 -44 11 -55 9
-17 7 -26 -12 -51 -26 -36 -28 -80 -6 -123 22 -43 202 -154 249 -154 39 0 84
36 94 75 3 13 17 28 30 34 14 6 33 25 42 41 13 23 22 29 37 25 11 -2 28 -5 38
-5 10 0 17 -8 17 -20 0 -35 27 -76 58 -89 39 -16 72 -2 126 54 l44 46 153 -5
c184 -7 239 2 369 59 52 23 111 45 131 49 20 3 56 21 79 39 23 17 65 50 94 72
30 22 86 67 127 99 72 59 292 216 524 373 66 45 155 111 199 148 78 65 112 82
141 72 18 -8 66 -102 95 -190 12 -38 35 -83 50 -100 30 -35 54 -119 65 -227 7
-73 15 -90 61 -143 19 -20 34 -44 34 -53 0 -9 24 -64 54 -122 31 -62 58 -132
65 -167 6 -33 24 -87 41 -119 l30 -59 -17 -80 c-20 -96 -10 -163 35 -229 42
-62 49 -126 21 -184 -19 -40 -21 -54 -13 -117 4 -40 8 -148 9 -242 0 -169 0
-170 31 -234 l32 -64 -21 -56 c-28 -79 -32 -193 -12 -341 14 -95 19 -213 21
-485 5 -478 21 -697 90 -1200 46 -336 68 -458 92 -503 35 -69 202 -176 352
-228 38 -13 83 -19 145 -19 80 0 95 3 137 28 l47 27 21 -30 c12 -16 42 -44 68
-61 67 -45 71 -53 67 -119 -3 -44 -9 -64 -26 -81 l-22 -22 7 -306 c3 -168 11
-351 16 -406 39 -398 50 -719 30 -915 -15 -145 -50 -331 -71 -371 -25 -48 -24
-55 12 -132 l31 -66 -10 -118 c-5 -65 -7 -165 -5 -223 3 -58 0 -130 -5 -161
-7 -37 -8 -69 -2 -91 12 -44 72 -101 135 -130 46 -21 64 -23 225 -23 154 0
184 3 245 22 101 32 173 77 181 111 3 15 13 41 21 58 26 51 12 110 -60 262
-36 75 -73 155 -82 177 -9 22 -27 57 -41 77 -29 41 -25 58 23 110 l25 27 -21
30 c-12 17 -19 36 -15 43 4 6 9 43 10 82 7 145 66 549 119 811 19 94 63 274
98 400 35 127 74 277 86 335 12 58 34 156 47 219 23 103 24 115 10 123 -18 10
-21 44 -6 83 6 17 7 33 0 44 -7 15 1 27 46 65 95 82 99 105 40 246 l-31 75 -3
270 -3 270 49 170 49 170 44 22 c58 29 65 28 78 -8 10 -30 12 -31 53 -24 24 3
80 24 125 46 170 82 253 232 239 434 -17 260 -27 388 -36 460 -18 136 -50 336
-70 425 -39 176 -61 295 -75 399 -8 60 -23 132 -35 161 -21 53 -67 127 -93
148 -11 9 -13 33 -9 111 5 117 -4 161 -57 275 -22 45 -49 115 -62 156 -12 41
-28 84 -36 95 -15 23 -17 78 -3 104 5 10 14 49 20 87 23 139 12 194 -54 270
l-32 37 18 66 c9 36 17 99 17 139 1 58 6 83 27 124 47 92 56 136 61 298 3 85
6 156 8 158 5 6 108 -49 153 -81 23 -17 53 -50 67 -73 14 -24 43 -55 65 -71
21 -15 45 -41 51 -56 6 -15 27 -52 45 -83 18 -30 31 -61 28 -68 -6 -16 94
-142 132 -165 16 -10 55 -47 87 -82 110 -120 181 -189 195 -189 20 0 142 -108
152 -134 10 -27 115 -126 133 -126 13 0 167 -151 167 -165 0 -4 -16 -43 -35
-87 -36 -82 -71 -241 -62 -287 3 -13 -2 -35 -10 -48 -13 -20 -14 -30 -3 -69 7
-24 21 -49 31 -54 27 -15 95 -12 109 5 9 11 17 12 30 5 10 -6 39 -10 63 -10
66 0 237 38 267 60 34 24 56 70 65 135 5 45 2 58 -34 130 -38 77 -78 190 -102
287 -11 45 -10 49 15 78 16 19 26 44 26 63 0 18 -30 92 -74 181 -41 83 -82
173 -91 199 -20 62 -35 165 -35 244 0 34 -5 65 -10 68 -6 4 -20 -15 -31 -41
-16 -35 -23 -43 -30 -33 -24 37 -70 209 -80 296 -6 54 -15 108 -20 121 -18 46
-50 17 -64 -62 -4 -20 -10 -36 -14 -36 -13 0 -110 195 -134 270 -14 41 -31
116 -38 165 -12 87 -22 115 -40 115 -5 0 -9 -15 -9 -34 0 -62 -11 -93 -37
-105 -33 -15 -57 5 -88 75 -28 62 -60 88 -128 104 -71 17 -82 25 -236 169
-107 102 -140 139 -166 191 -42 83 -69 118 -158 210 -40 41 -80 84 -88 96 -8
11 -43 42 -78 67 -65 48 -66 49 -351 132 -265 78 -268 79 -381 190 -55 55
-105 107 -109 115 -11 21 -37 258 -45 410 -10 179 -63 472 -114 622 -56 166
-145 304 -246 380 -148 113 -351 171 -508 147z"
        />
        <path
          d="M5960 320 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
        />
        <path
          d="M6057 316 c-4 -9 -14 -16 -22 -16 -9 0 -13 5 -9 11 4 8 -1 9 -17 3
-13 -4 -33 -8 -45 -7 -17 1 -19 -4 -16 -27 4 -25 8 -28 36 -27 21 1 30 -2 28
-11 -2 -9 4 -11 18 -7 11 4 20 2 20 -4 0 -6 5 -11 11 -11 6 0 9 7 6 14 -4 10
-1 13 8 10 7 -3 16 -12 19 -21 5 -12 9 -13 21 -3 9 7 15 8 15 2 0 -5 7 -13 16
-16 10 -4 13 -2 8 7 -6 9 -5 9 8 0 8 -7 18 -10 21 -7 3 3 12 2 19 -2 7 -5 33
-10 58 -12 25 -2 50 -8 56 -13 6 -5 38 -11 70 -14 32 -2 60 -8 62 -13 1 -4 20
-7 42 -6 22 1 40 -3 40 -8 0 -21 879 0 947 22 60 19 40 44 -57 70 -60 16 -201
22 -217 8 -9 -7 -13 -7 -13 1 0 6 -12 11 -27 10 -16 -1 -55 1 -88 4 -33 3
-109 8 -170 12 -60 4 -117 8 -125 10 -8 2 -60 7 -115 10 -55 4 -113 9 -130 11
-49 6 -192 14 -321 19 -66 2 -127 7 -136 10 -9 4 -18 0 -21 -9z m-52 -36 c-3
-5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z"
        />
        <path d="M5914 285 c4 -24 16 -30 16 -7 0 12 -4 22 -9 22 -5 0 -8 -7 -7 -15z" />
        <path d="M5850 271 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z" />
      </g>
    </Svg>
  );
};

export default Icon;