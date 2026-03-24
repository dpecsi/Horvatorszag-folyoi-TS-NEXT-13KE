import River from "@/app/River";
import Solution from "@/app/Solution";

export default function HRriversPage() {
  const s: Solution = new Solution("HR_rivers.txt");
  const l: River = s.longestInHR;
  return (
    <div className="font-mono whitespace-pre">
      <p>5. feladat: Tengerbe ömlő (torkolló) folyók száma: {s.drainsIntoSea}</p>
      <p>6. feladat: Az {'"a"'} betűre végződő folyók átlagos hossza: {s.averageLength.toFixed(2)} Km</p>
      <p>7. feladat: A leghosszabb (Horvátországban) folyó adatai:</p>
      <p>        Folyó neve: {l.name}</p>
      <p>        Hossza Horvátországban: {l.lengthInHR}</p>
      <p>        Teljes hossza: {l.totalLength}</p>
      <p>        Ide ömlik: {l.drainsInto}</p>
      {/* <p>{JSON.stringify(s)}</p> */}
    </div>
  );
}
