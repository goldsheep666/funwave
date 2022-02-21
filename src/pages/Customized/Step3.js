import React, { useState } from 'react';
import { Figure, Row, Col } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import greenTitle from '../../data/images/greenTitle.svg';
// import fishboardHole from '../../data/images/customize/fishboardHole.png';
// import funboardHole from '../../data/images/customize/funboardHole.png';
import gunboardHole from '../../data/images/customize/gunboardHole.png';
import longboardHole from '../../data/images/customize/longboardHole.png';

function Step3(props) {
  const { step, setStep } = props;
  const [count, setCount] = useState(1);

  return (
    <div className="container">
      <div className="text-secondary h1 text-center position-relative">
        <button
          className="btn btn-secondary my-2 position-absolute start-0"
          onClick={() => {
            setStep({ ...step, step2: true, step3: '' });
          }}
        >
          上一步
        </button>
        <img
          src={greenTitle}
          className="greenTitle me-3"
          alt="greenTitle"
          height="24px"
          weight="64px"
        />
        STEP 3加入購物車
      </div>
      <hr className="mb-3 mt-0" />
      <Row>
        <Col lg="7">
          <Row className="gx-0">
            <Col lg="2">魚板</Col>
            <Col lg="5" className="boarder">
              <p className="m-0 text-center">正面</p>
              <Figure className="bottomPhotoCu">
                <Figure.Image
                  alt="fishboardHole"
                  src={longboardHole}
                  className="m-0"
                />
              </Figure>
            </Col>
            <Col lg="5" className="boarder">
              <p className="m-0 text-center">反面</p>
              <Figure className="bottomPhotoCu">
                <Figure.Image
                  alt="fishboardHole"
                  src={gunboardHole}
                  className="m-0"
                />
              </Figure>
            </Col>
          </Row>
        </Col>
        <Col lg="5">
          <Row>
            <Col xs lg="12">
              價格:
            </Col>
            <Col xs lg="12">
              <div className="d-flex justify-content-between">
                數量:
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary border rounded-circle p-0 countButton me-2"
                    onClick={() => {
                      if (count - 1 >= 1) setCount(count - 1);
                    }}
                  >
                    <AiOutlineMinus
                      size={20}
                      color="#ffffff"
                      className="text-center"
                    />
                  </button>
                  {count}
                  <button
                    type="button"
                    className="btn btn-secondary border rounded-circle p-0 countButton ms-2"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <AiOutlinePlus
                      size={20}
                      color="#ffffff"
                      className="m-auto"
                    />
                  </button>
                </div>
              </div>
              <hr className="my-3" />
            </Col>
            <Col xs lg="12">
              總額:
            </Col>
          </Row>
          <Row>
            <Col>
              <button
                className="btn btn-secondary btnCu"
                onClick={() => {
                  setStep({ ...step, step1: true, step3: '' });
                }}
              >
                繼續客製浪板
              </button>
            </Col>
            <Col>
              <button className="btn btn-primary btnCu">加入購物車</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Step3;
