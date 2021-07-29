import Image from "next/image";

const SideImage = ({ width, height }) => {
    return <Image
        src = {'/left_image.png'}
        width = {width}
        height = {height}
        alt = {'behairful-image'}
    />
}

export default SideImage