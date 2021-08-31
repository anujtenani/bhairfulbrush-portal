import Image from "next/image";

const SideImage = ({ width, height }) => {
    return (
        <section className={"row"}>
            <div>
                <h2>Finally! A Platform Made For Influencers.</h2>

                <div className={"ml-5"}>
                    <Image
                        src = {'/Card.png'}
                        width = {width}
                        height = {height}
                        alt = {'behairful-image'}
                    />
                </div>
            </div>

            <style jsx>{`
                h2 {
                    padding-bottom: 2rem;
                    text-align: center;
                }
            `}</style>
        </section>
    )
}

export default SideImage