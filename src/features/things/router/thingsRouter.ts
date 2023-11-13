import { Router } from "express";

import type { ThingOptinalId } from "../../../types";
import things from "../data/things.js";

const thingsRouter = Router();

thingsRouter.get("/", (_req, res) => {
  res.status(200);
  res.json({ things });
});

thingsRouter.get("/:idThing", (req, res) => {
  const id = Number(req.params.idThing);

  const thing = things.find((thing) => thing.id === id);

  if (!thing) {
    res.status(404).json({});
    return;
  }

  res.status(200).json(thing);
});

thingsRouter.delete("/:idThing", (req, res) => {
  const id = Number(req.params.idThing);

  const thingIndex = things.findIndex((thing) => thing.id === id);

  if (thingIndex === -1) {
    res.status(404).json({});
    return;
  }

  things.splice(thingIndex, 1);

  res.status(200).json({});
});

thingsRouter.post("/", (req, res) => {
  const { thing } = req.body as ThingOptinalId;
  const newThing = { id: things.length, thing };
  things.push(newThing);
  res.status(200).json(newThing);
});

thingsRouter.post("/", (req, res) => {
  const { thing } = req.body as ThingOptinalId;

  if (!thing) {
    res.status(404).json({});
    return;
  }

  const newThing = { id: things.length, thing };
  things.push(newThing);
  res.status(200).json(newThing);
});

thingsRouter.put("/", (req, res) => {
  const { id, thing } = req.body as ThingOptinalId;

  const thingIndex = things.findIndex((thing) => thing.id === Number(id));

  if (thingIndex === -1) {
    res.status(404).json({});
    return;
  }

  if (!thing) {
    res.status(404).json({});
    return;
  }

  things[thingIndex].thing = thing;
  res.status(200).json(things[thingIndex]);
});

export default thingsRouter;
