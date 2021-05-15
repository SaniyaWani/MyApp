import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyleSheet ,Alert} from 'react-native';


export default class MyHeader extends Component{
constructor(props) {
  super(props)
  this.state={
    value:""
  }
}



BellIcon=()=>{
  return(
    <View>
      <Icon name='bell' type='font-awesome' color='#696969' size={25}
        onPress={() =>this.props.navigation.navigate('Notification')}/>
       <Badge
        value={this.state.value}
       containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
    </View>
  )
}


render(){
  return (
    <Header
          leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.toggleDrawer()}/>}
          centerComponent={{ text: this.props.title, style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
          // rightComponent={<Icon name='rightArrow' type='font-awesome' color='#696969'/>}
          backgroundColor = "rgb(1,63,27)"
        />
  )

  }
}


