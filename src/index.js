/* eslint-disable */

const action = () => alert("hello world")

ReactDOM.render(

  <ReactMenu>
    <ReactMenu.Item action={ action } key={ 1 }> Hello world </ReactMenu.Item>
    <ReactMenu.Item action={ action } key={ 2 } disabled> Disabled </ReactMenu.Item>
    <ReactMenu.Item action={ action } key={ 3 } icon="fa fa-bar-chart"> Fa Icon </ReactMenu.Item>
    <ReactMenu.Item action={ action } key={ 4 } icon={ <img src="node_modules/jsyg-menu/icon.png" style={{width:16}}/>}> Custom Icon </ReactMenu.Item>
    <ReactMenu.Item action={ action } key={ 5 } icon="fa fa-modx" shortcut="s"> Shortcut </ReactMenu.Item>
  </ReactMenu>,

  document.getElementById("content")
)
