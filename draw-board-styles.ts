import { css } from 'lit-element';

export const drawBoardStyles = css`
#gfx_holder2 {
  position: absolute;
  top: 100px;
  width: 300vw;
  height: 300vh;
  display: none;
  background-color: var(--material-color-grey-100);
}

.button {
  rx: 4;
  ry: 4;
  xheight: 32px;
  width: 140px;
  xstroke: #fff;
  xstroke-width: 1;
  cursor: pointer;
  fill: none;
  xfilter: drop-shadow(rgba(0, 0, 0, 0.4) 1px 1px 3px);
}

.button > tspan {
  fill: var(--material-color-grey-800);
}

rect.type,
rect.element {
  fill: none;
  stroke-width: 0;
}

path.type,
path.element {
  rx: 4;
  ry: 4;
  stroke-width: 0;
  filter: drop-shadow(rgba(0, 0, 0, 0.4) 1px 1px 3px);
}

.level-1 {
  opacity: 0.6 !important;
}

.connection {
  xfill: red;
  stroke: #555;
  stroke-width: 3;
}

.red {
  fill: var(--material-color-red);
}

.red-1 {
  fill: var(--material-color-red-100);
}

.red-2 {
  fill: var(--material-color-red-300);
}

.red-3 {
  fill: var(--material-color-red);
}

.pink {
  fill: var(--material-color-pink);
}

.pink-1 {
  fill: var(--material-color-pink-100);
}

.pink-2 {
  fill: var(--material-color-pink-300);
}

.pink-3 {
  fill: var(--material-color-pink);
}

.purple {
  fill: var(--material-color-purple);
}

.purple-1 {
  fill: var(--material-color-purple-100);
}

.purple-2 {
  fill: var(--material-color-purple-300);
}

.purple-3 {
  fill: var(--material-color-purple);
}

.indigo {
  fill: var(--material-color-indigo);
}

.indigo-1 {
  fill: var(--material-color-indigo-100);
}

.indigo-2 {
  fill: var(--material-color-indigo-300);
}

.indigo-3 {
  fill: var(--material-color-indigo);
}

.blue {
  fill: var(--material-color-blue);
}

.blue-1 {
  fill: var(--material-color-blue-100);
}

.blue-2 {
  fill: var(--material-color-blue-300);
}

.blue-3 {
  fill: var(--material-color-blue);
}

.cyan {
  fill: var(--material-color-cyan);
}

path.cyan-1 {
  fill: var(--material-color-cyan-100);
}

.cyan-2 {
  fill: var(--material-color-cyan-300);
}

.cyan-3 {
  fill: var(--material-color-cyan);
}

.teal {
  fill: var(--material-color-teal);
}

.teal-1 {
  fill: var(--material-color-teal-100);
}

.teal-2 {
  fill: var(--material-color-teal-300);
}

.teal-3 {
  fill: var(--material-color-teal);
}

.green {
  fill: var(--material-color-green);
}

.green-1 {
  fill: var(--material-color-green-100);
}

.green-2 {
  fill: var(--material-color-green-300);
}

.green-3 {
  fill: var(--material-color-green);
}

.lime {
  fill: var(--material-color-lime);
}

.lime-1 {
  fill: var(--material-color-lime-100);
}

.lime-2 {
  fill: var(--material-color-lime-300);
}

.lime-3 {
  fill: var(--material-color-lime);
}

.yellow {
  fill: var(--material-color-yellow);
}

.yellow-1 {
  fill: var(--material-color-yellow-100);
}

.yellow-2 {
  fill: var(--material-color-yellow-300);
}

.yellow-3 {
  fill: var(--material-color-yellow);
}

.amber {
  fill: var(--material-color-amber);
}

.amber-1 {
  fill: var(--material-color-amber-100);
}

.amber-2 {
  fill: var(--material-color-amber-300);
}

.amber-3 {
  fill: var(--material-color-amber);
}

.orange {
  fill: var(--material-color-orange);
}

.orange-1 {
  fill: var(--material-color-orange-100);
}

.orange-2 {
  fill: var(--material-color-orange-300);
}

.orange-3 {
  fill: var(--material-color-orange);
}

.brown {
  fill: var(--material-color-brown);
}
`;
