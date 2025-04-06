import { End1 } from "./sections/end1";
import { End2 } from "./sections/end2";
import Footer from "./sections/footer";
import { Hero } from "./sections/heroSection";
import { Middle1 } from "./sections/middle1";
import { Middle2 } from "./sections/middle2";


export default function LandingPage(){
    return (
        <div  className="flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center h-full w-full">
                <Hero/>
                <Middle1/>
                <Middle2/>
                <End1/>
                <End2/>
                <Footer/>
            </div>
        </div>
    )
}