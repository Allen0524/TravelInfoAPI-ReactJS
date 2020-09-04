import React, {Component, Fragment} from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import coverimg from './img/cover.jpg';
import CitySelect from './CitySelect';
import Content from './Content';
import Pagination from './Pagination';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Row,
  Col,
  Container,
} from 'reactstrap';

class App extends Component {

  state = {
    data: [],
    cityName:'Tainan',
    currentPage: 1,
    perPage: 20,
    chineseCityName: '臺南市'
  }
  getData = () => {
    let st = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${this.state.cityName}?$format=JSON`
    return fetch(st)
      .then(res => {return res.json()})
      .then(data => {this.setState({data: data})})
      .catch(error => console.log(error))
  };

  componentDidMount(){
    this.getData();
  }

  updateCityName = (newCity, chineseName) => {
    this.setState({cityName: newCity, chineseCityName:chineseName}, ()=>this.getData())
  }

  paginate = (number) => {
    this.setState({currentPage: number});
    window.scroll(0,400)
  }

  render(){
    const indexOfLastPost = this.state.currentPage * this.state.perPage;
    const indexOfFirstPost = indexOfLastPost - this.state.perPage;
    const currentPosts = this.state.data.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <Fragment>
        <Navbar>
          <NavbarBrand>Taiwan</NavbarBrand>
          <Nav className="mr-auto">
            <NavItem>
              <NavLink>觀光</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>美食</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div className="banner"></div>
        <Container>
          <Row className="justify-content-center">
            <CitySelect updateCityName={this.updateCityName}/>
          </Row>
          <Row className="justify-content-center">
            <h3>{this.state.chineseCityName}</h3>
          </Row>
          <Content datas={currentPosts}/>
          <Row>
            <Pagination postPerPage={this.state.perPage} totalPosts={this.state.data.length} paginate={this.paginate}/>
          </Row>
        </Container>
        <Row className="justify-content-center align-items-center">
          <footer className="footer">資料來源: 交通部「公共運輸整合資訊流通服務平臺(PTX)」</footer>
        </Row>
      </Fragment>
    );
  }
}

export default App;
