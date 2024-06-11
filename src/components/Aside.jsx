// Aside.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/style.css'; // Ensure correct CSS file path

export default function Aside({ isOpen, toggleAside, isDisabled }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`sidenav bg-light navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 ${isOpen ? 'show' : ''}`}
      id="sidenav-main"
      style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          onClick={toggleAside}
        ></i>
        <Link className="navbar-brand m-0" to="/">
          <img src="/assets/img/erdi.png" className="navbar-brand-img h-100" alt="main_logo" />
          <span className="ms-1 font-weight-bold">EOS</span>
        </Link>
      </div>

      <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          <li className="nav-item icon-zoom">
            <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item icon-zoom">
            <Link className={`nav-link ${isActive('/info') ? 'active' : ''}`} to="/info">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-circle-08 text-warning text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">ข้อมูลบุคคล</span>
            </Link>
          </li>
          <li className="nav-item icon-zoom">
            <Link className={`nav-link ${isActive('/personelwork') ? 'active' : ''}`} to="/personelwork">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-single-02 text-success text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">งานบุคลากร</span>
            </Link>
          </li>
          <li className="nav-item icon-zoom">
          <Link className={`nav-link ${isActive('/management') ? 'active' : ''}`} to="/management">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-money-coins text-info text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">ระบบจัดการ</span>
            </Link>
          </li>
          <li className="nav-item icon-zoom">
          <Link className={`nav-link ${isActive('/welfarebenefit') ? 'active' : ''}`} to="/welfarebenefit">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-favourite-28 text-danger text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">งานสวัสดิการ</span>
            </Link>
          </li>
          <li className="nav-item icon-zoom">
          <Link className={`nav-link ${isActive('/reservation') ? 'active' : ''}`} to="/reservation">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-calendar-grid-58 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">ระบบจอง</span>
              </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
