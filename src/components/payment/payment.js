import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'antd';

const StyledEditButton = styled(Button)`
    border: none;
    font-color: #6E54E9;
`

const StyledAddCardButton = styled(Button)`
    background-color: #6E54E9;
`

class Payment extends Component {
    render () {
        const formItemLayout = {
            labelCol: {
                xs: { span: 16 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 8 },
                sm: { span: 6 },
            },
        };
        return (
            <div>
                <Form {...formItemLayout}>
                    <Form.Item>
                        <StyledEditButton type="link"> 편집 </StyledEditButton>
                        <Button type="primary"> 카드 추가 등록 </Button>
                    </Form.Item>
                </Form>

            </div>
        );
    }

}

export default Payment;