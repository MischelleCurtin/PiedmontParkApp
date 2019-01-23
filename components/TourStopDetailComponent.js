import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import {STOPS} from '../constants/stops';


function RenderTourStop(props) {
    const stop = props.stop;

    if (stop != null) {
        return (
            <Card
                featuredTitle = {stop.name}
            >
                {/* <Text style = {{margin: 10}}> {stop.description} </Text> */}
            </Card>
        );
    } else {
        return(<View />);
    }
}

class TourStopDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stops: STOPS
        }
    }

    static navigationOptions = {
        title: 'Tour Stop Detail',
    }

    render() {
        const stopID = this.props.navigation.getParam('stopId', '')
        return(<RenderTourStop stop = {this.state.stops[+stopID]} />);
    }
}

export default TourStopDetail;

