import Image from "next/Image";

const ImageRow = ({ src1, src2, src3 }) => {
    return (
        <div className = "row">
            <div className = "col-4 col-sm-4 col-md-4">
                <Image src={src1} width={'170px'} height={'170px'} alt={'image-row'} />
            </div>
            <div className = "col-4 col-sm-4 col-md-4">
                <Image src={src2} width={'170px'} height={'170px'} alt={'image-row'} />
            </div>
            <div className = "col-4 col-sm-4 col-md-4">
                <Image src={src3} width={'170px'} height={'170px'} alt={'image-row'} />
            </div>
        </div>
    )
}

const Inspiration = () => {
    return (
        <div className = "inspiration-grid">
            <h3>Inspiration</h3>
            <div className = "row-item">
                <ImageRow src1={'/img1.jpg'} src2={'/img1.jpg'} src3={'/img1.jpg'} />
                <ImageRow src1={'/img2.jpg'} src2={'/img2.jpg'} src3={'/img2.jpg'} />
                <ImageRow src1={'/img3.jpg'} src2={'/img3.jpg'} src3={'/img3.jpg'} />
            </div>
            <style jsx>{`
            .inspiration-grid {
                background-color: black;
                color: white;
                display: grid;
                justify-content: center;
            }
            .row-item {
                margin-bottom: 5rem;
                padding: 1rem;
                background-color: ghostwhite;
                border-radius: 5px;
            }
            h3 {
                background-color: black;
                color: white;
                text-align: center;
                margin-bottom: 2rem;
            }
        `}</style>
        </div>
    );
}

export default Inspiration