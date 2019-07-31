import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import PasswordForm from '../components/passwordform';

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

class PasswordChange extends Component {

    render() {
        return (
            <PageTemplate>
                <Header />
                <StyledTitle id="title"> 비밀번호 변경 </StyledTitle>
                <PasswordForm />
            </PageTemplate>
        );
    }
}

export default PasswordChange;