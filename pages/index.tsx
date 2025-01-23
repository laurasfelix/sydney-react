//pages/index.tsx
import Navbar from '../components/navbar'

export default function Home() {
  return (
    
   <div className="font-[family-name:var(--font-gloria-hallelujah)">
    <Navbar />

    <div className="container">


      <div className="welcome-text">
        <div className="title text-2xl shared-hover-effect">   this is <span className="sydney"> sydney&apos;s</span> story </div>

        <div className="container-text text-m mt-4">
          <div> 
          <span className="sydney shared-hover-effect"> Sydney </span> <span className="sydney shared-hover-effect"> Claire </span> <span className="sydney shared-hover-effect"> Hoppenworth </span> was born <span className="hover:text-4xl hover:text-red-500"> 21 </span>(!!) years ago in Chicago to Mike and Leni Manaa-Hoppenworth.
          </div>

          <div>
            This is a celebration of her. <span className="hehehe"> Also includes some additional commentary... </span>
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
