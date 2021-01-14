import React from 'react';
import { Session } from '../../requests';

function SignInPage(props) {

    function handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);
        // const params = {
        //     email: formData.get('email'),
        //     password: formData.get('password')
        // }
        // props.handleSignIn(params)

        Session.create({
            email: formData.get("email"),
            password: formData.get("password"),
        }).then((data) => {
            if (data.status === 401) {
                return data
            } else {
                // this.props.history.push("/");
                props.getCurrentUser();
            }
        });
    }

    return (
        <main>
            <h1>Sign In Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email'></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password'></input>
                </div>
                <input type='submit' value='SignIn'></input>
            </form>
        </main>
    )
}

export default SignInPage