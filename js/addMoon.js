import { Graphics, Assets } from "pixi.js";

export function addMoon(app) {
  const graphics = new Graphics().svg(`
    <svg width="111" height="126" viewBox="0 0 111 126" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M9.99794 104.751C44.7207 104.751 72.869 76.6028 72.869 41.8801C72.869 25.9516 66.9455
        11.4065 57.1812 0.327637C87.3034 4.98731 110.363 31.0291 110.363 62.4566C110.363 97.1793
        82.2144 125.328 47.4917 125.328C28.6975 125.328 11.8294 117.081 0.308472 104.009C3.46679
        104.498 6.70276 104.751 9.99794 104.751Z" fill="#FFDF00"/>
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M57.4922 0.682129C75.7709 10.9731 88 29.7256 88 51.1529C88 83.6533 59.8656 110 25.16
        110C16.9934 110 9.19067 108.541 2.03273 105.887C1.44552 105.272 0.870627 104.646 0.308472
        104.008C3.46679 104.497 6.70276 104.75 9.99794 104.75C44.7207 104.75 72.869 76.6018 72.869
        41.8791C72.869 26.1203 67.0711 11.7158 57.4922 0.682129Z" fill="#DEC61A"/>
</svg>`);

  graphics.x = app.screen.width / 2 + 100;
  graphics.y = app.screen.height / 8;

  app.stage.addChild(graphics);
}
