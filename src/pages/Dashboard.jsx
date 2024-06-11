import React, { useEffect, useState } from "react";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Toggle from "../components/Toggle";
import Card from "../components/Card";
import Body from "../components/Body";
import Table from "../components/Table";
import Swal from "sweetalert2";
import axios from "axios";
import config from "../config";
import Carousel from "../components/Carousel";

export default function Dashboard() {
  const [isAsideOpen, setAsideOpen] = useState(false);
  const [leaveInfo, setLeaveInfo] = useState([]);
  const [workOutSideInfo, setWorkOutSideInfo] = useState([]);
  const [cardData, setCardData] = useState([
    {
      title: `รายการรอรับทราบ`,
      body: 0,
      date: "รายการ",
      icon: "ni ni-curved-next",
      bgColor: "bg-gradient-primary",
    },
    {
      title: "รอผู้เกี่ยวข้องรับทราบ",
      body: 0,
      date: "รายการ",
      icon: "ni ni-collection",
      bgColor: "bg-gradient-warning",
    },
    {
      title: "รอ HR รับทราบ",
      body: 0,
      date: "รายการ",
      icon: "ni ni-check-bold",
      bgColor: "bg-gradient-success",
    },
    {
      title: "รายการไม่อนุมัติ",
      body: 0,
      date: "รายการ",
      icon: "ni ni-fat-remove",
      bgColor: "bg-gradient-danger",
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resleave = await axios.get(config.urlApi + `/leaves`);
        const reswork = await axios.get(config.urlApi + `/works`);
  
        setLeaveInfo(resleave.data.result);
        setWorkOutSideInfo(reswork.data.result);
  
        // นับจำนวน `crdtleave_h1_status` ที่มีค่าเท่ากับ `'WAIT'`
        const waitCount = resleave.data.result.filter(
          leave => leave.crdtleave_h1_status === 'WAIT'
        ).length;
  
        const relatedCount = resleave.data.result.filter(
          leave => leave.crdtleave_h2_status === 'WAIT'
        ).length;

        const hrCount = resleave.data.result.filter(
          leave => leave.crdtleave_hr === 1
        ).length;

        const disappoveCount = resleave.data.result.filter(
          leave => leave.crdtleave_h_result === 'DISAPPROVE'
        ).length;
  
  
        // อัปเดตค่าใน cardData
        setCardData(prevCardData =>
          prevCardData.map(card => {
            if (card.title === 'รายการรอรับทราบ') {
              return { ...card, body: waitCount };
            } else if (card.title === 'รอผู้เกี่ยวข้องรับทราบ') {
              return { ...card, body: relatedCount };
            } else if (card.title === 'รอ HR รับทราบ'){
              return {...card,body : hrCount}
            }else if(card.title === 'รายการไม่อนุมัติ'){
              return {...card,body:disappoveCount}
            }
            return card;
          })
        );
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: err.message,
        });
      }
    };
  
    fetchData();
  }, []);

  const toggleAside = () => {
    setAsideOpen(!isAsideOpen);
  };

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

  const formatDateThai = ({ value }) => {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 543;
    return `${day}/${month}/${year}`;
  };

  return (
    <div
      className="min-height-300 position-absolute w-100"
      style={{
        background:
          "linear-gradient(90deg, rgba(126,139,238,1) 0%, rgba(134,187,139,1) 100%)",
      }}
    >
      <Aside toggleAside={toggleAside} />
      <main className="main-content position-relative border-radius-lg">
        <Navbar isOpen={isAsideOpen} toggleAside={toggleAside} />
        <Content>
          <div className="row" >
            {cardData.map((item, index) => (
              <Card key={index} data={item}  />
            ))}
          </div>
          <div className="row mt-4">
            <Body col="7" title="พนักงานลาป่วย ลากิจ ลาพักร้อน วันนี้" color='light'>
              <Table>
              <tr  className="text-xs font-weight-bold mb-0 text-center"> 
                  <th>ลำดับ</th>
                  <th>ชื่อ-สกุล</th>
                  <th>ประเภทการลา</th>
                  <th>วัน/เดือน/ปี</th>
                  <th>หมายเหตุ</th>
                </tr>
                {leaveInfo.length > 0 ? (
                  leaveInfo.map((leave, leaveIndex) => (
                    <tr  className="text-xs font-weight-bold mb-0 text-center" key={leaveIndex}>
                      <td className="w-10 text-center">
                        <div className="d-flex px-2 py-1 align-items-center">
                          <div className="ms-4">
                            <h6 className="text-sm mb-0">{leaveIndex + 1}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="text-center">
                          <h6 className="text-sm mb-0">
                            {leave.crdtuser_name}
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="text-center">
                          <h6 className="text-sm mb-0">{chkLeave(leave)}</h6>
                        </div>
                      </td>
                      <td className="align-middle text-sm">
                        <div className="col text-center">
                          <h6 className="text-sm mb-0">{formatDateThai({ value: leave.crdtleave_create_date })}</h6>
                        </div>
                      </td>
                      <td className="align-middle text-sm">
                        <div className="col text-center">
                          <h6 className="text-sm mb-0">
                            {leave.crdtleave_reason}
                          </h6>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      ไม่พบข้อมูล
                    </td>
                  </tr>
                )}
              </Table>
            </Body>

            <Body col="5" color='light'>
              <Carousel />
            </Body>
          </div>
          <div className="row mt-4">
            <Body col="12" title="พนักงานทำงานนอกสถานที่วันนี้" color='light'>
              <Table>
                <tr  className="text-xs font-weight-bold mb-0 text-center"> 
                  <th>ลำดับ</th>
                  <th>ชื่อ-สกุล</th>
                  <th>วัน/เดือน/ปี</th>
                  <th>หมายเหตุ</th>
                </tr>

                {workOutSideInfo.length > 0 ? (
                  workOutSideInfo.map((workOutSide, workIndex) => (
                    <tr key={workIndex}>
                      <td className="w-10 text-center">
                        <div className="d-flex px-2 py-1 align-items-center">
                          <div className="ms-4">
                            <h6 className="text-sm mb-0">{workIndex + 1}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="text-center">
                          <p className="text-xs font-weight-bold mb-0">
                            
                          </p>
                          <h6 className="text-sm mb-0">
                            {workOutSide.crdtuser_name}
                          </h6>
                        </div>
                      </td>
                      <td className="align-middle text-sm">
                        <div className="col text-center">
                        
                          <h6 className="text-sm mb-0">{formatDateThai({ value: workOutSide.crdtwork2_date })}</h6>
                        </div>
                      </td>
                      <td className="align-middle text-sm">
                        <div className="col text-center">
                          <h6 className="text-sm mb-0">
                            {workOutSide.crdtwork2_reason}
                          </h6>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                    ไม่พบข้อมูล
                  </td>
                </tr>
              )}
            </Table>
          </Body>
         
        </div>
      </Content>
      <Footer />
    </main>
    <Toggle isOpen={isAsideOpen} toggleAside={toggleAside} />
  </div>
);
}
