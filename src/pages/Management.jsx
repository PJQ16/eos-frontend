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
import Table from "../components/Table";
import Tabs from "../components/Tabs";
import axios from "axios";
import config from "../config";

export default function Management() {
  const [isAsideOpen, setAsideOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [userData,setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data here
        const res = await axios.get(config.urlApi + `/users`);
        setUserData(res.data.result[0]);
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

  const tabsData = [
    {
      id: '1',
      label: 'พนักงานสถานะปกติ',
      content:
        <Table design='table-striped'>
   
      <tr  className="font-weight-bold mb-0"> 
        <th>ลำดับ</th>
        <th>ชื่อ</th>
        <th>ตำแหน่ง</th>
        <th>Username</th>
        <th>รหัสเปิดประตู</th>
        <th>รหัสบัตรตอกเข้างาน</th>
        <th>สถานะพนักงาน</th>
        <th>จัดการ</th>
      </tr>
     {userData.filter(data => data.crdtuser_status === 'ปกติ')
              .map((data, dataIndex) => (
      <tr key={dataIndex}  className="text-md font-weight-bold mb-0"> 
      <td>{dataIndex +1}</td>
      <td>{data.crdtuser_name} ({data.crdtuser_nick})</td>
      <td>{data.crdtuser_position}</td>
      <td>{data.crdtuser_username}</td>
      <td>{data.crdtuser_taf_code}</td>
      <td>{data.crdtuser_taf_code2}</td>
      <td>{data.crdtuser_status}</td>
      <td></td>
      </tr>
      ))}
 
    <tr  className="font-weight-bold mb-0"> 
        <th>ลำดับ</th>
        <th>ชื่อ</th>
        <th>ตำแหน่ง</th>
        <th>Username</th>
        <th>รหัสเปิดประตู</th>
        <th>รหัสบัตรตอกเข้างาน</th>
        <th>สถานะพนักงาน</th>
        <th>จัดการ</th>
      </tr>

        </Table>
    },
    {
      id: '2',
      label: 'พนักงานลาออก',
      content:  <Table design='table-striped'>
   
      <tr  className="font-weight-bold mb-0"> 
        <th>ลำดับ</th>
        <th>ชื่อ</th>
        <th>ตำแหน่ง</th>
        <th>Username</th>
        <th>รหัสเปิดประตู</th>
        <th>รหัสบัตรตอกเข้างาน</th>
        <th>สถานะพนักงาน</th>
        <th>จัดการ</th>
      </tr>
  
  
      {userData.filter(data => data.crdtuser_status === 'ลาออก')
              .map((data, dataIndex) => (
      <tr key={dataIndex}  className=" font-weight-bold mb-0"> 
      <td>{dataIndex +1}</td>
      <td>{data.crdtuser_name} ({data.crdtuser_nick})</td>
      <td>{data.crdtuser_position}</td>
      <td>{data.crdtuser_username}</td>
      <td>{data.crdtuser_taf_code}</td>
      <td>{data.crdtuser_taf_code2}</td>
      <td>{data.crdtuser_status}</td>
      <td></td>
      </tr>
      ))}
 
    <tr  className="font-weight-bold mb-0 text-center"> 
        <th>ลำดับ</th>
        <th>ชื่อ</th>
        <th>ตำแหน่ง</th>
        <th>Username</th>
        <th>รหัสเปิดประตู</th>
        <th>รหัสบัตรตอกเข้างาน</th>
        <th>สถานะพนักงาน</th>
        <th>จัดการ</th>
      </tr>

        </Table>
    }
  ];
  const empSystem = () =>(
    <>
    <Tabs tabs={tabsData}/>
    </>
  )

  const workTimeSysyem = () =>(
    <>
    x
    </>
  )

  const ManueData = [
    { id: 1, name: "จัดการข้อมูลพนักงาน", color: "primary", icon: 'fa-solid fa-circle-info',content:empSystem() },
    { id: 2, name: "จัดการข้อมูลเข้างาน", color: "success", icon: 'fa-solid fa-door-open',content:workTimeSysyem() },
    { id: 3, name: "บันทึกพนักงานลาป่วย", color: "warning", icon: 'fa-solid fa-house-chimney-medical' },
    { id: 4, name: "พนักงานทำงาน เสาร์-อาทิตย์", color: "info", icon: 'fa-solid fa-hourglass-start' },
    { id: 5, name: "พนักงานทำงานนอกสถานที่", color: "danger", icon: 'fa-solid fa-route' },
    { id: 6, name: "สถิติการ ขาด/ลา/มาสาย", color: "light", icon: 'fa-solid fa-chart-simple' },
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
      className="min-height-300 position-absolute w-100 auto p-4"
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
                    <h4 className="d-flex align-items-center  p-1"><i className={`${item.icon} fa-2x me-3`}></i>{item.name}</h4>
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
          {selectedItem.content}
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal} data-bs-dismiss="modal">ปิด</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
