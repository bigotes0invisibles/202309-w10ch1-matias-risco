import type { Request, Response } from "express";
import type { ThingOptinalId } from "../types";
import ThingsRepository from "../repository/ThingsRepository.js";

interface DictionaryParamThings {
  idThing: string;
}

type RequestById = Request<DictionaryParamThings>;

type RequestByBody = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  ThingOptinalId
>;

const thingsRepository = new ThingsRepository();
class ThingsController {
  public getThings(_req: Request, res: Response) {
    const things = thingsRepository.getThings();
    res.status(200).json({ things });
  }

  public getThingsById(req: RequestById, res: Response) {
    const { idThing } = req.params;
    try {
      const thing = thingsRepository.findThingById(+idThing);

      res.status(200).json({ thing });
    } catch {
      res.status(404).json({ error: `thing with id ${idThing} not found` });
    }
  }

  public postThing(req: RequestByBody, res: Response) {
    try {
      const newThing = thingsRepository.addThingtoThings(req.body);
      res.status(200).json(newThing);
    } catch (error) {
      res
        .status(404)
        .json({ error: "there is no body", body: (error as Error).message });
    }
  }
}

export default ThingsController;
