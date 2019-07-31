import React, { Component } from 'react';
import Header from '../components/header';
import Info from '../components/infoForm';
import Payment from '../components/payment'
import styled from 'styled-components';

const StyledTitle = styled.div`
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 30px;
    font-weight: bold;
    color: 585858;
    font-size: 30px;
`

const PageTemplate = styled.div`
    background: white;
`

class MyInfo extends Component {

    render() {
        return (
            <PageTemplate>
                <Header />
                <StyledTitle id="title"> 회원정보 </StyledTitle>
                <Info />
                <StyledTitle id="payment"> 결제 </StyledTitle>
                <Payment />
            </PageTemplate>
        );
    }
}

export default MyInfo;