//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from 'react-native-basic-elements';
import PodcastTrendingCard from '../../Component/Podcast/PodcastTrendingCard';

// create a component
const Author = () => {
    return (
       <Container>
        <PodcastTrendingCard />
       </Container>
    );
};



//make this component available to the app
export default Author;
