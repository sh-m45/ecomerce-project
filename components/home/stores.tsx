import { Fragment } from "react/jsx-runtime";

export default function Stores() {
    const counts = [1,2,3,4,5,6,7,8,9,10,11,12]
    return(
        <Fragment>
            <h2 className="mt-10 px-3 mx-2 text-4xl font-bold">OFFICAL BRANDS STORES</h2>
            <div className="grid grid-cols-4 gap-5 pt-7 px-3 mx-2 mb-20"> 
                {counts.map((count:number, index:number)=> (
                    <div key={index} className="shadow-md rounded-4xl">  
                        <img src={`/images/stores/${count}.png`} alt="store" className="" />
                    </div>
                ))}
                
            </div>
        </Fragment>
    )
}