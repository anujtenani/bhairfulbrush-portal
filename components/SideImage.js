import Image from "next/image";

const SideImage = ({ width, height }) => {
    return (
        <div className={"behairful-image-style"}>
            <h2>Finally! A Platform Made For Influencers.</h2>
            <Image
                src = {'/left_image.png'}
                width = {width}
                height = {height}
                alt = {'behairful-image'}
            />
            <style jsx>{`
                .behairful-image-style {
                    display: flex;
                    flex-direction: column;
                }
                h2 {
                    padding-bottom: 2rem;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}

export default SideImage