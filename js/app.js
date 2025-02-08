import { Application, Assets, Container } from "pixi.js";
import { addStars } from "./addStars";
import { addMoon } from "./addMoon";
import { addMountains } from "./addMountains";
import { addTrees } from "./addTrees";
import { addGround } from "./addGround";
import { addTrain } from "./addTrain";
import { addSmokes } from "./addSmokes";

const app = new Application();

const trainContainer = new Container();

async function preload() {
  const assets = [
    {
      alias: "person",
      src: "/assets/person.png",
    },
  ];
  await Assets.load(assets);
}

(async () => {
  await app.init({ background: "#021f4b", resizeTo: window, antialias: true });
  document.body.appendChild(app.canvas);
  await preload();

  addStars(app);
  addMoon(app);
  addMountains(app);
  addTrees(app);
  addGround(app);
  addTrain(app, trainContainer);
  addSmokes(app, trainContainer);
})();
