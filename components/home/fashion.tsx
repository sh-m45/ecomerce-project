import { Fragment } from "react/jsx-runtime";

export default function Fashion() {
    const mensFashion = ["SummerWear", "Polos", "Bottoms", "Sportswear", "Swimwear", "Footwear", "Watches"]
    const womensFashion = ["SummerWear", "Swimwear", "Sportswear", "Bottoms", "Dresses", "Bags", "Footwear"]
    const kidsFashion = ["SummerWear", "Tops", "Sportswear", "Swimwear", "Bottoms", "Footwear", "Backpacks"]
    const types = [mensFashion, womensFashion, kidsFashion]
    return (
        <Fragment>
            <div className="bg-gray-200 py-10 px-4 mx-2">
                {types.map((type, index) => (
                    <div key={index} className="py-4">
                        <div className="pb-5 font-bold text-2xl text-gray-700 font-serif"> 
                            {
                                index == 0 ? "Men's Fashion" : index == 1 ? "Women's Fashion" : "Kids' Fashion"
                            }
                            
                            </div>
                        <div className="grid grid-cols-7 gap-4 rounded-2xl">
                            {type.map((item, id) => (
                                <div key={id}>
                                    <div className="h-50">
                                        {index == 0 ? <img src={`/images/fashion/men/${item}.jpg`} alt="fashion wear" className="w-full h-full rounded-4xl" /> :
                                            index == 1 ? <img src={`/images/fashion/women/${item}.jpg`} alt="fashion wear" className="w-full h-full rounded-4xl" /> :
                                                index == 2 ? <img src={`/images/fashion/kids/${item}.jpg`} alt="fashion wear" className="w-full h-full rounded-4xl" /> : <></>}

                                    </div>
                                    <div className="flex justify-center font-bold py-1 text-gray-700">
                                        <p>{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}