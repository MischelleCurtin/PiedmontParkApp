import React, {Component} from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import {STOPS} from '../constants/stops';


class Tour extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stops: STOPS
        }
    }

    static navigationOptions = {
        title: 'Tour',
    }

    render() {
        const renderTourStop = ({item, index}) => {
            return(
                <ListItem
                    key = {index}
                    title = {item.name}
                    hideChevron = {true}
                    onPress = {() => navigate('TourStopDetail', {stopId: item.id})}
                />
            )
        }
        const {navigate} = this.props.navigation;

        return (
            <FlatList 
                data = {this.state.stops}
                renderItem = {renderTourStop}
                keyExtractor = {item => item.id.toString()}
            />
        )
    }   
}

export default Tour;