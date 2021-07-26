import React from 'react';

function OurGummy(props) {
    return (
        <div></div>
    );
}

export async function getServerSideProps(context) {
    const cookies = context.req.cookies;
    return !cookies.access_token ? {
        redirect:{
            destination:'/login',
            permanent:false
        }
    }: {
        props:{

        }
    }
}

export default OurGummy;
