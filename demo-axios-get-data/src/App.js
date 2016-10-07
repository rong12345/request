import React from 'react';


class App extends React.Component {
  // constructor(){
  //   super()
  // }
  _handleSubmit(e){
    e.preventDefault();
    var data = {};
    data.title = this.refs.title.value;
    data.content = this.refs.content.value;
    console.log(data);

    //{title :"hello",content:"myContent"}
  }
  render () {
    return(
      <div>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" ref="title" />
          <input type="text" ref="content" />
          <input type="submit" />
        </form>
      </div>

    )
  }
}
export default App;
