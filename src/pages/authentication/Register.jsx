import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";

const Register = () => {
     const {createSignUp,updateUserProfile,setUser,}=useAuth()
     const navigate=useNavigate()
     const location=useLocation()

     const from=location.state || '/' ;

    const handleRegisterButton=async(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const photoURL=form.photoURL.value;
        const password=form.password.value;
        console.log({name,email,password,photoURL})
  try{
      const result=await createSignUp(email,password)
      const update=await updateUserProfile(name,photoURL)
      setUser(update)
      navigate(from,{replace:true})
      if(result){
        Swal.fire('successfully registered')
      }
  }
  catch(err){
    Swal.fire(err.message)
    
  }
    
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegisterButton} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input type="url" name="photoURL" placeholder="your photoURL" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">if you do not have an account <Link to='/login' className="btn btn-link"> Log in</Link></span>
                </label>              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;