import React from 'react';
import Link from 'next/link'

export default function AuthErrorRenderer({code}) {
    if(!code)return null;
    switch (code) {
        case 'USEREXISTS':
            return (<p className="alert alert-danger">
                It appears a user with this email address is already registered. <Link href={'/login'} className={'alert-link ml-1'}>Click here to login to your account</Link>
            </p>);
        case 'INCORRECTPASSWORD':
            return (<p className="alert alert-danger">Username or password is incorrect. Have you <Link href={'/forgot-password'} className={'alert-link'}>forgotten your password ?</Link></p>);
        case 'USERDOESNOTEXISTS':
            return (<p className="alert alert-danger">No account is registered with this email address.  <Link href={'/create-account'} className={'alert-link'}>Click here to signup for a new account</Link></p>);
        case 'REGISTRATIONNOTALLOWED':
            return <p className={"alert alert-danger"}>We are currently not accepting new signups</p>
        case 'EMAILREQUIRED':
            return <p className={"alert alert-danger"}>Email address is required</p>
        case 'LINKEXPIRED':
            return <p className={"alert alert-danger"}>The password reset link has expired</p>
        case 'EMAILINVALID':
            return <p className={"alert alert-danger"}>Email address is invalid</p>
        case 'ALLFIELDS':
            return <p className={"alert alert-danger"}>You need to fill all fields correctly</p>
        default:
            return <FormattedError/>;
    }
}

function FormattedError({id}) {
    return (<p className="alert alert-danger">Network error</p>);
}
