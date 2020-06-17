import React, { Component } from 'react';
import './App.css';
import Scheduls from './components/Scheduls';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
      width: '100%',
      marginTop: theme.spacing.unit *3,
      overflowX: "auto"
  },
  table: {
    minWidth: 780
  }
  
})

const scheduls = [
  {
    'id': 1,
    'ap': '아침',
    'main': '김치찌게',
    'main_img': 'https://placeimg.com/64/64/any',
    'sub1': '제육볶음',
    'sub1_img': 'https://placeimg.com/64/64/any',
    'sub2': '미나리무침',
    'sub2_img': 'https://placeimg.com/64/64/any',
    'chef1': 'Tune',
    'chef2': '짱짱맨'
  },
  {
    'id': 2,
    'ap': '저녘',
    'main': '불고기',
    'main_img': 'https://placeimg.com/64/64/any',
    'sub1': '된장찌개',
    'sub1_img': 'https://placeimg.com/64/64/any',
    'sub2': '감자셀러드',
    'sub2_img': 'https://placeimg.com/64/64/any',
    'chef1': '에드워드',
    'chef2': '이윤복'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <h3>안녕!! 나는 오늘의 식단표야 :)</h3>
        <Table className={classes.table}>
          <TableBody>
          <TableRow>
              {scheduls.map(s => {return (
                <TableCell>
                  <Scheduls id={s.id} ap={s.ap} main={s.main} main_img={s.main_img} sub1={s.sub1} sub1_img={s.sub1_img} sub2={s.sub2} sub2_img={s.sub2_img} chef1={s.chef1} chef2={s.chef2}/>
                </TableCell>
              )})}
              </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
