import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Platform, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';
import BottomTabNavigator from '../../components/BottomTabNavigator';
import {
    styles,
    NewsByFollowing,
    NewsByFollowingText,
    NewsByFollowingTextBold,
    ContentRight,
    ContentRightUser,
    ContentRightUserImage,
    ContentRightUserPlus,
    ContentRightHeart,
    ContentRightComment,
    ContentRightWhatsApp,
    ContentRightWhatsAppImage,
    ContentRightText,
    ContentLeftBottom,
    ContentLeftBottomNameUser,
    ContentLeftBottomNameUserText,
    ContentLeftBottomDescription,
    ContentLeftBottomMusic
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faHeart, faCommentDots, faPlay } from '@fortawesome/free-solid-svg-icons';

const videos = [
    {
        id: 1,
        url: require('../../assets/mother.mp4'),
        // url: "https://v19.tiktokcdn.com/ec97a92e6ba0f9fd7bc6b8b38b102973/5ec4acfd/video/tos/useast2a/tos-useast2a-pve-0068/35f8c0a1d6294d5cb914a69f103689e1/?a=1233&br=1798&bt=899&cr=0&cs=0&dr=0&ds=3&er=&l=2020051922065501018907221607A9BE96&lr=tiktok_m&qs=0&rc=M3dtZDc0a2RmdDMzNjczM0ApOzZnNzxnZGUzNzM1PGRkNmdtamwtLW5ebXNfLS1eMTZzc18zNDMyNS0xLmExNDNjMzY6Yw%3D%3D&vl=&vr=",
        user: {
            name: "Vídeo",
            following: 12121,
            followers: 4564,
            likes: 3243,
            image: "https://i.pinimg.com/originals/7b/8f/49/7b8f492529fd236dc59baf184faf8488.jpg"
            // image: "https://p16-va-default.akamaized.net/img/musically-maliva-obj/1606484041765893~c5_720x720.jpeg"
        },
        countLikes: 172,
        countComments: 111,
        countWhatsApp: 112,
        description: "No litoral da região de Marlborough, diversos fiordes, ou “sounds” como definidos na Nova Zelândia.",
        music: "Relaxante & Musica Ambiental Clube"
    },
    {
        id: 2,
        url: require('../../assets/lindo.mp4'),
        // url: "https://v19.tiktokcdn.com/ec97a92e6ba0f9fd7bc6b8b38b102973/5ec4acfd/video/tos/useast2a/tos-useast2a-pve-0068/35f8c0a1d6294d5cb914a69f103689e1/?a=1233&br=1798&bt=899&cr=0&cs=0&dr=0&ds=3&er=&l=2020051922065501018907221607A9BE96&lr=tiktok_m&qs=0&rc=M3dtZDc0a2RmdDMzNjczM0ApOzZnNzxnZGUzNzM1PGRkNmdtamwtLW5ebXNfLS1eMTZzc18zNDMyNS0xLmExNDNjMzY6Yw%3D%3D&vl=&vr=",
        user: {
            name: "Vídeo",
            following: 12121,
            followers: 4564,
            likes: 3243,
            image: "https://i.pinimg.com/originals/7b/8f/49/7b8f492529fd236dc59baf184faf8488.jpg"
            // image: "https://p16-va-default.akamaized.net/img/musically-maliva-obj/1606484041765893~c5_720x720.jpeg"
        },
        countLikes: 172,
        countComments: 111,
        countWhatsApp: 112,
        description: "No litoral da região de Marlborough, diversos fiordes, ou “sounds” como definidos na Nova Zelândia.",
        music: "Relaxante & Musica Ambiental Clube"
    },
    {
        id: 3,
        url: require('../../assets/lights.mp4'),
        // url: "https://v19.tiktokcdn.com/ec97a92e6ba0f9fd7bc6b8b38b102973/5ec4acfd/video/tos/useast2a/tos-useast2a-pve-0068/35f8c0a1d6294d5cb914a69f103689e1/?a=1233&br=1798&bt=899&cr=0&cs=0&dr=0&ds=3&er=&l=2020051922065501018907221607A9BE96&lr=tiktok_m&qs=0&rc=M3dtZDc0a2RmdDMzNjczM0ApOzZnNzxnZGUzNzM1PGRkNmdtamwtLW5ebXNfLS1eMTZzc18zNDMyNS0xLmExNDNjMzY6Yw%3D%3D&vl=&vr=",
        user: {
            name: "Vídeo",
            following: 12121,
            followers: 4564,
            likes: 3243,
            image: "https://i.pinimg.com/originals/7b/8f/49/7b8f492529fd236dc59baf184faf8488.jpg"
            // image: "https://p16-va-default.akamaized.net/img/musically-maliva-obj/1606484041765893~c5_720x720.jpeg"
        },
        countLikes: 172,
        countComments: 111,
        countWhatsApp: 112,
        description: "No litoral da região de Marlborough, diversos fiordes, ou “sounds” como definidos na Nova Zelândia.",
        music: "Relaxante & Musica Ambiental Clube"
    },
    {
        id: 4,
        url: require('../../assets/mother.mp4'),
        // url: "https://v19.tiktokcdn.com/ec97a92e6ba0f9fd7bc6b8b38b102973/5ec4acfd/video/tos/useast2a/tos-useast2a-pve-0068/35f8c0a1d6294d5cb914a69f103689e1/?a=1233&br=1798&bt=899&cr=0&cs=0&dr=0&ds=3&er=&l=2020051922065501018907221607A9BE96&lr=tiktok_m&qs=0&rc=M3dtZDc0a2RmdDMzNjczM0ApOzZnNzxnZGUzNzM1PGRkNmdtamwtLW5ebXNfLS1eMTZzc18zNDMyNS0xLmExNDNjMzY6Yw%3D%3D&vl=&vr=",
        user: {
            name: "Vídeo",
            following: 12121,
            followers: 4564,
            likes: 3243,
            image: "https://i.pinimg.com/originals/7b/8f/49/7b8f492529fd236dc59baf184faf8488.jpg"
            // image: "https://p16-va-default.akamaized.net/img/musically-maliva-obj/1606484041765893~c5_720x720.jpeg"
        },
        countLikes: 172,
        countComments: 111,
        countWhatsApp: 112,
        description: "No litoral da região de Marlborough, diversos fiordes, ou “sounds” como definidos na Nova Zelândia.",
        music: "Relaxante & Musica Ambiental Clube"
    },
]
const { height, width } = Dimensions.get('window');
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVisibleIndex: null,
            isPause: true
        };
        this.viewabilityConfig = { viewAreaCoveragePercentThreshold: 70 };
        this.index = 0;
    }
    _onViewableItemsChanged = (props) => {
        const changed = props.changed;
        const viewableItems = props.viewableItems;
        if (viewableItems && viewableItems.length > 0) {
            this.setState({ currentVisibleIndex: viewableItems[0].index });
        }
    };

    isLegitIndex(index, length) {
        if (index < 0 || index >= length) return false;
        return true;
    }


    pagination = (velocity) => {
        let nextIndex;
        if (Platform.OS == "ios")
            nextIndex = velocity >= 0 ? this.index + 1 : (this.index > 1 ? this.index - 1 : 0);
        else
            nextIndex = velocity < 0 ? this.index : this.index + 1;
        if (this.isLegitIndex(nextIndex, videos.length)) {
            this.index = nextIndex;
        }
        this.setState({ isPause: true })
        this.flatListRef.scrollToIndex({ index: this.index, animated: true });
    }

    render() {
        let { navigation } = this.props;
        let { currentVisibleIndex, isPause } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={videos}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => this.setState({ isPause: !isPause })}
                                activeOpacity={0.9}
                                style={{
                                    height: height,
                                    backgroundColor: '#cacaca',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Video
                                    source={item.url}
                                    ref={(ref) => {
                                        this.player = ref;
                                    }}
                                    paused={index !== currentVisibleIndex || !isPause}
                                    repeat
                                    resizeMode="stretch"
                                    style={{
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                                {
                                    !isPause ? <Image source={require('../../assets/play-button.png')} style={{
                                        position: 'absolute',
                                        alignSelf: 'center',
                                        height: 30, width: 30,
                                        tintColor: '#cacaca'
                                    }} /> : null
                                }
                                <ContentRight>
                                    <ContentRightUser>
                                        <ContentRightUserImage resizeMode="contain" source={{ uri: item.user.image }} />
                                    </ContentRightUser>
                                    <ContentRightUserPlus>
                                        <FontAwesomeIcon icon={faPlus} size={12} color="#FFF" />
                                    </ContentRightUserPlus>
                                    <ContentRightHeart>
                                        <FontAwesomeIcon icon={faHeart} size={28} color="#FFF" />
                                        <ContentRightText>{item.countLikes > 1000 ? `${item.countLikes}K` : item.countLikes}</ContentRightText>
                                    </ContentRightHeart>
                                    <ContentRightComment>
                                        <FontAwesomeIcon icon={faCommentDots} size={28} color="#FFF" />
                                        <ContentRightText>{item.countComments > 1000 ? `${item.countComments}K` : item.countLikes}</ContentRightText>
                                    </ContentRightComment>
                                    <ContentRightWhatsApp>
                                        <ContentRightWhatsAppImage source={{ uri: "https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone.png" }} />
                                        <ContentRightText>{item.countWhatsApp > 1000 ? `${item.countWhatsApp}K` : item.countLikes}</ContentRightText>
                                    </ContentRightWhatsApp>
                                </ContentRight>
                                <ContentLeftBottom>
                                    <ContentLeftBottomNameUser onPress={() => navigation.navigate("User", {
                                        user: {
                                            image: item.user.image,
                                            name: item.user.name,
                                            following: item.user.following,
                                            followers: item.user.followers,
                                            likes: item.user.likes
                                        }
                                    })}>
                                        <ContentLeftBottomNameUserText numberOfLines={1}>{item.user.name}</ContentLeftBottomNameUserText>
                                    </ContentLeftBottomNameUser>
                                    <ContentLeftBottomDescription numberOfLines={3}>{item.description}</ContentLeftBottomDescription>
                                    <ContentLeftBottomMusic numberOfLines={1}>{item.music}</ContentLeftBottomMusic>
                                </ContentLeftBottom>
                            </TouchableOpacity>
                        )
                    }}
                    ref={(ref) => { this.flatListRef = ref }}
                    onScrollEndDrag={(e) => {
                        this.pagination(
                            e.nativeEvent.velocity.y,
                        );
                    }}
                    viewabilityConfig={this.viewabilityConfig}
                    onViewableItemsChanged={this._onViewableItemsChanged}
                />
                <BottomTabNavigator background="transparent" colorIcon="#FFF" colorTitle="#FFF" navigation={navigation} />
            </View>
        );
    }
}

export default Home;
