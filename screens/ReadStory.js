import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, FlatList} from 'react-native';


import db from '../config';


export default class ReadingScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      search:'',
      allStories:[],
      dataSource:[],
      lastVisibleStory:null
    }
  }

  allS = [];

  getStories = async ()=>{
    var list = [];
    db.collection("Stories").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        
        list[list.length] = [doc.id, " => ", doc.data()];
        
    });
    
    this.allS = list;
    this.setState({
      allStories:list
    });
});
  }

  searchFilterFunction = async ()=>{
    var stories = allS;
   
    for(var i = 0;i<stories.length;i++){
      var text = stories[i][0].toUpperCase();
      var author = stories[i][2].Author.toUpperCase();
      if(text === this.state.search.toUpperCase()){
        this.state.dataSource[this.state.dataSource.length] = stories[i]
      }else if(author === this.state.search.toUpperCase()){
        this.state.dataSource[this.state.dataSource.length] = stories[i]
      }else if(this.state.search === ""){
        this.state.dataSource = stories
      }
    }

    if(this.state.dataSource === ""){
      alert("Story or Author not found");
    }

    var ans  = this.state.dataSource;
    console.log(ans);
    var ans2 = ans[ans.length-1];
    this.state.lastVisibleStory = ans2;
    
  }


  componentDidMount = ()=>{
    this.getStories();
    
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TextInput 
          style = {styles.bar}
          placeholder = 'Title Or Author of the story'
          value = {this.state.search}
          editable
          textAlignVertical = 'top'
          onChangeText = {text=>{ this.setState({
                search:text
          })}}
        />
        <TouchableOpacity
          style = {styles.button}
          onPress={()=>{this.searchFilterFunction()}}
        >
          <Text style = {styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <FlatList 
          data={this.state.dataSource}
          extraData = {this.state.search}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 3, height:50, width:350, borderBottomColor:'yellow', marginTop:5}}>
              <Text>{"Title: " + item[0]}</Text>
              <Text>{"Author: " + item[2].Author}</Text>
            </View>
          )}
          keyExtractor= {(item, index)=> index.toString()}
          onEndReached ={this.getStories}
          onEndReachedThreshold={1}
        />
        
        <Text style = {styles.text}>NO MORE STORIES TO READ</Text>
        <Text style = {styles.comment}>Press search to see all the Stories</Text>
      </View>
    );
  }
}