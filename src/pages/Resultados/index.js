import React, {useState} from 'react';
import { 
  TouchableOpacity,
  View,
  Image,
  StyleSheet, 
  StatusBar, 
  SafeAreaView, 
  FlatList,
  ImageBackground,
  Keyboard,
  Dimensions,
} from 'react-native';
import HeaderSearch from '../../Components/HeaderSearch';
import axios from 'axios'
import Imagem from '../../../assets/BG.png';
import TextInfo from '../../Components/TextInfo';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import API_KEY from '../../API_KEY';

export default function Tela2(props) {
  const choice = props.route.params.choice;
  const link = `https://api.giphy.com/v1/${choice}/search`;

  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [showInfo, setShowInfo] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const getApi = async (text) => {
    Keyboard.dismiss();
    showError && setShowError(false) ;
    setShowInfo(false);
    setIsLoading(true);
    try{
      const results = await axios.get(link, {
        params:{
          api_key: API_KEY,
          q: text,
          lang: "pt",
        },
      });
      setIsLoading(false);
      setData(results.data.data);
    } catch(error) {
      setIsLoading(false)
      setShowError(true);
    }
  }; 
  return(
    <ImageBackground source={Imagem} style={styles.container}>
      <SafeAreaView style={styles.view}>
        <HeaderSearch 
          navigation={props.navigation} 
          text={text} setText={setText} 
          getApi={getApi}
        />

        <FlatList 
          data={data}
          keyExtractor={(element) => element.id}
          numColumns={2}
          ListHeaderComponent={
            <>
              <TextInfo showInfo={showInfo} />
              <Loading isLoading={isLoading} />
              <Error showError={showError}/>
            </>
          }
          renderItem={({item}) => {
            return(
              <TouchableOpacity onPress={() => {props.navigation.navigate('Detalhes', {item: item})}}>
                <View style={{}}>
                  <Image 
                    style={styles.image}
                    source={{uri: item.images.preview_gif.url}}
                  />
                </View>
              </TouchableOpacity>
            )
          }}
        
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const {width, height} = Dimensions.get("window");
const COLUMN_WIDTH = width/2;
const IMAGE_WIDTH =  COLUMN_WIDTH * 0.9;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  view: {
    marginTop: StatusBar.currentHeight,
  },
  image:{
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    margin: IMAGE_WIDTH * 0.05,
  }
})