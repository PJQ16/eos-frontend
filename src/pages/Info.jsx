import React, { useEffect, useState } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Toggle from '../components/Toggle';
import Swal from 'sweetalert2';
import axios from 'axios';
import config from '../config';

export default function Info() {
  const [userInfo,setUserInfo] = useState('');
  const Id = 278;
  useEffect(()=>{
    fetchData();
  },[Id]);

  const fetchData = async()=>{
    try{
      const res = await axios.get(config.urlApi+`/users/${Id}`);
      setUserInfo(res.data.result[0]);
    }catch(err){
      Swal.fire(
        {
          icon:'error',
          title:'error',
          text:err.message
        }
      );
    }
  }


    return (
        <div className="min-height-300 position-absolute w-100" style={{ background: 'linear-gradient(90deg, rgba(126,139,238,1) 0%, rgba(134,187,139,1) 100%)' }}>
           <Aside/>
            <main className="main-content position-relative border-radius-lg">
            <Navbar />
            
                <Content>
                <div className="card shadow-lg mx-4 card-profile">
        <div className="card-body p-3">
          <div className="row gx-4">
            <div className="col-auto">
              <div className="avatar avatar-xl position-relative">
                <img
                  src="../assets/img/team-1.jpg"
                  alt="profile_image"
                  className="w-100 border-radius-lg shadow-sm"
                />
              </div>
            </div>
            <div className="col-auto my-auto">
              <div className="h-100">
                <h5 className="mb-1">{userInfo.crdtuser_fname} {userInfo.crdtuser_lname}</h5>
                <p className="mb-0 font-weight-bold text-sm">Public Relations</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3"
            >
              <div className="nav-wrapper position-relative end-0">
                <ul className="nav nav-pills nav-fill p-1" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link mb-0 px-0 py-1 active d-flex align-items-center justify-content-center"
                      data-bs-toggle="tab"
                      href="javascript:;"
                      role="tab"
                      aria-selected="true"
                    >
                      <i className="ni ni-app"></i>
                      <span className="ms-2">App</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center"
                      data-bs-toggle="tab"
                      href="javascript:;"
                      role="tab"
                      aria-selected="false"
                    >
                      <i className="ni ni-email-83"></i>
                      <span className="ms-2">Messages</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center"
                      data-bs-toggle="tab"
                      href="javascript:;"
                      role="tab"
                      aria-selected="false"
                    >
                      <i className="ni ni-settings-gear-65"></i>
                      <span className="ms-2">Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            </div>
            </div>
            </div>



            <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex align-items-center">
                  <p className="mb-0">Edit Profile</p>
                  <button className="btn btn-primary btn-sm ms-auto">
                    Settings
                  </button>
                </div>
              </div>
              <div className="card-body">
                <p className="text-uppercase text-sm">User Information</p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="example-text-input" className="form-control-label"
                        >Username</label>
                      
                      <input
                        className="form-control"
                        type="text"
                        value={userInfo.crdtuser_username} 
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="example-text-input" className="form-control-label"
                        >Email address</label
                      >
                      <input
                        className="form-control"
                        type="email"
                        value={userInfo.crdtuser_email} 
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="example-text-input" className="form-control-label"
                        >First name</label>
                      <input className="form-control" type="text" value={userInfo.crdtuser_fname}  />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="example-text-input" className="form-control-label"
                        >Last name</label
                      >
                      <input className="form-control" type="text" value={userInfo.crdtuser_lname} />
                    </div>
                  </div>
                </div>
                <hr className="horizontal dark" />
                <p className="text-uppercase text-sm">Contact Information</p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="example-text-input" className="form-control-label"
                        >Address</label
                      >
                      <input
                        className="form-control"
                        type="text"
                        value={userInfo.crdtuser_address1} 
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="example-text-input" className="form-control-label"
                        >City</label
                      >
                      <input
                        className="form-control"
                        type="text"
                        value="New York"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="example-text-input" className="form-control-label"
                        >Country</label
                      >
                      <input
                        className="form-control"
                        type="text"
                        value="United States"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="example-text-input" className="form-control-label"
                        >Postal code</label
                      >
                      <input className="form-control" type="text" value="437300" />
                    </div>
                  </div>
                </div>
                <hr className="horizontal dark" />
                <p className="text-uppercase text-sm">About me</p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="example-text-input" className="form-control-label"
                        >About me</label
                      >
                      <input
                        className="form-control"
                        type="text"
                        value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-profile">
              <img
                src="../assets/img/bg-profile.jpg"
                alt="Image placeholder"
                className="card-img-top"
              />
              <div className="row justify-content-center">
                <div className="col-4 col-lg-4 order-lg-2">
                  <div className="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                    <a href="javascript:;">
                      <img
                        src="../assets/img/team-2.jpg"
                        className="rounded-circle img-fluid border border-2 border-white"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3"
              >
                <div className="d-flex justify-content-between">
                  <a
                    href="javascript:;"
                    className="btn btn-sm btn-info mb-0 d-none d-lg-block"
                    >Connect</a
                  >
                  <a
                    href="javascript:;"
                    className="btn btn-sm btn-info mb-0 d-block d-lg-none"
                    ><i className="ni ni-collection"></i
                  ></a>
                  <a
                    href="javascript:;"
                    className="btn btn-sm btn-dark float-right mb-0 d-none d-lg-block"
                    >Message</a
                  >
                  <a
                    href="javascript:;"
                    className="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none"
                    ><i className="ni ni-email-83"></i
                  ></a>
                </div>
              </div>
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col">
                    <div className="d-flex justify-content-center">
                      <div className="d-grid text-center">
                        <span className="text-lg font-weight-bolder">22</span>
                        <span className="text-sm opacity-8">Friends</span>
                      </div>
                      <div className="d-grid text-center mx-4">
                        <span className="text-lg font-weight-bolder">10</span>
                        <span className="text-sm opacity-8">Photos</span>
                      </div>
                      <div className="d-grid text-center">
                        <span className="text-lg font-weight-bolder">89</span>
                        <span className="text-sm opacity-8">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h5>Mark Davis<span className="font-weight-light">, 35</span></h5>
                  <div className="h6 font-weight-300">
                    <i className="ni location_pin mr-2"></i>Bucharest, Romania
                  </div>
                  <div className="h6 mt-4">
                    <i className="ni business_briefcase-24 mr-2"></i>Solution
                    Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2"></i>University of Computer
                    Science
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>


                </Content>
                <Footer />
            </main>
            <Toggle />
        </div>
    );
}
