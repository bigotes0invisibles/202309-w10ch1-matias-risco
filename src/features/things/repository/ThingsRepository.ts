import type { Thing, ThingOptinalId } from "../types";
import things from "../data/things.js";

class ThingsRepository {
  public getThings(): Thing[] {
    return things;
  }

  public findThingById(id: number): Thing {
    const thing = things.find((thing) => thing.id === +id);

    if (!thing) {
      throw new Error(`no hay thing con id ${id}`);
    }

    return thing;
  }

  public addThingtoThings({ thing }: ThingOptinalId) {
    const newThing = {
      id: things.reduce((conter, { id }) => (conter > id ? conter : id), 0),
      thing,
    };
    things.push(newThing);
    return newThing;
  }
}

export default ThingsRepository;
