import './project.css';
import React from 'react';
import { Container, Row, Tabs, Tab } from 'react-bootstrap'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../images/Group 89314.png';
import image2 from '../images/Group 89313.png';
import image3 from '../images/Group 89315.png';
import image4 from '../images/Group 89312.png';

const Project = () => {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1 p-0">
          <Tab eventKey="tab-1" title="All">
          <div className='image-container'> <img src={image1} alt="Image" />  </div>
          </Tab>
          <Tab eventKey="tab-2" title="Digital Marketing">
          <div className='image-container'> <img src={image2} alt="Image" />  </div>
          </Tab>
          <Tab eventKey="tab-3" title="Website development & design">
          <div className='image-container'> <img src={image3} alt="Image" />  </div>
          </Tab>
          <Tab eventKey="tab-4" title="software">
          <div className='image-container'> <img src={image4} alt="Image" />  </div>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
};

export default Project;
