import { Link } from "react-router-dom";
import { AuthContext, } from "../Provider/AuthProvider";
import {useContext} from "react";


const Register = () => {

    const { createNewUser, setUser}= useContext(AuthContext)
    const handleSubmit =(e) =>{
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log({name,photo,email,password})

        createNewUser(email,password)
        .then(result =>{
           const user = result.user; 
           setUser(user)
           console.log(user)
        })

        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.errorMessage;
            console.log(errorCode,errorMessage)
        })

        
    }
    return (
        <div className="min-h-screen flex justify-center">

            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
                <h2 className="font-semibold text-xl text-center ">Register your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input name="photo" type="text" placeholder="text" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>

                    </div>
                    <p className="text-center font-semibold">
                        Already  have an account ? {""} <Link to="/auth/Login" className="text-red-500">Register</Link>
                    </p>
                </form>

            </div>
        </div>
    );
};

export default Register;