interface ThingBase {
  thing: string;
}

export interface Thing extends ThingBase {
  id: number;
}

export interface ThingOptinalId extends ThingBase {
  id?: number;
}
