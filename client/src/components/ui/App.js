import React, { PropTypes } from 'react';
// import Img from './img/43.jpg';
import {Link} from 'react-router';

class App extends React.Component {
  getStyles(){
    return{
      wrap:{
        // backgroundImage: `url(${Img})`
        // backgroundColor:'pink'
      },
      header:{
        height: '64px',
        width: '100%',
        backgroundColor: '#00bcd4',
        textAlign: 'center',
        lineHeight: '64px'
      },
      link:{
        fontSize: '1.5em',
        color: '#fff',
        textDecoration: 'none'
      }
    };
  }
  // constructor(){
  //   super();
  //   }

  // componentWillMount(){
  //   console.log('hello will axios');
  //   axios.get('http://localhost:3000/posts').then(res => {
  //     console.log('axios');
  //     this.setState({
  //       posts:res.data.posts
  //     });
  //      console.log(this.state.posts);
  //   });
  //   //再次触发Ajax请求
  //   //请求服务器端的json数据
  // }
  render () {
    let styles = this.getStyles();
    return(
      <div style={styles.wrap}>
        <header style={styles.header}>
          <Link to='/' style={styles.link}>BORN TO CODE</Link>
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App;
