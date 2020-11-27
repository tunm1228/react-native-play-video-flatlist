import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHashtag, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import BottomTabNavigator from '../../components/BottomTabNavigator';

import { Container } from './styles';
import randomize from '../../utils/randomize';


export default function Discover({ navigation }) {

    const videos = [
        { url: "https://i.pinimg.com/564x/27/b4/5c/27b45cfadb28dbd857ebd662fe3cc1fe.jpg" },
        { url: "https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg" },
        { url: "https://cdn.mensagenscomamor.com/content/images/m000518052.jpg?v=1&w=600&h=941" },
        { url: "https://66.media.tumblr.com/2170b24c045a368996ed3d0b84e74c4e/tumblr_pjn69mp52s1tbym8o_1280.jpg" },
        { url: "https://i.pinimg.com/564x/27/b4/5c/27b45cfadb28dbd857ebd662fe3cc1fe.jpg" },
    ]

    const categories = [
        { name: "selfcomemoji", description: "Trending" },
        { name: "amoréamor", description: "Trending" },
        { name: "athomewith", description: "Trending" },
        { name: "errodeportugues", description: "Trending" },
        { name: "horadopenalti", description: "Trending" },
    ]

    return (
        <Container>
            <ScrollView style={{ paddingHorizontal: 15 }}>
                {categories.map((categorie, k) => (
                    <View key={k} style={{
                        paddingVertical: 15,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: '#E5E5E5',
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginVertical: 10
                        }}>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                borderColor: '#333',
                                borderWidth: StyleSheet.hairlineWidth
                            }}>
                                <FontAwesomeIcon icon={faHashtag} size={20} color="#E5E5E5" />
                            </View>
                            <View style={{
                                width: '50%'
                            }}>
                                <Text style={{ fontWeight: 'bold' }}>{categorie.name}</Text>
                                <Text style={{ color: '#333' }}>{categorie.description}</Text>
                            </View>
                            <View style={{
                                width: '25%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <FontAwesomeIcon icon={faChevronRight} size={20} color="#E5E5E5" />
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {randomize(videos).map((video, key) => (
                                    <Image
                                        key={key}
                                        source={{ uri: video.url }}
                                        style={{
                                            width: 150,
                                            height: 200,
                                            marginHorizontal: 2
                                        }} />
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <BottomTabNavigator background="#010101" colorIcon="#FFF" colorTitle="#FFF" navigation={navigation} />
        </Container>
    )
}