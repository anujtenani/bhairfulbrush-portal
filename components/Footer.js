const Footer = () => {
    return (
        <div className={'footer'}>
            <h2 style={{textAlign: "center", paddingBottom: '1rem'}}>Behairful</h2>
            <h3 style={{textAlign: "center"}}>Menu</h3>
            <nav className = "nav menu">
                <a className = "nav-link" href = "#">Active</a>
                <a className = "nav-link" href = "#">Link</a>
                <a className = "nav-link" href = "#">Link</a>
                <a className = "nav-link" href = "#">Link</a>
            </nav>
            <h3 style={{textAlign: "center"}}>Social</h3>
            <nav className = "nav social">
                <a className = "nav-link" href = "#">Facebook</a>
                <a className = "nav-link" href = "#">Instagram</a>
                <a className = "nav-link" href = "#">Twitter</a>
            </nav>
            <hr />
            <p>&copy; 2021 Behairful. All rights reserved</p>
            <style jsx>{`
                .footer {
                    background-color: black;
                    color: white;
                }
                .menu {
                    justify-content: center;
                    padding-bottom: 1rem;
                }
                .social {
                    justify-content: center;
                    padding-bottom: 1rem;
                }
                a {
                    color: inherit;
                }
                hr {
                    background-color: white;
                    margin: 0 5rem 1rem 5rem;
                }
                p {
                    text-align: center;
                    margin: 0;
                    padding-bottom: 1rem;
                }
            `}</style>
        </div>
    );
};

export default Footer;