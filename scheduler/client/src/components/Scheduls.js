import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

class Scheduls extends React.Component {
    render() {
        let data = this.props;
        return (   
            <div>
                <Foods ap={data.ap} main={data.main} main_img={data.main_img}
                 sub1={data.sub1} sub1_img={data.sub1_img}
                 sub2={data.sub2} sub2_img={data.sub2_img}/>

                <Staff ap={data.ap} chef1={data.chef1} chef2={data.chef2}/>
            </div>
        )
    }
}

class Foods extends React.Component {
    render(){
        let data = this.props;
        return (
            <div>
                <TableHead> <h2>{data.ap}</h2> </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <img src={data.main_img} alt="main-dish"/>
                            <p>{data.main}</p>
                        </TableCell>
                        <TableCell>
                            <img src={data.sub1_img} alt="sub-dish1"/>
                            <p>{data.sub1}</p>
                        </TableCell>
                        <TableCell>
                            <img src={data.sub2_img} alt="sub-dish2"/>
                            <p>{data.sub2}</p>
                        </TableCell>
                    </TableRow>
                </TableBody>

            </div>
        )
    }
}

class Staff extends React.Component {
    render(){
        let data = this.props;
        return (
            <div>
                <TableHead><h2>당번</h2></TableHead>
                <TableRow>
                    <TableCell><p>{data.chef1}</p></TableCell>
                    <TableCell><p>{data.chef2}</p></TableCell>
                </TableRow>

            </div>
        )
    }
}

export default Scheduls;