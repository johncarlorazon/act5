
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, ScrollView, Button, Image } from 'react-native';
import { styles } from './styles/styles';

const userDataWithImages = [
  {
    firstName: 'Arnel',
    lastName: 'Casanoba',
    nickname: 'Aniw',
    course: 'BSCRIM',
    year: 'Third Year',
    image: require('./assets/aniw.jpg'), 
  },
  {
    firstName: 'Cegie',
    lastName: 'Simacon',
    nickname: 'siji',
    course: 'BSCRIM',
    year: 'Third Year',
    image: require('./assets/ciji.jpg'), 
  },
  {
    firstName: 'Christian Joven',
    lastName: 'Racho',
    nickname: 'jobin',
    course: 'BSELECT',
    year: 'Third Year',
    image: require('./assets/joven.jpg'),
  },
  {
    firstName: 'Kim Micheal',
    lastName: 'Ranario',
    nickname: 'kem',
    course: 'BSCRIM',
    year: 'Third Year',
    image: require('./assets/kim.jpg'), 
  },
  {
    firstName: 'Christopher',
    lastName: 'Magwan',
    nickname: 'opi',
    course: 'BSCRIM',
    year: 'Third Year',
    image: require('./assets/opi.jpg'),
  },
  {
    firstName: 'John Carlo',
    lastName: 'Razon',
    nickname: 'carlo',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/me.jpg'), 
  },
];

const UserList = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedUser(item);
      setModalVisible(true);
    }}>
      <Text style={styles.nickname}>{item.nickname}</Text>
    </TouchableOpacity>
  );

  <View style={styles.container}>
       <Text style={styles.pt}>Team Hamal</Text>
      <FlatList
        data={userDataWithImages}
        keyExtractor={(item) => item.nickname}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          {selectedUser && (
            <ScrollView>
              <Text style={styles.fullName}>
                {selectedUser.firstName} {selectedUser.lastName}
              </Text>
              <Text>Nickname: {selectedUser.nickname}</Text>
              <Text>Course: {selectedUser.course}</Text>
              <Text>Year: {selectedUser.year}</Text>
              {selectedUser.image && <Image source={selectedUser.image} style={{ width: 200, height: 200 }} />}
              <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
            </ScrollView>
          )}
        </View>
      </Modal>
    </View>
  
};

export default UserList;   