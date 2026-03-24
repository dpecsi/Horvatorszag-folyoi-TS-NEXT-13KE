export default class River {
  // name;length_in_hr;total_length;drains_into
  // Láthatósági szintek:
  // - public (leg nyitottab, mindenhonnan elérhető, alapértelmezés)
  // - private (leg zártabb, csak osztályon belül elérhető)
  // - protected (osztályon belül és leszármazott osztályakból elérhető tagok)

  //  Adattagok, jellemzően private láthatósági szinttel
  #name: string; // # => private adattag
  #lengthInHR: number;
  #totalLength: number;
  #drainsInto: string;

  // Kódtagok:

  get lengthInHR(): number {
    return this.#lengthInHR;
  }

  get totalLength(): number {
    return this.#totalLength;
  }

  get isEndsWithA(): boolean {
    return this.#name.endsWith("a");
  }

  get name(): string {
    return this.#name;
  }

  get drainsInto(): string {
    return this.#drainsInto;
  }

  // Jellemző
  // A Jellemzőket a get foglalt szóval definiáljuk
  // Formális paraméterei nem lehetnek a jellemzőnek
  // Használatkor (híváskor) nem tehetjük ki az üres zárójeleket
  get isDrainsToSea(): boolean {
    return this.#drainsInto.includes("Sea");
  }

  // Speciális kódtag a konstruktor, egy olyan fg., ami az osztálypéldány felkészíti
  // a használatra (inicializálja a szükséges adattagokat)
  constructor(dataLine: string) {
    const m: string[] = dataLine.split(";");
    this.#name = m[0];
    this.#lengthInHR = Number(m[1].replace(",", "."));
    this.#totalLength = Number(m[2].replace(",", "."));
    this.#drainsInto = m[3];
  }
}
