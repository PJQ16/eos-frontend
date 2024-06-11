import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Login() {
    const navigate = useNavigate();

    const Checklogin = () =>{
        Swal.fire({
            icon:'success',
            title:'ยินดีต้อนรับ',
            showConfirmButton:false,
            timer:500
        });
        navigate('/');
    }
  return (
    <main className="main-content bg-white  mt-0">
    <section>
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
              <div className="card card-plain">
                <div className="card-header pb-0 text-start">
                  <h4 className="font-weight-bolder">Sign In</h4>
                  <p className="mb-0">Enter your email and password to sign in</p>
                </div>
                <div className="card-body bg-white">
                  <form role="form">
                    <div className="mb-3">
                      <input type="email" className="form-control form-control-lg" placeholder="Email" aria-label="Email"/>
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control form-control-lg" placeholder="Password" aria-label="Password"/>
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="rememberMe"/>
                      <label className="form-check-label" for="rememberMe">Remember me</label>
                    </div>
                    <div className="text-center">
                      <button type="button" onClick={Checklogin} className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</button>

                      <button type="button" onClick={Checklogin} className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">CMU</button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    Don't have an account?
                    <a href="javascript:;" className="text-primary text-gradient font-weight-bold">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column ">
              <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden">
                <span className="mask bg-gradient-primary opacity-6"></span>
                <h4 className="mt-5 text-white font-weight-bolder position-relative"><img src='/assets/img/erdi.png' /></h4>
                <p className="text-white position-relative">Energy Research and Development Institute Nakornping, Chiang Mai University. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}
