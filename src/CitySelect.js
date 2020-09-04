import React, { Component } from 'react';
import './Style.css';

class CitySelect extends Component {

    onCityChange = (e) => {
        this.props.updateCityName(e.target.value.split('+',1), e.target.value.split('+',2)[1])
    }

    render() {
        return (
            <select onChange={this.onCityChange} className="city-select">
                <option selected disabled>請選擇地區</option>
                <option key="Taipei" value="Taipei+台北市">台北市</option>
                <option key="NewTaipei" value="NewTaipei+新北市">新北市</option>
                <option key="Taoyuan" value="Taoyuan+桃園市">桃園市</option>
                <option key="Taichung" value="Taichung+台中市">台中市</option>
                <option key="Tainan" value="Tainan+臺南市">臺南市</option>
                <option key="Kaohsiung" value="Kaohsiung+高雄市">高雄市</option>+   
                <option key="Keelung" value="Keelung+基隆市">基隆市</option>
                <option key="Hsinchu" value="Hsinchu+新竹市">新竹市</option>
                <option key="HsinchuCounty" value="HsinchuCounty+新竹縣">新竹縣</option>
                <option key="MiaoliCounty" value="MiaoliCounty+苗栗縣">苗栗縣</option>
                <option key="ChanghuaCounty" value="ChanghuaCounty+彰化縣">彰化縣</option>
                <option key="NantouCounty" value="NantouCounty+南投縣">南投縣</option>
                <option key="YunlinCounty" value="YunlinCounty+雲林縣">雲林縣</option>
                <option key="ChiayiCounty" value="ChiayiCounty">嘉義縣</option>
                <option key="Chiayi" value="Chiayi+嘉義市">嘉義市</option>
                <option key="PingtungCounty" value="PingtungCounty+屏東縣">屏東縣</option>
                <option key="YilanCounty" value="YilanCounty+宜蘭縣">宜蘭縣</option>
                <option key="HualienCounty" value="HualienCounty+花蓮縣">花蓮縣</option>
                <option key="TaitungCounty" value="TaitungCounty+臺東縣">臺東縣</option>
                <option key="KinmenCounty" value="KinmenCounty+金門縣">金門縣</option>
                <option key="PenghuCounty" value="PenghuCounty+澎湖縣">澎湖縣</option>
                <option key="LienchiangCounty" value="LienchiangCounty+連江縣">連江縣</option>
            </select>
        );
    }
}

export default CitySelect;