import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../../components/Header';
class ContentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>

                </Content>
            </Container>
        );
    }
}

export default Content;
