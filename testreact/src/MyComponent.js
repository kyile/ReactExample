import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*
const MyComponent = props => {
    return (
        <div>
            안녕하세요, 제이름은 {props.name}입니다. <br />
            children 값은 {props.children}
            입니다.
        </div>
    );
};
//컴포넌트 기본값 설정 
MyComponent.defaultProps = {
    name: '기본이름'
};
*/
/*
//비구조화 할당으로 props 내부값 추출하기
const MyComponent = props => {
    const { name, children } = props;
    return (
        <div>
            안녕하세요, 제이름은 {name}입니다. <br />
            children 값은 {children}
            입니다.
        </div>
    );
};*/

//1. 함수형 컴포넌트

//비구조화 할당으로 props 내부값 추출하기
/*
const MyComponent = ({ name, children, favoriteNumber }) => {
    return (
        <div>
            안녕하세요, 제이름은 {name}입니다. <br />
            children 값은 {children}
            입니다.<br />
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    );
};
//컴포넌트 기본값 설정 
MyComponent.defaultProps = {
    name: '기본이름'
};
//propTypes
MyComponent.propTypes = {
    name: PropTypes.string, //무조건 props는 문자형으로 전달 해야함
    favoriteNumber: PropTypes.number.isRequired
};*/
//2. 클래스형 컴포넌트

//비구조화 할당으로 props 내부값 추출하기
class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }

    render() {
        const { name, favoriteNumber, children } = this.props;//비구조화 할당
        return (
            <div>
                안녕하세요, 제이름은 {name}입니다. <br />
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}
/*
//컴포넌트 기본값 설정 
MyComponent.defaultProps = {
    name: '기본이름'
};
//propTypes
MyComponent.propTypes = {
    name: PropTypes.string, //무조건 props는 문자형으로 전달 해야함
    favoriteNumber: PropTypes.number.isRequired
};*/
export default MyComponent;