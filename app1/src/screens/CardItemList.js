import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {data} from '../models/data';
import {brand} from '../models/brand';
import Card from '../components/Card';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function CardItemList({navigation, route}) {
  const renderItem = ({item}) => {
    return (
      <Card
        itemData={item}
        onPress={() => navigation.navigate('CardItemDetail', {itemData: item})}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_card}>
        <View style={styles.header_card_top}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesome5 name={'chevron-left'} size={25} color="#999" />
          </Pressable>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginLeft: 20,
              color: '#333',
            }}>
            Choose a Device
          </Text>
        </View>
        <FontAwesome5 name={'search'} size={22} color="#999" />
      </View>
      <View style={styles.category}>
        <Text style={styles.title}>Brand</Text>
        <View style={styles.brand_list}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={brand}
            renderItem={({item}) => (
              <View style={styles.brand_item}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#000',
                    textAlign: 'center',
                  }}>
                  {item.name}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  body: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  header_card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  header_card_top: {
    flexDirection: 'row',
  },
  category: {
    paddingLeft: 10,
    paddingBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 15,
  },
  brand_item: {
    width: 90,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderBottomWidth: 3,
    borderColor: '#ddd',
  },
});
