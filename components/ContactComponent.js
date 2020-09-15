import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Card title="Contact Information" wrapperStyle={{margin: 20}}>
                    <Text>1 NuCamp Way</Text>
                    <Text>Seatle, WA. 98001</Text>
                    <Text>USA</Text>
                    <Text style={{marginTop: 10}}>Phone: 1-206-555-1234</Text>
                    <Text style={{marginBottom: 10}}>Email: campsites@nucamp.co</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;