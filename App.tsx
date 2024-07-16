import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Image, StyleSheet, Alert } from 'react-native';
import Block from './Component/Block';
import Banner from './Component/Banner';
import Button from './Component/Button';
import TextInput from './Component/TextInput';
import Theme from './Component/Theme';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <SafeAreaView style={[styles.container, theme === 'dark' && styles.darkTheme]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require(`./img/img_slie_3.jpg`)} />
        {/* <Image source={{ uri: 'https://your-logo-url.com/logo.png' }} style={styles.logo} />
        <Banner source={{ uri: 'https://your-banner-url.com/banner.jpg' }} /> */}
        <Block title="Thông tin cá nhân">
          <TextInput placeholder="Họ và tên" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Số điện thoại" />
        </Block>
        <Block title="Thông tin khóa học">
          <TextInput placeholder="Tên khóa học" />
          <TextInput placeholder="Mã khóa học" />
        </Block>
        <Block title="Thông tin liên hệ">
          <TextInput placeholder="Địa chỉ" />
          <TextInput placeholder="Ghi chú" />
        </Block>
        <Button title="Đăng ký" onPress={() => alert('Đăng ký thành công!')} />
        <Theme title="Đổi Theme" onPress={toggleTheme} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  darkTheme: {
    backgroundColor: '#333',
  },
  scrollContainer: {
    padding: 20,
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default App;
