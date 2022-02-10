import Image from "next/image";
import logomain from "../../public/behairful-logo-main.svg";



const Logo = () => {
    return (
        <header style={{textAlign: "center", padding: "2.5rem"}}>
            <div className="homelogotop"> <Image src={logomain} width={'259px'} height={'146px'} alt={'behairful-logo'} className="logogeneral" />
            </div>
             <div className="signupheader"> 
                <span>Partner hub</span>
                <span className="logomobile"></span>
            </div>
        </header>
    );
}

export default Logo