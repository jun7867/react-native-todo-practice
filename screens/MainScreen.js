import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputForm from '../components/InputForm'
import TodoItem from '../components/TodoItem'

const MainScreen = () => {
    return (
        // IOS 11 이상에 적용되고 IOS 기종의 상단 부분 안전 경계 부분 조작
        <SafeAreaView style={styles.container}>
            {/* 상태표시줄 제어 */}
            <StatusBar barStyle={'dark-content'} />
            <Text style={styles.pageTitle}>TODO APP</Text>
            <View style={styles.listView}>
                <Text style={styles.listTitle}>할 일</Text>
                <TodoItem />
            </View>
            <View style={styles.divider} />
            <View style={styles.listView}>
                <Text style={styles.listTitle}>완료된 일</Text>
                <TodoItem />
            </View>
            <InputForm />
        </SafeAreaView>

    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#f7f8fa',
    },
    pageTitle: {
        marginBottom: 35,
        paddingHorizontal: 15,
        fontSize: 40,
    },
    divider: {
        marginHorizontal: 10,
        marginTop: 25,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2',
    },
    listView: {
        flex: 1,
    },
    listTitle: {
        marginBottom: 25,
        paddingHorizontal: 15,
        fontSize: 40,
        fontWeight: '500',
    }
})