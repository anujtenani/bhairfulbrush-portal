import React from 'react';
import BoringAvatar from 'boring-avatars';
function Avatar({src, size, style, alt, identifier}) {
    const st = {
        width: size, height: size, borderRadius: size / 2, objectFit: 'cover',
        ...(style || {}),
    }
    if(src){
    return (
        <img src={src}
             style={st}
             className={'shadow-sm'}
             alt={alt}
        />
    );
    }else{
        return  <div style={st} className={'shadow-sm'}>
            <BoringAvatar size={size} name={identifier} variant={"beam"}/>
        </div>
    }
}

export default Avatar;
