import fs from "fs";
import River from "@/app/River";

export default class Solution {
  #rivers: River[] = [];

  get rivers(): River[] {
    return this.#rivers;
  }

  get drainsIntoSea(): number {
    let numberOfRivers: number = 0;
    for (const river of this.#rivers) {
      if (river.isDrainsToSea) numberOfRivers++;
    }
    return numberOfRivers;
  }

  get averageLength(): number {
    let numberOfRivers: number = 0;
    let sumLengthOfRivers: number = 0;
    for (const river of this.#rivers) {
      if (river.isEndsWithA) {
        numberOfRivers++;
        sumLengthOfRivers += river.totalLength;
      }
    }
    if (numberOfRivers == 0) return 0;
    return sumLengthOfRivers / numberOfRivers;
  }

  get longestInHR(): River {
    const sorted = [...this.#rivers].sort((a, b) => b.lengthInHR - a.lengthInHR);
    return sorted[0];
  }

  get drainsStats(): Map<string, number> {
    let stats: Map<string, number> = new Map<string, number>();
    for (const river of this.#rivers) {
      const mennyiség: number = stats.get(river.drainsInto) ?? 0;
      stats.set(river.drainsInto, mennyiség + 1);
    }
    stats = new Map<string, number>(
      stats
        .entries()
        .filter((value) => value[1] > 3)
        .toArray()
        .sort((a, b) => b[1] - a[1]),
    );
    return stats;
  }

  writeLength(targetFile: string) {
    let lines: string = "name;length_in_hr;located_in_hr;drains_into\n";
    for (const river of this.#rivers) {
      const százalék: number = (river.lengthInHR / river.totalLength) * 100;
      lines += `${river.name};${river.lengthInHR}Km;${százalék.toFixed(0)}%;${river.drainsInto}\n`;
    }
    fs.writeFileSync(targetFile, lines, "utf-8");
  }

  constructor(sourceFile: string) {
    // readFileSync(sourceFile, "utf-8") -> Szöveges állományt beolvas, egy string típusú adattal tér vissza
    // split("\n") -> állomány adatait adatsorokra tördeli
    // slice(1) -> első sar elhagyása, mert az nem adatsor (hanem fejlécsor)
    const lines: string[] = fs.readFileSync(sourceFile, "utf-8").split("\n").slice(1);
    for (const line of lines) {
      const actLine: string = line.trim(); // trim() -> whitespace karakterek eltávolítása
      // new -> példányosítás operátora
      // River() -> River osztály konstruktorát hívja
      // new River(actLine) -> létrejön egy új osztálypéldány, objektum
      // actLine.length > 0 -> csak az adatokat tartalmazó adatsor feldolgozása
      if (actLine.length > 0) this.#rivers.push(new River(actLine));
    }
  }
}
