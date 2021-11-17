import Image from "next/image";

const Logo = () => {
    return (
        <header class="logologin" style={{textAlign: "center"}}>
            <Image src={'/behairful-logo-main.svg'} width={'259px'} height={'146px'} alt={'behairful-logo'} class="logologindesign" />
            <div class="signupheader"> 
                <span>Partner hub</span><Image src={'/behairful-partners-logo-ai-mobile.svg'} width={'88px'} height={'88px'} alt={'behairful-logo'} class="logolmobile" />
            </div>
        </header>
    );
}

export default Logo