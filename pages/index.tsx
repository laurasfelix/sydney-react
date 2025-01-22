//pages/index.tsx
import Image from "next/image";
import Navbar from '../components/navbar'

export default function Home() {
  return (
    
   <div className="font-[family-name:var(--font-gloria-hallelujah)">
    <Navbar />

    <div className="container">


      <div className="welcome-text">
        <div className="title text-2xl shared-hover-effect">   this is <span className="sydney"> sydney's</span> story </div>

        <div className="container-text text-m mt-4">
          <div>
            Sydney Claire Hoppenworth was born 21 (!!) years ago in Chicago to Mike and Leni Manaa-Hoppenworth.
          </div>

          <div>
            This is a celebration of her. Also includes some additional commentary...
          </div>
        </div>

      </div>


      <div className="sunflower inline-block">
        <img className="sunflower-img" src="/sunflower_little.png" />
      </div>


    </div>
   
   </div>
  );
}
