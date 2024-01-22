import Image from "next/image";
import Header from "./component/Header";
import LatestBlog from "./component/LatestBlog";
import OtherBlogs from "./component/OtherBlogs";
import Popular from "./component/Popular";
import Copyright from "./component/Copyright";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-[426px]:px-10 max-[376px]:px-8 px-16 py-12 max-[425px]:py-8 gap-4">

      <Header/>
      <div className="w-full md:h-[55vh] h-[75vh]  md:flex ">
        
      <LatestBlog/>
      <OtherBlogs/>
      </div>
      <div className="w-full h-fit flex  ">
        <Popular/>
      </div>

      {/* <Copyright/> */}

      
    </main>
  );
}
