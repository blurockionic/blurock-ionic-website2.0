import Image from "next/image";
import React from "react";

const homeCard2 : React.FC <{
    title :string ; 
    description: string ;
    imgSrc : string ;
    imgSrc2 : string ;
    }> = ({title, description, imgSrc, imgSrc2}) =>{
    return (
        <div className="p-[20px] flex flex-col gap-[24px] shadow-md rounded-md text-left border-[#0050ff] border-2">
            <div className="flex justify-between">
                <Image src={imgSrc} alt="product" width={20} height={24} />
                <Image src={imgSrc2} alt="blurock" width={20} height={24} />
            </div>
            <h1 className="font-bold text-[20px]">{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default homeCard2



