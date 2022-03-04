import React from 'react';
import BoringAvatar from 'boring-avatars';
import Image from "next/image";
import userimage from "../../public/b-logo.png";

function Avatar({ src, size, style, alt, identifier }) {
    const st = {
        width: size, height: size, borderRadius: size / 2, objectFit: 'cover',
        ...(style || {}),
    }
    if (src) {
        return (
            <img src={src}
                style={st}
                className={'shadow-sm'}
                alt={alt}
            />
        );
    } else {
        return <div style={st} className={'shadow-sm'}>

            <Image src={userimage} height={st.height} width={st.width} alt={'behairful-logo'} />

             {/* <BoringAvatar size={size} name={identifier} variant={"beam"} /> */}
        </div>
    }
}

export default Avatar;