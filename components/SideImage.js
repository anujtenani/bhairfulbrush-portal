import Image from "next/image";

const SideImage = ({ width, height }) => {
    return <Image
        src = {'/goli_left_side.png'}
        width = {width}
        height = {height}
        alt = {'left_side-image'}
    />
}

export default SideImage