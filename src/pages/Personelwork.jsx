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
import axios from "axios";
import config from "../config";

export default function Personelwork() {
  const [isAsideOpen, setAsideOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [workSum, setWorkSum] = useState([]);
  const [leaves, setLeves] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = '0022566';
        const res = await axios.get(config.urlApi + `/worksum/${id}`);
        const resLeves = await axios.get(config.urlApi + `/leaves/${id}`);

        setWorkSum(res.data.result);
        setLeves(resLeves.data.result);
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

  const formatThaiDate = (dateString) => {
    const date = new Date(dateString);
    const monthNamesThai = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];
    const month = monthNamesThai[date.getMonth()];
    const year = date.getFullYear() + 543; // แปลงเป็น พ.ศ.
    return `${month} ${year}`;
  }

  const chkLeave = (leave) => {
    switch (leave.crdtleave_type) {
      case "PRIVATE":
        return "ลากิจ";
      case "SICK":
        return "ลาป่วย";
      case "SUMMER":
        return "ลาพักร้อน";
      case "OTHER":
        return "อื่นๆ";
      default:
        return "ไม่ระบุ";
    }
  };

  const chkperiod = (leave) => {
    switch (leave.crdtleave_interval) {
      case "ALL":
        return "ลาทั้งวัน";
      case "MORNING":
        return "ลาช่วงเช้า";
      case "AFTERNOON":
        return "ลาช่วงบ่าย";
      default:
        return "ไม่ระบุ";
    }
  };

  const chkapprove = (leave) =>{
    switch (leave.crdtleave_result) {
      case "PROCESSING":
        return "ดำเนินการ";
      case "APPROVE":
        return "อนุมัติ";
      case "DISAPPROVE":
        return "ไม่อนุมัติ";
      case "CANCEL":
        return "ยกเลิก";
      default:
        return "ไม่ระบุ";
    }

  }

  const formatDateThai = ({value }) => {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 543;
    return `${day}/${month}/${year}`;
  };


  const calculateSums = () => {
    const sums = {
      cntlate: 0,
      normal: 0,
      sick: 0,
      summer: 0,
      other: 0
    };

    workSum.forEach(item => {
      sums.cntlate += item.crdtsumwork_cntlate;
      sums.normal += item.crdtsumwork_normal;
      sums.sick += item.crdtsumwork_sick;
      sums.summer += item.crdtsumwork_summer;
      sums.other += item.crdtsumwork_other;
    });

    return sums;
  };

const sums = calculateSums();

  const chenckWorkTime = () => (
    <Table design='table table-hover   bg-gradient-primary text-white  rounded text-center'>
            
            <tr>
              <th>เดือน</th>
              <th>สาย</th>
              <th>ลากิจ</th>
              <th>ลาป่วย</th>
              <th>ลาพักร้อน</th>
              <th>ลาอื่นๆ</th>
            </tr>


            {workSum.map((month, indexMonths) => (
              <tr key={indexMonths}>
                <td>{formatThaiDate(month.crdtsumwork_date)}</td>
                <td>{month.crdtsumwork_cntlate}</td>
                <td>{month.crdtsumwork_normal}</td>
                <td>{month.crdtsumwork_sick}</td>
                <td>{month.crdtsumwork_summer}</td>
                <td>{month.crdtsumwork_other}</td>
              </tr>
            ))}
            <tr>
              <th>รวม</th>
              <th>สาย {sums.cntlate} (ครั้ง)</th>
              <th>ลากิจ {sums.normal} (วัน)</th>
              <th>ลาป่วย {sums.sick} (วัน)</th>
              <th>ลาพักร้อน {sums.summer} (วัน)</th>
              <th>ลาอื่นๆ {sums.other} (วัน)</th>
            </tr>
  
        </Table>
  );

  const  checkLeaves = () => (
    <Table design='table table-hover   bg-gradient-success text-dark  rounded text-center'>
            
            <tr>
              <th>เดือน</th>
              <th>ประเภทการลา</th>
              <th>วันที่เริ่มลา</th>
              <th>วันที่สิ้นสุด</th>
              <th>ช่วงเวลา</th>
              <th>อนุมัติ</th>
            </tr>
    {leaves.map((leave, indexMonths) => (
      <tr key={indexMonths}>
        <td>{formatThaiDate(leave.crdtleave_create_date)}</td>
        <td>{chkLeave(leave)}</td>
        <td>{formatDateThai({ value: leave.crdtleave_start_date})}</td>
        <td>{formatDateThai({ value: leave.crdtleave_stop_date})}</td>
        <td>{chkperiod(leave)}</td>
        <td>{chkapprove(leave)}</td>
      </tr>
    ))}
    <tr>
    <th>เดือน</th>
              <th>ประเภทการลา</th>
              <th>วันที่เริ่มลา</th>
              <th>วันที่สิ้นสุด</th>
              <th>ช่วงเวลา</th>
              <th>อนุมัติ</th>
    </tr>

</Table>
  );

  const checkWait = () =>(
    <Table design=' bg-gradient-info text-white'>
      <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
      </tr>
    </Table>

  );

  const checkJudement = ()=>(
    <Table design=' bg-gradient-danger text-white'>
    <tr>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
    </tr>
  </Table>
  )
  
  const checkSearchLeave = () => (
    <Table design=' bg-gradient-light text-dark'>
    <tr>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
    </tr>
  </Table>
  )

  const ChangePage = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const ManueData = [
    { id: 1, name: "ตรวจสอบเวลา", color: "primary", icon: 'fa-solid fa-business-time', content: chenckWorkTime() },
    { id: 2, name: "บันทึกการลา", color: "success", icon: 'fa-solid fa-user-slash',content:checkLeaves() },
    { id: 4, name: "รายการรอรับทราบ", color: "info", icon: 'fa-solid fa-hourglass-start',content:checkWait() },
    { id: 5, name: "รายการรอพิจารณา", color: "danger", icon: 'fa-solid fa-spinner',content:checkJudement() },
    { id: 6, name: "ค้นหาข้อมูลการลางาน", color: "light", icon: 'fa-solid fa-magnifying-glass-minus',content:checkSearchLeave() },
  ];

  return (
    <div
      className="min-height-300 position-absolute w-100 auto p-4 vh-100"
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
        <Modal id="modalSinglePage" title={selectedItem.name} size="lg">
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
