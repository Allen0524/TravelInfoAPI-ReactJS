import React, { Component } from 'react';
import nothingFig from './img/nothing.png';
import PhoneIcon from '@material-ui/icons/Phone';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import RoomIcon from '@material-ui/icons/Room';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
  } from 'reactstrap';


class Content extends Component {

    render() {
        const dataCard = this.props.datas.map(data => 
        <Col sm="5">
            <Card className="card">
                <CardBody className="pb-6">
                    <CardTitle className="card-title">{data.Name}</CardTitle>
                    <CardSubtitle><RoomIcon color="primary"/>{data.Address}</CardSubtitle>
                </CardBody>
                <img width="100%" height="280px" src={data.Picture.PictureUrl1!=''? data.Picture.PictureUrl1: nothingFig}/>
                <CardBody>
                    <Row>
                        <Col className="col-3"><EventAvailableIcon color="primary"/>時段:</Col>
                        <Col className="pl-0 card-text-opentime">{data.OpenTime}</Col>
                    </Row>
                    <Row>
                        <Col className="col-3"><PhoneIcon color="primary"/>電話:</Col>
                        <Col className="pl-0">{data.Phone}</Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>)

        return (
            <Row className="row-cols-2 justify-content-around">
                {dataCard}
            </Row>
        );
    }
}

export default Content;