import Image from "next/image";

const Logo = () => {
    return (
        <header style={{textAlign: "center", padding: "2.5rem"}}>
            <Image src={'/login-logo.png'} width={'259px'} height={'146px'} alt={'behairful-logo'} />
        </header>
    );
}

export default Logo