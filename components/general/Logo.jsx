import Image from "next/image";
import logomain from "../../public/behairful-logo-main.svg";
import logomobile from "../../public/behairful-partners-logo-ai-mobile.svg";


const Logo = () => {
    return (
        <header style={{textAlign: "center", padding: "2.5rem"}}>
            <Image src={logomain} width={'259px'} height={'146px'} alt={'behairful-logo'} />
             <div class="signupheader"> 
                <span>Partner hub</span><Image src={logomobile} width={'88px'} height={'88px'} alt={'behairful-logo'} class="logolmobile" />
            </div>
        </header>
    );
}

export default Logo