
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Lista from './src/Lista';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      feed: [
      {
        id: '1',
        nome: 'Laura Silva',
        descricao: 'Amiga Irmã <3',
        imgperfil:'https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1041&q=80',
        imgPublicacao:'https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1041&q=80',
        likeada: false, 
        likers: 7
      },
      {
        id: '2',
        nome: 'José Escalada',
        descricao: 'Sempre pronto para aventuras',
        imgperfil:'https://images.unsplash.com/photo-1623387417655-a2f0add6eade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        imgPublicacao:'https://images.unsplash.com/photo-1623387417655-a2f0add6eade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        likeada: false,
        likers: 0
      },
      {
        id: '3',
        nome: 'Ana Luiza',
        descricao: 'Sorria!',
        imgperfil:'https://images.unsplash.com/photo-1546961342-ea5f71b193f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        imgPublicacao:'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        likeada: false,
        likers: 8
      },
      {
        id: '4',
        nome: 'Maria João',
        descricao: 'Momentos',
        imgperfil:'https://images.unsplash.com/photo-1601744562351-e1675822a397?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        imgPublicacao:'https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        likeada: false,
        likers: 4
      },
      {
        id: '5',
        nome: 'João Maria',
        descricao: 'Um brinde a nós',
        imgperfil:'https://images.unsplash.com/photo-1605829064438-d04b37f19249?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        imgPublicacao:'https://images.unsplash.com/photo-1622495727064-c8100bd5844a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        likeada: false,
        likers: 32
      },
      {
        id: '6',
        nome: 'Joaquina Solange',
        descricao: 'Seja como um girassol (8)',
        imgperfil:'https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        imgPublicacao:'https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        likeada: false,
        likers: 0
      },
      {
        id: '7',
        nome: 'Ruan Otávio',
        descricao: 'Porto Seguro (L)',
        imgperfil:'https://images.unsplash.com/photo-1519255122284-c3acd66be602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
        imgPublicacao:'https://images.unsplash.com/photo-1519255122284-c3acd66be602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
        likeada: false,
        likers: 42
      },
      {
        id: '8',
        nome: 'Mariana Praiana',
        descricao: 'Porto Seguro (L)',
        imgperfil:'https://images.unsplash.com/photo-1593913535006-16096a307ad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=615&q=80',
        imgPublicacao:'https://images.unsplash.com/photo-1593913535006-16096a307ad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=615&q=80',
        likeada: false,
        likers: 50
      },


      ]
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
            source={require('./src/img/logo.png')}
            style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
            source={require('./src/img/send.png')}
            style={styles.send}
            />
          </TouchableOpacity>
          

        </View>
      <FlatList
      showsHorizontalScrollIndicator={false}
      data={this.state.feed}
      renderItem={ ({item}) => <Lista data={item} /> }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,


  },
  logo:{

  },
  send:{
    width: 23,
    height: 23
  }
});


export default App;
