import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Platform, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';

const videos = [
    { url: require('../../assets/mother.mp4'), id: 1 },
    { url: require('../../assets/lindo.mp4'), id: 2 },
    { url: require('../../assets/lights.mp4'), id: 3 },
    { url: require('../../assets/mother.mp4'), id: 4 },
    { url: require('../../assets/lights.mp4'), id: 5 },
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
                                style={styles.backgroundVideo}>
                                <Video
                                    source={item.url}
                                    ref={(ref) => {
                                        this.player = ref;
                                    }}
                                    paused={index !== currentVisibleIndex || !isPause}
                                    repeat
                                    resizeMode="stretch"
                                    style={styles.video}
                                />
                                {
                                    !isPause ? <Image source={require('../../assets/play-button.png')} style={styles.imgPlay} /> : null
                                }
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
            </View>
        );
    }
}
const styles = StyleSheet.create({
    backgroundVideo: {
        height: height,
        backgroundColor: '#cacaca',
        justifyContent: 'center',
        alignItems: 'center'
    },
    video: {
        height: '100%',
        width: '100%'
    },
    imgPlay: {
        position: 'absolute',
        alignSelf: 'center',
        height: 30, width: 30,
        tintColor: '#cacaca'
    }
});
export default Home;
