import React, { Component } from 'react';
import {
    Form,
    Input,
    Button
} from 'antd';

class PasswordForm extends React.Component {

    state = {
        confirmDirty: false
      };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    
      handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('패스워드가 일치하지 않습니다.');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="새 비밀번호" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                message: '비밀번호를 입력하십시오.',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                        ],
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="비밀번호 확인" hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                message: '비밀번호를 한번 더 입력하십시오.',
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                        ],
                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={this.handleSubmit}>
                        확인
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create({ name: 'passwordForm' })(PasswordForm);