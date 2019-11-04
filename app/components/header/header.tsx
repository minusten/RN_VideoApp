import React from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';
// Style
import styled from 'styled-components/native';
//Icon
import Icon from 'react-native-vector-icons/AntDesign';

const StyledView = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #d8e6e8;
  border-bottom-width: 1px;
  border-bottom-color: black;
  width: 100%;
  flex-direction: row;
`;
const Name = styled.Text`
  font-weight: bold;
`;
interface Props {
  someText: string;
}

interface State {
  username: string;
  displayData?: any;
}

class HeaderComponent extends React.Component<Props, State> {
 constructor(props: Props) {
   super(props);
   this.state = {
     username: '',
  };
 }
 displayData = async()=> {
  try{
    this.setState({username: await AsyncStorage.getItem('name')});
    console.log(this.state.username);
  }
  catch(error){
    console.log(this.state.username);
  }
}
  componentDidMount() {
    this.displayData();
  }

goToSetting = () => {
    Actions.setting();
}

  render() {
    return (
    <StyledView>
      <Text> Hello, <Name> {this.state.username} </Name></Text>
      <Text>{this.props.someText}</Text>
      <Icon name='setting' size={30} color='#000' onPress={this.goToSetting}/>
    </StyledView>
    );
  }
}

export default HeaderComponent;
