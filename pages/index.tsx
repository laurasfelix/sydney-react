//pages/index.tsx
import Image from "next/image";
import Navbar from '../components/navbar'

export default function Home() {
  return (
    
   <div className="font-[family-name:var(--font-gloria-hallelujah)">
    <Navbar />

    <div className="container">


      <div className="title shared-hover-effect">

        this is <span className="sydney"> sydney's</span> story

      </div>

      <div className="sunflower inline-block">
        <img className="sunflower-img" src="/sunflower_little.png" />
      </div>

    </div>
   
   </div>
  );
}
