import Image from "next/image";

const Logo = () => {
    return (
        <header style={{textAlign: "center", padding: "2.5rem"}}>
            <Image src={'/behairful-logo.png'} width={'180px'} height={'95px'} alt={'behairful-logo'} />
        </header>
    );
}

export default Logo