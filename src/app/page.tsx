import { GaugeDemo } from "@/components/GaugeDemo";
import { Gauge } from "@/components/ui/gauge";
import { WavesDemo } from "@/components/WavesDemo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden overflow-y-scroll gap-3">

      <div className="w-full h-full flex items-center justify-center">
        <GaugeDemo />
      </div>


      <div className="w-full h-full flex items-center justify-center">
        <WavesDemo />
      </div>
      


    
    </div>
  );
}
