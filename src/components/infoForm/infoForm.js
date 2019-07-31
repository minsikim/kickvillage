import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Icon, Input, Button, Select } from 'antd';
const { Option } = Select;

const StyledFormItem = styled(Form.Item)`
    font-size: 50px;
`

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class InfoForm extends Component {

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {

        const { getFieldDecorator } = this.props.form;

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

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '010',
        })(
            <Select style={{ width: 70 }}>
                <Option value="011">011</Option>
                <Option value="016">016</Option>
                <Option value="017">017</Option>
                <Option value="018">018</Option>
                <Option value="019">019</Option>
            </Select>,
        );

        return (

            <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                <StyledFormItem label="이름">
                    {getFieldDecorator('name', {
                        rules: [
                            {
                                type: 'string',
                                message: 'The input is not valid E-mail!',
                            },
                        ],
                    })(<Input />)}
                </StyledFormItem>

                <StyledFormItem label="연락처">
                    {getFieldDecorator('phone', {
                        rules: [{ message: 'Please input your phone number!' }],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </StyledFormItem>

                <StyledFormItem label="비밀번호">
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                message: 'Please input your password!',
                            }
                        ],
                    })(<Input.Password />)}
                    <Button type="primary">
                        변경
                    </Button>
                </StyledFormItem>
            </Form>
        );
    }
}

export default Form.create({ name: 'infoForm' })(InfoForm);