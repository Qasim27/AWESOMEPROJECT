import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, TextInput, KeyboardAvoidingView, Pressable } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from  '@react-navigation/native-stack'


const menuItemsToDisplay = [
  {
    title: 'Body Maintenance',
    data: ['Workout', 'Nutrition/Diet', 'Group Workouts'],
    expanded: false,
  },
  {
    title: 'Activity Report',
    data: ['Progress/Stats', 'Training Plans', 'Tracking'],
    expanded: false,
  },
  {
    title: 'About',
    data: ['Community', 'Profile'],
    expanded: false,
  },
  {
    title: 'More',
    data: ['Settings'],
    expanded: false,
  },
];
//const Stack = createNativeStackNavigator();
const Separator = () => <View style={styles.separator} />;

const MenuItems = ({ navigation }) => {
  // @ts-ignore
  
  const [showMenu, setShowMenu] = useState(false);
  const [menuItems, setMenuItems] = useState(menuItemsToDisplay);

  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Text style={styles.menuItemText}>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <Pressable onPress={() => toggleSection(section)}>
      <Text style={styles.sectionHeader}>{section.title}</Text>
    </Pressable>
  );

  const toggleSection = (section) => {
    const updatedItems = menuItems.map((item) => {
      if (item.title === section.title) {
        return { ...item, expanded: !item.expanded };
      }
      return item;
    });
    setMenuItems(updatedItems);
  };

  const [phoneNumber, onChangePhoneNumber] = useState('');
  
  const handleWorkoutPress = () => {
    navigation.navigate('Workout');
  };
  

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => setShowMenu(!showMenu)}>
        <Text style={styles.buttonText}>{showMenu ? 'Home' : 'View Menu'}</Text>
      </Pressable>
      <Text style={{ height: 20 }}></Text>
      {showMenu && (
        <SectionList
          sections={menuItems}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item, index) => item + index}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={
            <View>
              <Text style={styles.footerText}>Enter your Credentials</Text>
              <TextInput style={styles.input} placeholder="Name" />
              <TextInput style={styles.input} placeholder="Email" />
              <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" />
              <Text style={{ height: 20 }} />
              <TextInput
                style={styles.input}
                value={phoneNumber}
                onChangeText={onChangePhoneNumber}
                placeholder="Phone Number"
                keyboardType="phone-pad"
              />
              <TextInput style={styles.input} placeholder="Address" />
              <Separator />
            </View>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuItemText: {
    fontSize: 20,
    fontWeight: '300',
    fontStyle: 'normal',
    color: 'white',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#008080',
  },
  footerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
  input: {
    height: 40,
    borderWidth: 1,
    fontSize: 20,
    margin: 12,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'black',
  },
});

export default MenuItems;



































