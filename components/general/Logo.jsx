import Image from "next/image";
import logo from "../../public/behairful-logo-main.svg";
import logomobile from "../../public/behairful-logo-main.svg";

const Logo = () => {
    return (
        <header class="logologin" style={{textAlign: "center"}}>
            <Image src={logo} width={'259px'} height={'146px'} alt={'behairful-logo'} class="logologindesign" />
            <div class="signupheader"> 
                <span>Partner hub</span><Image src={logomobile} width={'88px'} height={'88px'} alt={'behairful-logo'} class="logolmobile" />
            </div>
        </header>
    );
}

export default Logo