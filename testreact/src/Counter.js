import React, { Component } from 'react';
/*
class Counter extends Component {
    //컴포넌트의 생성자 메서드- 상속된곳에서 처음에 호출되는 함수
    constructor(props) {
        super(props);
        // state의 초깃값 설정하기
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    render() {
        const { number, fixedNumber } = this.state;//state 를 조회할 때는 this.state 로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    //onClick을 통해 버튼이 클릭되었을때 호출할 함수를 지정합니다.
                    onClick={() => {
                        //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
                        this.setState({ number: number + 1 });
                        this.setState({ number: this.state.number + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        )

    }
}
*/
// state 를 constructor 에서 꺼내기
class Counter extends Component {
    //컴포넌트의 생성자 메서드- 상속된곳에서 처음에 호출되는 함수
    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const { number, fixedNumber } = this.state;//state 를 조회할 때는 this.state 로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    //onClick을 통해 버튼이 클릭되었을때 호출할 함수를 지정합니다.
                    onClick={() => {
                        //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
                        this.setState({ number: number + 1 });
                        this.setState({ number: this.state.number + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        )

    }
}
export default Counter;