import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {globalStyles} from '../styles/GlobalStyles';

export default class GetStarted extends React.Component {
  constructor(props) {
    super();
  }

  state = {
    modalVisible: false,
    data: {
      amim: [
        {value: 'Công việc văn phòng', key: 'office'},
        {value: 'Chơi game', key: 'game'},
        {value: 'Để học tập ', key: 'school'},
        {value: 'Thiết kế đồ họa', key: 'design'},
        {value: 'Những việc khác', key: ''},
      ],
      price: [
        {value: 'Dưới 3 triệu đồng/tháng', key: 'low'},
        {value: 'Từ 3 triệu đến 5 triệu đồng/tháng', key: 'medium'},
        {value: 'Trên 5 triệu đồng/tháng', key: 'high'},
      ],
      category: [
        {value: 'Asus', key: 'asus'},
        {value: 'Acer', key: 'acer'},
        {value: 'Dell', key: 'dell'},
        {value: 'Macbook', key: 'macbook'},
        {value: 'HP', key: 'hp'},
        {value: 'Other', key: 'other'},
      ],
    },
    checkAim: 0,
    checkPrice: 0,
    checkCategory: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View style={styles.center_view}>
            <View style={styles.modal}>
              <View style={styles.modal_title}>
                <Text style={styles.text_title}>Gợi ý cho bạn</Text>
              </View>
              <ScrollView style={styles.modal_content}>
                <View style={styles.question}>
                  <Text style={styles.text_content_title}>
                    Bạn thuê máy để làm gì?
                  </Text>
                  {this.state.data.amim.map((value, index) => {
                    return (
                      <View key={value.key}>
                        {this.state.checkAim === index ? (
                          <TouchableOpacity style={styles.btn_radio}>
                            <Image
                              style={styles.img_radio}
                              source={require('../assets/images/radio_checked.png')}
                            />
                            <Text style={styles.text_radio}>{value.value}</Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            style={styles.btn_radio}
                            onPress={() => {
                              this.setState({checkAim: index});
                            }}>
                            <Image
                              style={styles.img_radio}
                              source={require('../assets/images/radio_unchecked.png')}
                            />
                            <Text style={styles.text_radio}>{value.value}</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    );
                  })}
                </View>
                <View style={styles.question}>
                  <Text style={styles.text_content_title}>
                    Bạn đang nghĩ đến máy thuộc dòng nào?
                  </Text>
                  {this.state.data.category.map((value, index) => {
                    return (
                      <View key={value.key}>
                        {this.state.checkCategory === index ? (
                          <TouchableOpacity style={styles.btn_radio}>
                            <Image
                              style={styles.img_radio}
                              source={require('../assets/images/radio_checked.png')}
                            />
                            <Text style={styles.text_radio}>{value.value}</Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            style={styles.btn_radio}
                            onPress={() => {
                              this.setState({checkCategory: index});
                            }}>
                            <Image
                              style={styles.img_radio}
                              source={require('../assets/images/radio_unchecked.png')}
                            />
                            <Text style={styles.text_radio}>{value.value}</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    );
                  })}
                </View>
                <View style={styles.question}>
                  <Text style={styles.text_content_title}>
                    Bạn muốn thuê máy với giá như thế nào?
                  </Text>
                  {this.state.data.price.map((value, index) => {
                    return (
                      <View key={value.key}>
                        {this.state.checkPrice === index ? (
                          <TouchableOpacity style={styles.btn_radio}>
                            <Image
                              style={styles.img_radio}
                              source={require('../assets/images/radio_checked.png')}
                            />
                            <Text style={styles.text_radio}>{value.value}</Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            style={styles.btn_radio}
                            onPress={() => {
                              this.setState({checkPrice: index});
                            }}>
                            <Image
                              style={styles.img_radio}
                              source={require('../assets/images/radio_unchecked.png')}
                            />
                            <Text style={styles.text_radio}>{value.value}</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    );
                  })}
                </View>
                <View style={styles.btn_control}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({modalVisible: false});
                    }}>
                    <Text style={styles.btn_cancel}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.replace('HomeTabNavigation');
                    }}>
                    <Text style={styles.btn_submit}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
        <Text style={styles.title}>
          Chào mừng bạn đến với, Dịch vụ thuê Máy tính và Laptop
        </Text>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => {
            this.setState({modalVisible: true});
          }}>
          <Text style={styles.text}>Đề xuất cho bạn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => {
            this.props.navigation.replace('HomeTabNavigation');
          }}>
          <Text style={styles.text}>Đi đến trang chủ</Text>
        </TouchableOpacity>
        <Image
          style={{
            width: '100%',
            resizeMode: 'cover',
            position: 'absolute',
            top: 60,
            zIndex: -1,
            opacity: 0.8,
          }}
          source={require('../assets/images/GetStarted.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  title: {
    textAlign: 'center',
    width: '80%',
    marginLeft: 35,
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
    lineHeight: 35,
    color: '#333',
  },
  btn1: {
    position: 'absolute',
    top: 120,
    width: '100%',
  },
  btn2: {
    position: 'absolute',
    top: 180,
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    paddingVertical: 12,
    backgroundColor: '#fab610',
    borderRadius: 50,
    marginHorizontal: 80,
    marginTop: 15,
    fontWeight: 'bold',
  },
  modal: {
    width: 300,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  modal_title: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#56c1ff',
    borderRadius: 5,
  },
  text_title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modal_content: {
    width: '100%',
    height: 50,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  text_content_title: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 5,
  },
  btn_radio: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
  },
  img_radio: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
    marginRight: 10,
  },
  text_radio: {
    fontSize: 16,
    fontWeight: '300',
  },
  btn_control: {
    width: '100%',
    height: 50,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  btn_submit: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: '#56c1ff',
    borderRadius: 5,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  btn_cancel: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: '#e1e2e1',
    borderRadius: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  question: {
    marginBottom: 18,
  },
});
