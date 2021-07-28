import Image from "next/image";

const Logo = () => {
    return (
        <div style={{textAlign: "center", padding: "2.5rem"}}>
            <Image src={'/behairful-logo.png'} width={'180px'} height={'95px'} alt={'behairful-logo'} />
        </div>
    );
}

export default Logo