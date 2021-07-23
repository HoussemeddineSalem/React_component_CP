import React from 'react';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';
import Adress from './component/profile/Address';
import './style.css';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
    
    return (
        <div className="view">
           <Container>
              <Row>
                   <Col> 
                      <ProfilePhoto />
                   </Col>
                   <Col>
                      <FullName />
                      <Adress />
                   </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;