// /src/app/pools/page.tsx

import Image from "next/image";
import HeroSection from "@/components/HeroSection";

const poolData = [
  {
    id: 1,
    name: "Pool 1",
    token1: "TokenA",
    token2: "TokenB",
    apr: "12.56%",
    liquidity: "125,678.98",
    volume: "2,567.89",
  },
  // Add more pool data here
];

export default function Pools() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02]">
      <h1 className="text-4xl text-white text-center py-10">Pools</h1>
      <table className="w-full text-left text-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Token Pair</th>
            <th className="px-4 py-2">APR</th>
            <th className="px-4 py-2">Liquidity</th>
            <th className="px-4 py-2">Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {poolData.map((pool) => (
            <tr key={pool.id}>
              <td className="border px-4 py-2">{pool.name}</td>
              <td className="border px-4 py-2">
                {pool.token1}/{pool.token2}
              </td>
              <td className="border px-4 py-2">{pool.apr}</td>
              <td className="border px-4 py-2">${pool.liquidity}</td>
              <td className="border px-4 py-2">${pool.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}