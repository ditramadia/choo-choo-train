import { Graphics } from "pixi.js";

export function addStars(app) {
  const starCount = 20;
  const graphics = new Graphics();

  for (let i = 0; i < starCount; i++) {
    const x = (i * 0.78695 * app.screen.width) % app.screen.width;
    const y = (i * 0.9382 * app.screen.height) % app.screen.height;
    const radius = 2 + Math.random() * 3;
    const rotation = Math.random() * Math.PI * 2;

    graphics.star(x, y, 5, radius, 0, rotation).fill({ color: 0xffffff });
  }

  app.stage.addChild(graphics);
}
