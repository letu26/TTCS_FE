import { Col, Row } from "antd";
import DataNumberOf from "../../components/ContinentsCharts/DataNumberOf";
import ReffCharts from "../../components/ContinentsCharts/ReffCharts";
import PerCentCharts from "../../components/ContinentsCharts/PerCentCharts";
import PieCharts from "../../components/ContinentsCharts/PieCharts";
import MapCharts from "../../components/ContinentsCharts/MapCharts";
import Video from "../../components/video";
import AsiaCharts from "../../components/predictedCharts/AsiaCharts";
import EuropeCharts from "../../components/predictedCharts/EuropeCharts";
import AmericaCharts from "../../components/predictedCharts/AmericaCharts";
import AfricaCharts from "../../components/predictedCharts/AfricaCharts";
import SouAsiaCharts from "../../components/predictedCharts/SouAsiaCharts";
import led from "../../image/bongden.png";
import hands from "../../image/battay.png";
import growth from "../../image/bieudo.png";
import "./dashbroad.scss";
function Dashbroad() {

  return (
    <>
      <Row gutter={[20, 20]}>
        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{ marginTop: '-10px', padding: '0' }}>
          <Video />
        </Col>
        <Col id="1" xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{ height: '52px' }} >
        </Col>
        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <div className="desc-title-one">Chart of data analysis of continents over the years</div>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <div className="boxm">
            <MapCharts />
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <Row gutter={[20, 20]}>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="boxc">
                <DataNumberOf />
              </div>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="boxc">
                <ReffCharts />
              </div>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="boxc">
                <PerCentCharts />
              </div>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="boxc">
                <PieCharts />
              </div>
            </Col>
          </Row>
        </Col>
        <Col id="2" xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{ height: '52px' }} >
        </Col>
        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <div className="desc-title-two">Chart predicting data across continents for the next year</div>
        </Col>
        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row gutter={[20, 20]}>
            <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className="box">
                <SouAsiaCharts />
              </div>
            </Col>
            <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} >
              <div className="box">
                <AsiaCharts />
              </div>
            </Col>
            <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className="box">
                 <AmericaCharts />
              </div>
            </Col>
            <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} >
              <div className="box">
               <EuropeCharts />
              </div>
            </Col>
            <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} >
              <div className="box">
                <AfricaCharts />
              </div>
            </Col>
          </Row>
        </Col>

        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <div className="container-content">
            <div className="title-content">
              Why attend?
            </div>
            <div className="box-content">
              <div className="desc-box-content">
                <img alt="" src={led} />
                <div className="title-desc">Understand</div>
                <div className="content-text">The strategic priorities for keeping up with the pace of change in cyber governance and resilience</div>
              </div>
              <div className="desc-box-content">
                <img alt="" src={hands} />
                <div className="title-desc">Network</div>
                <div className="content-text">With corporate leaders and experts from the sector and share experiences and ideas about tackling security challenges</div>
              </div>
              <div className="desc-box-content">
                <img alt="" src={growth} />
                <div className="title-desc">Benefit</div>
                <div className="content-text">From critical and impartial analysis of cyber attacks and the lessons learnt to protect your data and business</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default Dashbroad;