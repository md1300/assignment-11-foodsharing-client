import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { useEffect } from "react";


const LogIn = () => {
 const {signIn,googleSignIn,user,loading}=useAuth()
 const location=useLocation()
 const navigate=useNavigate()

 const form=location.state || '/'

 useEffect(()=>{
  if(user){
    return navigate('/')
  } 
 },[user,navigate])

//  handle google sign in button ---------------
const signInGoogle=async()=>{
  try{
    const result = await googleSignIn()
  console.log(result)
   navigate(form, {replace:true})

  }
  catch(err){
    console.log(err.message)
  }
}
//  handle sign in button ----------------
    const handleLogInButton=async(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log({email,password})
        try{
          const result=await signIn(email,password)
          console.log(result)
          navigate(form, {replace:true})
        }
        catch(err){
          console.log(err.message)
          form.reset()
        }
    }

if(user || loading) return

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogInButton} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span onClick={signInGoogle} className="label-text btn">sign in with google</span>
                </label>
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">if you do not have an account <Link to='/register' className="btn btn-link"> register</Link></span>
                </label>
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default LogIn;