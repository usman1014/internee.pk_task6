import React, { useEffect, useState } from 'react'
import { FlatList, Image, Keyboard, KeyboardAvoidingView, Modal, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Task } from '../../Components/Task'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskScreen = ({ props }) => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const [modal, setModal] = useState(false)
    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = () => {
        AsyncStorage.getItem('TASKS').then(res => {
            if (res) {
                const tasks = JSON.parse(res);
                setTaskItems(tasks);
            } else {
                setTaskItems([])
            }
        });
    }

    const handleAddTask = () => {
        if (task == null) {
            alert("Please enter Something!");
        } else {
            const newTaskItems = [task, ...taskItems]; // Add new task to the beginning of the array
            setTaskItems(newTaskItems);
            setTask(null);
            Keyboard.dismiss();
            AsyncStorage.setItem('TASKS', JSON.stringify(newTaskItems))
        }
    };

    const completeTaskHandle = (index) => {

        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
        AsyncStorage.setItem('TASKS', JSON.stringify(itemsCopy));
        setModal(false)

    }
    const modalPress = (index) => {
        setModal(true)
    }

    return (
        <View style={styles.main}>
            <StatusBar translucent barStyle='default' backgroundColor='transparent' />
            <View style={styles.header} >
                <Text style={styles.name}>TASKY</Text>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.items}>
                    <FlatList
                        fadingEdgeLength={50}
                        contentContainerStyle={{ paddingBottom: 200 }}
                        showsVerticalScrollIndicator={false}
                        data={taskItems}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity key={index} onPress={() => modalPress(index)}>
                              
                                <Task text={item} />

                            </TouchableOpacity>
                        )}
                    />


                </View>

            </View>
            <KeyboardAvoidingView
                style={styles.writeTaskWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder='Write a Task'
                    value={task}
                    onChangeText={(txt) => setTask(txt)}
                />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Image style={styles.arrow} source={require('../../assets/up.png')} />

                    </View>
                </TouchableOpacity>

            </KeyboardAvoidingView>
            <Modal
    visible={modal}
    transparent
    statusBarTranslucent
>
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Confirm</Text>
            <Text style={styles.message}> Are you sure you want remove this task?</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => completeTaskHandle()}>
                <Text style={styles.btnText}>Remove</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelBtn} onPress={() => setModal(false)}>
                <Text style={{ color: '#333', textAlign: 'center', }}>Cancel</Text>
            </TouchableOpacity>
        </View>
    </View>
</Modal>
        </View>
    )
}
