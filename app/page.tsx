import Solution from "@/app/Solution";

export default function HRriversPage() {
  const s: Solution = new Solution("HR_rivers.txt");
  s.writeLength("HR_rivers2.txt");
  return (
    <div className="font-mono whitespace-pre">
      <p>5. feladat: Tengerbe ömlő (torkolló) folyók száma: {s.drainsIntoSea}</p>
      <p>6. feladat: Az {'"a"'} betűre végződő folyók átlagos hossza: {s.averageLength.toFixed(2)} Km</p>
      <p>7. feladat: A leghosszabb (Horvátországban) folyó adatai:</p>
      <p>{"\t"}Folyó neve: {s.longestInHR.name}</p>
      <p>{"\t"}Hossza Horvátországban: {s.longestInHR.lengthInHR}</p>
      <p>{"\t"}Teljes hossza: {s.longestInHR.totalLength}</p>
      <p>{"\t"}Ide ömlik: {s.longestInHR.drainsInto}</p>
      <p>8. feladat: Statisztika</p>
      {s.drainsStats.entries().map(érték => {
        return <p key={érték[0]}>{"\t" + érték[0] + " - " + érték[1] + " db"}</p>
      })}
    </div>
  );
}
