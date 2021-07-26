import Image from "next/image";
import React from "react";

const SideImage = () => {
    return <Image
        src = {'/goli_left_side.png'}
        width = {'550px'}
        height = {'550px'}
        alt = {'goli-image'}
    />
}

export default SideImage