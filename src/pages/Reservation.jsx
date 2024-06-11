// Personelwork.js

import React, { useEffect, useState } from "react";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Toggle from "../components/Toggle";
import Body from "../components/Body";
import Swal from "sweetalert2";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

export default function Reservation() {
  const [isAsideOpen, setAsideOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data here
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "error",
          text: err.message,
        });
      }
    };
    fetchData();
  }, []);

  const toggleAside = () => {
    setAsideOpen(!isAsideOpen);
  };

  const ManueData = [
    { id: 1, name: "ระบบจองห้องประชุม", color: "primary", icon: 'fa-solid fa-handshake',url:'https://app2.erdi.cmu.ac.th/hallbooking/' },
    { id: 2, name: "ระบบจองรถ", color: "success", icon: 'fa-solid fa-car',url:'https://app2.erdi.cmu.ac.th/carbooking/' },
  ];

  const ChangePage = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className="min-height-300 position-absolute w-100 vh-100 auto p-4"
      style={{
        background:
          "linear-gradient(90deg, rgba(126,139,238,1) 0%, rgba(134,187,139,1) 100%)",
      }}
    >
      <Aside toggleAside={toggleAside} isDisabled={isModalOpen} />
      <main className="main-content position-relative border-radius-lg">
        <Navbar isOpen={isAsideOpen} toggleAside={toggleAside} />
        <Content>
          
            {ManueData.map((item, manueIndex) => (
              <div className="row" key={manueIndex}>
                <Link data-bs-toggle="modal" data-bs-target="#modalSinglePage" onClick={() => ChangePage(item)} to='#'>
                  <Body className='p-5' col='12 mt-3 icon-zoom' color={`${item.color}`}>
                    <h4 className="d-flex align-items-center p-1"><i className={`${item.icon} fa-2x me-3`}></i>{item.name}</h4>
                  </Body>
                </Link>
              </div>
            ))}
          
        </Content>
        <Footer />
      </main>
      <Toggle />
      {selectedItem && (
        <Modal id="modalSinglePage" title={selectedItem.name} size="xl">
          <p>รายละเอียดของ: {selectedItem.name}</p>
          <iframe src={`${selectedItem.url}`} style={{width:'100%',height:'700px'}} title="Iframe Example"></iframe>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal} data-bs-dismiss="modal">ปิด</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
