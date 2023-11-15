import { Router } from "express";
import type { ThingOptinalId } from "../types";
import things from "../data/things.js";
import ThingsController from "../controller/thingsController.js";

const thingsController = new ThingsController();

const thingsRouter = Router();

thingsRouter.get("/", thingsController.getThings);

thingsRouter.get("/:idThing", thingsController.getThingsById);

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

thingsRouter.post("/", thingsController.postThing);

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
