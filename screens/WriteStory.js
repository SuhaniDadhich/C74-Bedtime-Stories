import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ToastAndroid,
 KeyboardAvoidingView} from 'react-native';
import db from '../config';


export default class WriteStoryScr extends React.Component{
    constructor(){
        super();
        this.state={
          title: '',
          author: '',
          story: '',
        }
    }

    submitStory = ()=>{
      db.collection("stories").add({
          title: this.state.title,
          author: this.state.author,
          story: this.state.story
      })
      this.setState({
          title: "",
          author: "",
          story: ""
      })
      alert('Story Submitted Successfully! ');
  }
    
    render(){
        return(
          <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
            <Text style={styles.story}> STORIES </Text>
          <TextInput style={styles.inputBox} placeholder={'Name of the story'} />
          <TextInput style={styles.inputBox}  placeholder={'Name of the Author of the  story'} />
          <TextInput style={styles.inputBox2}  placeholder={'Write your story here...'} multiline={true}/>
          <TouchableOpacity style={styles.submit} onPress={this.submitStory}>
                      <Text style={styles.text}>Submit!</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        marginTop: 20,
        width: 300,
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
    },
    inputBox2: {
        marginTop: 20,
        width: 300,
        alignSelf: 'center',
        height: 280,
        textAlign: 'center',
        borderWidth: 4,
    },
    text:{
        fontSize:23,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    submit:{
        justifyContent:'center',
        borderWidth:4,
        backgroundColor:'orange',
        marginTop:10,
        marginLeft:130,
        width:100,
        height:50,
    },
    story:{
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        backgroundColor: 'yellow',
        fontSize: 45,
        fontWeight: 'bold',
    },
    head:{
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        backgroundColor: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
    
})