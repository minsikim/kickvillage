import React from 'react';
import { Button, PageHeader } from 'antd';
import classNames from 'classnames/bind';
import styled from 'styled-components';

const StyledHeader = styled(PageHeader)`
    background-color: #6E54E9;
    color: #FFFFFF;
    font-size: 20px;
    text-align: center;
    line-height: 50%;
    height: 60px;
`

const Header = () => (
    <div>
        <StyledHeader> 
            내 정보
        </StyledHeader>
    </div>
);

export default Header;
