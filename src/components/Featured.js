import React from "react";
import { Row, Col, Card } from "antd";
import "antd/dist/antd.css";

import { GeneralFeatured, FeaturedText } from "../styles";
import silentPool from "../localImages/silentPool.png";

const FeaturedPage = () => {
  return (
    <GeneralFeatured id="featured">
      <Row>
        <Col xs={{ order: 2, span: 24 }} sm={{ order: 1, span: 14 }}>
          <Row>
            <Col flex={3}></Col>
            <Col flex={2}>
              <Card bordered={false} style={{ backgroundColor: "#f6dfec" }}>
                <FeaturedText>
                  <h1>MERRY CHRISTMAS ASSHOLE</h1>
                  <br />
                  <h5 style={{ fontFamily: "NHG" }}>
                    MOTHERFUDGER CHRYSANTHEMUM GIN TEA
                    <br />
                    $12
                  </h5>
                </FeaturedText>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={{ order: 1, span: 24 }} sm={{ order: 2, span: 10 }}>
          <div>
            <img
              src={silentPool}
              style={{
                height: "70vh",
                width: "auto",
                margin: "auto",
                paddingTop: "10vh",
                display: "block",
              }}
            />
          </div>
        </Col>
      </Row>
    </GeneralFeatured>
  );
};

export default FeaturedPage;
