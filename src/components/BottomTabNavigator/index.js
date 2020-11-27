import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faInbox, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Tab, Button, Title, Add } from './styles';

export default function BottomTabNavigator({ navigation, background, colorTitle, colorIcon }) {
    return (
        <Tab background={background}>
            <Button onPress={() => navigation.navigate("Home")}>
                <FontAwesomeIcon icon={faHome} size={28} color={colorIcon} />
                <Title style={{ color: colorTitle }}>Home</Title>
            </Button>
            <Button onPress={() => navigation.navigate("Discover")}>
                <FontAwesomeIcon icon={faSearch} size={28} color={colorIcon} />
                <Title style={{ color: colorTitle }}>Discover</Title>
            </Button>
            <Button onPress={() => navigation.navigate("Photo")}>
                <Add>
                    <FontAwesomeIcon icon={faPlus} size={20} color="#010101" />
                </Add>
            </Button>
            <Button onPress={() => navigation.navigate("Inbox")}>
                <FontAwesomeIcon icon={faInbox} size={28} color={colorIcon} />
                <Title style={{ color: colorTitle }}>Inbox</Title>
            </Button>
            <Button onPress={() => navigation.navigate("Profile", { title: "luiz" })}>
                <FontAwesomeIcon icon={faUser} size={28} color={colorIcon} />
                <Title style={{ color: colorTitle }}>Me</Title>
            </Button>
        </Tab>
    )
}