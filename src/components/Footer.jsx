import React from 'react'

export default function Footer() {
  return (
    <footer className="footer pt-3  flex-wrap  " >
    <div className="container-fluid">
      <div className="row align-items-center justify-content-lg-between">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <div className="copyright text-center text-sm text-muted  text-lg-start">
            © <script>
              document.write(new Date().getFullYear())
            </script>,
            made with <i className="fa fa-heart"></i> by
            <span className="font-weight-bold" target="_blank">Creative Tim</span>
            for a better web.
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="nav nav-footer justify-content-center justify-content-lg-end">
            <li className="nav-item">
              <span className="nav-link text-muted" target="_blank">Creative Tim</span>
            </li>
            <li className="nav-item">
              <span className="nav-link text-muted" target="_blank">About Us</span>
            </li>
            <li className="nav-item">
              <span className="nav-link text-muted" target="_blank">Blog</span>
            </li>
            <li className="nav-item">
              <span className="nav-link pe-0 text-muted" target="_blank">License</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}
