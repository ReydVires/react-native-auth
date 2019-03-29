import React, {Component} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

export default class AuthReact extends Component{
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render(){
    return(
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>
          Authentication. Hello!
        </Text>
        <TextInput placeholder="Fill this blank"></TextInput>
        <Button title="Click Here"></Button>
      </View>
    );
  }

}
