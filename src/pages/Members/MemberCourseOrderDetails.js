import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Table, Accordion, Form } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useAuth } from '../../context/auth';
import { IMAGE_URL } from '../../utils/config';
import Swal from 'sweetalert2';

import './Member.scss';
// import titleImgMember from '../../data/images/greenwave64x24.png';

function MemberCourseOrderDetails(props) {
  const [data, setData] = useState([]);
  const { auth, setAuth } = useAuth();
  const { id } = useParams();
  // 為了處理網址
  let navigate = useNavigate();

  async function handleCancel(id) {
    const { isConfirmed } = await Swal.fire({
      title: '您確定要取消訂單嗎?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff7f6a',
      cancelButtonColor: '#17a8a2',
      cancelButtonText: '取消',
      confirmButtonText: '確定',
    });
    if (!isConfirmed) {
      return;
    }
    let response = await axios.post(
      `${API_URL}/member/member-courseorder/${id}/delete`
    );
    console.log(response.data);
    if (response.data.isDeleted) {
      setData(data.filter((course) => course.id !== id));
    }
  }

  useEffect(() => {
    async function getMemberCourseOrderDetails() {
      let response = await axios.get(
        `${API_URL}/member/member-courseorderdetails/${id}`
      );

      let courses = [];
      response.data.forEach(function (courseData) {
        courses.push(courseData);
      });

      setData(courses);
    }

    getMemberCourseOrderDetails();
  }, []);
  return (
    <>
      <div className="container mt-5 containerDetailsMember">
        <div className="me-5">
          <Link className="btn saveMember fs-16Member" to={`/member`}>
            <i className="fas fa-arrow-left"></i>&nbsp;回上一頁
          </Link>
        </div>
        <div className="row d-flex justify-content-center">
          <h2 className="mb-5 titleMember text-center">{id}&nbsp;訂單內容</h2>
          {data.map((item, index) => {
            if (index == 0)
              return (
                <h2 className="text-center gray">合計：NT${item.amount}</h2>
              );
          })}
          {/* <h5 className="text-center gray">購物車(2件)</h5> */}
          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item className="border-0 dropdownMember" eventKey="0">
              <Accordion.Header className="accordionMember text-center gray">
                購物車({data.length}件)
              </Accordion.Header>
              <Accordion.Body>
                <Table
                  responsive
                  hover
                  className="table table-responsive table-control align-middle text-center tableMemberOrderDetails"
                >
                  <thead>
                    <tr>
                      <th className="text-nowrap text-start">課程</th>
                      <th className="text-nowrap">地點</th>
                      <th className="text-nowrap">價格</th>
                      <th className="text-nowrap">人數</th>
                      <th className="text-nowrap text-end">小計</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      return (
                        <tr>
                          <td className="d-flex tbInfoMember text-nowrap">
                            {item.course}
                          </td>
                          <td className=" text-nowrap">
                            <div className="d-flex align-items-center flex-column">
                              {item.courseSpot}
                            </div>
                          </td>
                          <td>NT${item.coursePrice}</td>
                          <td>{item.peopleNum}</td>
                          <td id="total" className="text-end">
                            NT${item.amount}
                          </td>
                        </tr>
                      );
                    })}
                    {/* <tr>
                      <td className="d-flex">
                        <img src="/" className="orderImgMember" />
                        <div>
                          <p>EXTRA SHOT BY RACHAEL TILLY</p>
                          <p>SIZE: 6’8</p>
                        </div>
                      </td>
                      <td>
                        <span className="discountHintMember">優惠促銷</span>
                        <br />
                        <p>
                          【品牌日】會員符合資格可享折扣，不得與其他優惠同時使用。
                        </p>
                      </td>
                      <td>
                        <p className="m-0">NT$10,250</p>
                        <p className="text-decoration-line-through remarkMember">
                          NT$11,900
                        </p>
                      </td>
                      <td>1</td>
                      <td>NT$10,250</td>
                    </tr> */}
                    {/* <tr>
                      <td colSpan={5} className="fw-bold">
                        <p className="text-start">已享用之優惠</p>
                        <br />
                        <div className="d-flex">
                          <span className="discountHintMember me-3">
                            優惠促銷
                          </span>
                          <p>購買滿NT$2,000，即享有本島宅配免運費。</p>
                        </div>
                      </td>
                    </tr> */}
                    {data.map((item, index) => {
                      if (index == 0)
                        return (
                          <tr className="">
                            <td colSpan={6} className="text-end fw-bold">
                              <div className="row">
                                <div className="col-7"></div>
                                <div className="col-5">
                                  <div className="row d-flex justify-content-end mrMember">
                                    <p className="col-4 text-start text-nowrap">
                                      小計：
                                    </p>
                                    <p className="col-7" id="countId">
                                      NT$
                                      {data.reduce(
                                        (pre, cur) => pre + cur.amount,
                                        0
                                      )}
                                    </p>
                                  </div>
                                  {/* <div className="row d-flex justify-content-end">
                              <p className="col-6 text-start">折抵購物金：</p>
                              <p className="col-6">-NT$100&ensp;購物金</p>
                            </div>
                            <div className="row d-flex justify-content-end">
                              <p className="col-6 text-start">使用點數折現：</p>
                              <div className="col-6">
                                <p className="m-0">-NT$0</p>
                                <p className="remarkMember">
                                  本次使用&ensp;10&ensp;點
                                </p>
                              </div>
                            </div> */}
                                  <div className="row d-flex justify-content-end mrMember">
                                    <p className="col-4 text-start text-nowrap">
                                      合計：
                                    </p>
                                    <p className="col-7">
                                      NT$
                                      {data.reduce(
                                        (pre, cur) => pre + cur.amount,
                                        0
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                    })}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="text-end mt-3">
          {data.map((item, index) => {
            if (index == 0)
              return (
                <Button
                  className={`${
                    item.status === '訂單處理中' ? 'd-block' : 'd-none'
                  }`}
                  onClick={() => {
                    handleCancel(data[0].id);
                  }}
                >
                  取消訂單
                </Button>
              );
          })}
        </div>
        <Accordion className="mt-4 mb-4" defaultActiveKey="0" flush alwaysOpen>
          <Accordion.Item className="dropdownMember" eventKey="0">
            <Accordion.Header className="accordionMember"></Accordion.Header>
            <Accordion.Body className="border">
              {data.map((item, index) => {
                if (index == 0)
                  return (
                    <div className="row p-5" key={item.order_time}>
                      <div className="col-lg-6 col-md-6 col-12 mb-5">
                        <p className="fw-bold">訂單資訊</p>
                        <br />
                        <p>訂單號碼：{item.id}</p>
                        <p>姓名：{item.member_name}</p>
                        <p>訂單信箱：{item.member_email}</p>
                        <p>電話號碼：{item.member_phone}</p>
                        <p>訂單日期：{item.order_time}</p>
                        {/* <p>訂單狀態：{item.status}</p> */}
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <p className="fw-bold">顧客資訊</p>
                        <br />
                        <p>姓名：{item.name}</p>
                        <p>訂單信箱：{item.email}</p>
                        <p>電話號碼：{item.phone}</p>
                        <p>課程日期：{item.courseDate}</p>
                        {/* <p>生日：{item.}</p> */}
                        {/* <p>手機號碼：{item.}</p> */}
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 mt-5">
                        <p className="fw-bold">課程資訊</p>
                        <br />
                        <p>課程名稱：{item.course}</p>
                        <p>課程地點：{item.courseSpot}</p>
                        <p>課程時間：{item.courseTime}</p>
                        {/* <p>送貨狀態：</p> */}
                        {/* <p>或件追蹤編號：</p> */}
                        <p>人數：{item.peopleNum}</p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 mt-5">
                        <p className="fw-bold">付款資訊</p>
                        <br />
                        <p>付款方式：{item.payMethod}</p>
                        {/* <p>付款狀態：{item.payment_status}</p> */}
                      </div>
                      {/* <div className="col-12 mt-5">
                        <p className="fw-bold">訂單狀態通知</p>
                        <br />
                      </div> */}

                      {/* <Form>
                        <Form.Group
                          className="col-12 mt-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label className="fw-bold detailLabelMember">
                            賣家和顧客訂單通訊
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            row={3}
                            className="col-12"
                            placeholder="輸入訊息"
                          />
                        </Form.Group>
                        <div className="d-flex justify-content-between mt-3">
                          <Button className="btn btnMember deepblueBtnMember fs-16Member">
                            &ensp;加入圖片
                          </Button>
                          <Button
                            type="submit"
                            className="btn btnMember pinkBtnMember fs-16Member"
                          >
                            發送
                          </Button>
                        </div>
                      </Form> */}
                    </div>
                  );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default MemberCourseOrderDetails;
