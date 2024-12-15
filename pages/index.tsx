//pages/index.tsx
import Image from "next/image";
import Navbar from '../components/navbar'

export default function Home() {
  return (
    
   <div className="font-[family-name:var(--font-gloria-hallelujah)">
    <Navbar />
    <div className="sunflower">
      <img className="sunflower-img" src="/sunflower_little.png" />
    </div>

    <div className="container">

      <div className="title">

        this is sydney's story

      </div>

    </div>
   
   </div>
  );
}
