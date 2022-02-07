import React from 'react';
import { SvgXml } from 'react-native-svg';

const LogoTest = () => {
  const svgMarkup = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  width="900.000000pt" height="1401.000000pt" viewBox="0 0 900.000000 1401.000000"
  preserveAspectRatio="xMidYMid meet">
 <metadata>
 Created by potrace 1.10, written by Peter Selinger 2001-2011
 </metadata>
 <g transform="translate(0.000000,1401.000000) scale(0.100000,-0.100000)"
 fill="#000000" stroke="none">
 <path d="M4586 11904 c-3 -26 -6 -69 -6 -95 0 -51 -18 -176 -46 -314 -18 -93
 -105 -367 -159 -505 -58 -147 -285 -601 -321 -641 -8 -8 -14 -18 -14 -21 0 -6
 -41 -72 -172 -281 -38 -60 -90 -136 -233 -342 -23 -33 -64 -91 -90 -130 -27
 -38 -76 -107 -109 -152 -34 -45 -81 -110 -106 -144 -51 -71 -185 -256 -225
 -309 -37 -50 -182 -249 -211 -290 -13 -19 -44 -60 -67 -91 -84 -112 -223 -300
 -270 -366 -229 -323 -617 -907 -617 -928 0 -2 -13 -24 -30 -48 -16 -25 -30
 -47 -30 -50 0 -4 -13 -25 -29 -49 -74 -111 -237 -432 -324 -638 -36 -85 -86
 -222 -112 -305 -25 -82 -51 -161 -56 -174 -11 -26 -15 -43 -48 -211 -53 -267
 -71 -599 -43 -815 42 -328 53 -386 109 -585 62 -216 146 -440 211 -562 16 -29
 51 -93 77 -143 65 -121 66 -123 103 -180 126 -196 236 -337 385 -492 166 -173
 295 -291 434 -396 58 -45 63 -46 73 -28 5 11 10 37 10 58 0 73 32 282 71 453
 45 205 157 497 292 760 68 134 181 335 201 360 7 8 25 38 41 65 47 83 197 313
 326 500 45 66 96 140 113 165 17 25 36 52 43 60 13 16 178 242 238 325 20 28
 78 106 129 175 50 69 114 157 141 195 28 39 55 77 62 85 13 16 239 326 347
 475 519 717 861 1280 1047 1720 43 103 104 267 119 320 5 17 27 89 49 160 22
 72 41 140 41 153 0 12 6 48 14 80 40 158 51 283 51 557 -1 211 -5 290 -18 363
 -9 50 -17 104 -17 118 0 25 -10 74 -51 258 -24 104 -106 355 -155 476 -44 107
 -145 312 -201 408 -24 40 -43 75 -43 77 0 14 -147 217 -246 340 -115 144 -338
 373 -454 467 -78 63 -205 158 -212 158 -3 0 -8 -21 -12 -46z"/>
 <path d="M7126 8092 c-7 -12 -48 -161 -54 -197 -2 -16 -8 -34 -12 -40 -5 -5
 -13 -30 -20 -55 -6 -25 -22 -70 -35 -100 -13 -30 -40 -98 -61 -150 -20 -52
 -41 -102 -45 -110 -5 -8 -27 -55 -50 -105 -59 -131 -80 -173 -115 -235 -17
 -30 -47 -84 -66 -120 -19 -36 -61 -109 -94 -163 -32 -55 -65 -111 -73 -125 -8
 -15 -31 -53 -53 -84 -21 -31 -38 -59 -38 -62 0 -13 -368 -555 -430 -634 -14
 -17 -56 -76 -95 -131 -38 -55 -167 -231 -285 -390 -273 -367 -436 -590 -662
 -901 -71 -98 -387 -570 -414 -619 -11 -18 -24 -41 -29 -50 -6 -9 -22 -34 -35
 -56 -14 -23 -31 -50 -38 -60 -6 -11 -16 -29 -21 -40 -5 -11 -20 -36 -32 -55
 -20 -30 -86 -158 -240 -470 -15 -30 -30 -66 -34 -80 -4 -14 -18 -47 -30 -75
 -12 -27 -30 -75 -40 -105 -9 -30 -20 -64 -25 -75 -18 -46 -50 -157 -50 -178
 -1 -12 -7 -33 -15 -47 -8 -14 -14 -38 -15 -55 0 -16 -7 -59 -15 -95 -20 -88
 -38 -254 -33 -315 3 -49 3 -49 48 -62 24 -7 76 -17 115 -23 38 -5 93 -14 120
 -19 28 -5 136 -15 241 -22 154 -10 232 -10 395 1 112 7 229 19 260 26 31 8 72
 14 90 14 19 0 84 12 144 26 61 14 128 29 150 34 69 15 128 32 190 56 33 12 89
 32 125 44 82 26 108 38 370 163 201 97 489 297 700 487 100 90 303 300 353
 365 232 302 440 656 508 863 11 37 27 76 34 87 6 11 15 31 18 45 3 14 17 57
 31 95 14 39 25 77 26 86 0 9 7 41 16 70 44 152 48 174 90 429 25 149 25 692 1
 828 -10 50 -17 107 -17 126 0 18 -7 67 -15 107 -15 69 -32 154 -56 274 -13 66
 -22 103 -49 200 -12 44 -24 91 -27 105 -13 63 -171 561 -213 670 -11 30 -32
 87 -45 126 -13 40 -28 80 -33 90 -12 22 -56 132 -107 264 -20 52 -40 100 -45
 105 -4 6 -22 48 -40 95 -18 47 -39 92 -47 101 -7 8 -13 23 -13 32 0 21 -39 97
 -50 97 -5 0 -11 -4 -14 -8z"/>
 </g>
 </svg>`;

  const SvgImage = () => <SvgXml xml={svgMarkup} width='15px'/>;

  return <SvgImage />;
};

export default LogoTest;
