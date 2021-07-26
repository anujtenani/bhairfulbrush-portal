import React, {useState} from "react";
import SideImage from "./SideImage";

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState(null);

    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className = "container-class">
            <div className = "row">
                <div className = "col-md-11 col-lg-9 col-xl-5 left-image">
                    <SideImage />
                </div>
                <div className = "col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7">
                    <div className={"flex-container"}>
                        <div className = "col-xl-9">
                            <form className={"form-container"} onSubmit={onFormSubmit}>
                                <h2 className={'forgot-password-title'}>Password Reset</h2>
                                <p className={'dashboard-title'}>Access your Dashboard</p>
                                <div className = "form-group">
                                    <label htmlFor = "exampleInputEmail1">Email Address</label>
                                    <input
                                        type = "email"
                                        className = "form-control"
                                        id = "exampleInputEmail1"
                                        aria-describedby = "emailHelp"
                                        placeholder={"Johndoe@email.com"}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button type = "submit" className = "btn btn-dark btn-style">
                                    Reset Password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                  .container-class {
                      background-color: black;
                      color: white;
                  }
                  .btn-style {
                    width: 100%;
                    margin: 0.5rem 0 2rem 0
                  }
                  .form-container {
                    padding: 2rem;
                    border-radius: 0.5%;
                    background-color: indianred;
                  }
                  .forgot-password-title {
                    text-align: center;
                    padding-bottom: 0.5rem;
                  }
                  .dashboard-title {
                    text-align: center;
                    padding-bottom: 0.5rem;
                  }
                  .flex-container {
                      display: flex;
                      padding: 6rem 4rem 8rem 4rem;
                      background-image: url('/form_bg.png');
                      background-repeat: no-repeat;
                      background-size: 55% 98%;
                      background-position: 330px;
                  }
                  .left-image {
                      padding: 2rem 2rem 4rem 5rem;
                      display: flex;
                      justify-content: flex-end;
                      align-items: center;
                  }
            `}</style>
        </div>
    );
}

export default ForgotPasswordForm