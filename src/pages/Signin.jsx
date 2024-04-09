import background from "../images/signin_bg.png"
import google from "../images/logo_google.png"
import logo from "../images/logo.png"
import { NavLink } from "react-router-dom"
import Signincard from "../templates/Signincard"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"


export default function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential);
        }).catch((error)=>{
            console.log(error);
        })
    }


    return (
        <div className="flex w-screen h-screen">
            <div className="flex justify-center items-center w-5/12 h-full bg-red-200/90">
                <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 shadow-black">

                    <form className="w-full" onSubmit={signIn}>

                        <div className="text-center">
                            <NavLink to="/">
                                <img className="mx-auto mb-3" src={logo} alt="" />
                            </NavLink>

                            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
                            <p className="mt-2 text-gray-500">Sign in below to access your account</p>
                        </div>
                        <div className="mt-5">
                            <div action="">
                                <div className="relative mt-6">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                    <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transdiv text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                                </div>
                                <div className="relative mt-6">
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                    <label for="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transdiv text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                                </div>
                                <div className="w-full px-3 pt-7 flex justify-center items-center">
                                    <a href="#!"
                                        className=" font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                                        Forgot password
                                    </a>
                                </div>


                                <div className="my-6">
                                    <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                                </div>

                                <div className="my-6">
                                    <button type="submit" className="flex justify-center items-center gap-x-2 w-full rounded-md bg-white border border-solid border-black/30 px-3 py-3 text-black focus:bg-gray-400 focus:outline-none">
                                        <img className="size-7" src={google} alt="" />
                                        Sign In With Google
                                    </button>
                                </div>

                                <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                                    <NavLink to="/signupselect"
                                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                                        up
                                    </NavLink>.
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-7/12 h-full bg-yellow-200">
                <img className="w-full h-screen" src={background} alt="" />
            </div>
        </div>
    )
}