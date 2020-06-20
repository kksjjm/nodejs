import React, { Component } from 'react';
import './App.css';
import Scheduls from './components/Scheduls';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
      width: '100%',
      marginTop: theme.spacing.unit *3,
      overflowX: "auto"
  },
  table: {
    minWidth: 780
  },
  progress: {
    margin: theme.spacing.unit *2
  }
  
})

class App extends Component {
  state = {
    customers: "",
    loading: 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(dataFromServer => this.setState({customers: dataFromServer}))
      .catch(err => console.log(err));
  }

  progress = () => {
    const {loading} = this.state;
    this.setState({ loading: loading >= 100 ? 0 : loading + 1});
  }

  callApi = async() => {
    const response = await fetch('/api/main');
    const dataFromServer = await response.json();
    return dataFromServer;
  }

  render() {
    const { classes } = this.props;
    let data = this.state;
    return (
      <Paper className={classes.root}>
        <h3>안녕!! 나는 오늘의 식단표야 :)</h3>
        <Table className={classes.table}>
          <TableBody>
          <TableRow>
              {data.customers ? data.customers.map(s => {return (
                <TableCell>
                  <Scheduls id={s.id} ap={s.ap} main={s.main} main_img={s.main_img} sub1={s.sub1} sub1_img={s.sub1_img} sub2={s.sub2} sub2_img={s.sub2_img} chef1={s.chef1} chef2={s.chef2}/>
                </TableCell>
              )}) :
              <TableRow>
                <TableCell colSpan="2" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={data.loading}/> 
                </TableCell>
              </TableRow> 
              }
              </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

