const Footer = () => {
    return (
        <div className={'footer'}>
            <p><strong>Finally, A Gentle way to Detangle Curly Hair</strong></p>
            <style jsx>{`
                .footer {
                  background-color: white;
                  color: black;
                  text-align: center;
                  padding: 1rem 0;
                } 
                p {
                  margin: 0;
                }
            `}</style>
        </div>
    );
};

export default Footer;