import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background: #FFF;
`;

export const UserImage = styled.Image`
    align-self: center;
    margin-top: 15px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border-width: 1px;
    border-color: #E5E5E5;
    align-items: center;
    justify-content: center;
`;

export const UserName = styled.Text`
    margin-top: 20px;
    font-weight: bold;
    align-self: center;
`;

export const UserFollowers = styled.View`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UserFollowersText = styled.View`
    width: 30%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const UserFollowersTextNumber = styled.Text`
    color: #010101;
    font-weight: bold;
`;

export const UserFollowersTextDesc = styled.Text`
    margin-top: 10px;  
    color: #333;
`;

export const EditProfile = styled.View`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ButtonEditProfile = styled.TouchableOpacity`
    width: 200px;
    height: 52px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: solid 1px #333;
    padding: 15px;
`;

export const ButtonEditProfileText = styled.Text`
    color: #333;
`;

export const ButtonFavorites = styled.TouchableOpacity`
    margin-left: 10px;
    display: flex;
    height: 52px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: solid 1px #333;
    padding: 15px;
`;

export const ButtonAddBio = styled.TouchableOpacity`
    margin-left: 10px;
    display: flex;
    height: 52px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

export const ButtonAddBioText = styled.Text`
    color: #333;
`;

export const Tabs = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: #E5E5E5;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: #E5E5E5;
`;

export const Tab = styled.TouchableOpacity`
    width: 33%;
    height: 50px;
    align-items: center;
    justify-content: center;
`;
