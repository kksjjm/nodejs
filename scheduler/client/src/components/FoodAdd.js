import React from 'react';
import { post } from 'axios';

class FoodAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ap: '',
            main: '',
            main_img: undefined,
            sub1:'',
            sub1_img: undefined,
            sub2:'',
            sub2_img: undefined,
            chef1:'',
            chef2:''
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.addFood()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            });
        this.setState({
            ap: '',
            main: '',
            main_img: undefined,
            sub1:'',
            sub1_img: undefined,
            sub2:'',
            sub2_img: undefined,
            chef1:'',
            chef2:''
        })
    }

    handleFileChange = (event) => {
        this.setState({
            file: event.target.files[0],
            filename: event.target.value,
        })
    }

    handleValueChange = (event) => {
        let nextState = {};
        nextState[event.target.name] = event.target.value;
        this.setState(nextState);
    }

    addFood = () => {
        const data = this.state;
        const url = '/api/main';
        const formData = new FormData();
        formData.append('ap', data.ap);
        formData.append('main', data.main);
        formData.append('main_img', data.main_img);
        formData.append('sub1', data.sub1);
        formData.append('sub1_img', data.sub1_img);
        formData.append('sub2', data.sub2);
        formData.append('sub2_img', data.sub2_img);
        formData.append('chef1', data.chef1);
        formData.append('chef2', data.chef2);
        const config = {
            header: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    render(){
        const data = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                아침/저녘: <input type="text" name="ap" value={data.ap} onChange={this.handleValueChange}></input><br/>

                메인메뉴: <input type="text" name="main" value={data.main} onChange={this.handleValueChange}></input><br/>

                메인메뉴사진: <input type="file" name="main_img" file={data.main_img} value={data.main_img} onChange={this.handleFileChange}></input><br/>

                서브메뉴1: <input type="text" name="sub1" value={data.sub1} onChange={this.handleValueChange}></input><br/>

                서브메뉴사진1: <input type="file" name="sub1_img" file={data.sub1_img} value={data.sub1_img} onChange={this.handleFileChange}></input><br/>

                서브메뉴2: <input type="text" name="sub2" value={data.sub2} onChange={this.handleValueChange}></input><br/>

                서브메뉴사진2: <input type="file" name="sub2_img" file={data.sub1_img} value={data.sub1_img} onChange={this.handleFileChange}></input><br/>

                스텝1: <input type="text" name="chef1" value={data.chef1} onChange={this.handleValueChange}></input><br/>
                스텝2: <input type="text" name="chef2" value={data.chef2} onChange={this.handleValueChange}></input><br/>

                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default FoodAdd;