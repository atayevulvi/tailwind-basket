import React from "react";
import Marquee from "react-fast-marquee";
import sekil5 from '../assets/sekil5.avif'
import sekil6 from '../assets/sekil6.avif'
import sekil7 from '../assets/sekil7.jpg'
import sekil8 from '../assets/sekil8.png'
import sekil9 from '../assets/sekil9.jpg'
import sekil10 from '../assets/sekil10.webp'
const App = () => (
    <section className="hero bg-slate-200 my-5">
    <div className="container-xxl">
        <Marquee>
            <div className="flex gap-7">
                <img className="w-40  h-32  object-cover" src={sekil5} alt="" />
                <img className="w-40  h-32  object-cover" src={sekil7} alt="" />
                <img className="w-40  h-32  object-cover" src={sekil8} alt="" />
                <img className="w-40  h-32  object-cover" src={sekil6} alt="" />
                <img className="w-40  h-32  object-cover" src={sekil9} alt="" />
                <img className="w-40  h-32  object-cover" src={sekil10} alt="" />
            </div>
        </Marquee>
    </div>
</section>
);

export default App;