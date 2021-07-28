import Image from "next/image";

const SideImage = ({ width, height }) => {
    return <Image
        src = {'/left_image.png'}
        width = {width}
        height = {height}
        alt = {'left_side-image'}
    />
}

export default SideImage