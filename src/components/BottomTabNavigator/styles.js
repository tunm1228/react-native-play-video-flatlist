import styled from 'styled-components/native';

export const Tab = styled.View`
    position: absolute;
    bottom: 0;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top-width: 1px;
    border-top-color: #CCC;
    background: ${props => props.background}
`;

export const Button = styled.TouchableOpacity`
    width: 20%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 10px;
`;

export const Add = styled.View`
    width: 70%;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-left-width: 4px;
    border-right-width: 4px;
    border-radius: 10px;
    border-left-color: #69C9D0;
    border-right-color: #EE1D52;
    background: #FFF;
`;