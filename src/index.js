/* eslint-disable */

const action = () => alert("hello world")

ReactDOM.render(

  <ReactMenu>
    <ReactMenu.Item action={ action } key={ 1 }> Hello world </ReactMenu.Item>
    <ReactMenu.Item action={ action } key={ 2 } disabled> Disabled </ReactMenu.Item>
    <ReactMenu.Item action={ action } key={ 3 } icon="fa fa-bar-chart"> Fa Icon </ReactMenu.Item>
    <ReactMenu.Item action={ action } key={ 4 } icon={ <img src="node_modules/jsyg-menu/icon.png" style={{width:16}}/>}> Custom Icon </ReactMenu.Item>
    <ReactMenu.Item action={ action } key={ 5 } icon="fa fa-modx" shortcut="s"> Shortcut </ReactMenu.Item>
    <ReactMenu.Divider/>
    <ReactMenu.Item action={ action } key={ 6 } checkbox shortcut="c"> checkbox </ReactMenu.Item>
    <ReactMenu.Item action={ action } key={ 7 } checkbox defaultChecked> checkbox checked </ReactMenu.Item>
    <ReactMenu.Item key={ 8 } label="sub-menu"  shortcut="m">
      <ReactMenu>
        <ReactMenu.Item action={ action } key={ 1 } checkbox shortcut="h"> Hello world </ReactMenu.Item>
        <ReactMenu.Item action={ action } key={ 2 } icon="fa fa-bar-chart" label="another submenu">
          <ReactMenu>
            <ReactMenu.Item action={ action } key={ 1 }> Hello world </ReactMenu.Item>
            <ReactMenu.Item action={ action } key={ 2 } disabled> Disabled </ReactMenu.Item>
            <ReactMenu.Item action={ action } key={ 3 } icon="fa fa-bar-chart" label="submenu again">
              <ReactMenu>
                <ReactMenu.Item action={ action } key={ 1 }> Hello world </ReactMenu.Item>
                <ReactMenu.Item action={ action } key={ 2 } disabled> Disabled </ReactMenu.Item>
                <ReactMenu.Item action={ action } key={ 3 } icon="fa fa-bar-chart"> Fa Icon </ReactMenu.Item>
              </ReactMenu>
            </ReactMenu.Item>
          </ReactMenu>
        </ReactMenu.Item>
      </ReactMenu>
    </ReactMenu.Item>
  </ReactMenu>,

  document.getElementById("content")
)
