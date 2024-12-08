import Image from "next/image";
import React from "react";

const homeCard: React.FC<{
    title :string ; 
    description: string
    imgSrc : string 
    }> = ({title, description, imgSrc}) => {
    return(
        <div className="p-[30px] flex flex-col justify-center gap-[27px] items-center bg-white shadow-md rounded-md">
            <Image src={imgSrc} alt="product" width={40} height={48.88}/>
            <h1 className="font-bold text-[20px]">{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default homeCard;