import React from 'react'
import { Form, Icon, Input, Button, Select, message, Checkbox, Modal, Alert } from 'antd'
const FormItem = Form.Item

// Note: just comment this the below import line
// ---
// There are many ways to reproduce error even without using Redux at all
// for example import a component from a page in sub folder (pages/subpage.js) but it don't reproduce the error this time
// This is very strange because the causes of the problem keep changing when trying to create a produce repo from a big project

import { connect } from 'react-redux'

class SellForm extends React.Component {

  render () {
    return (
      <div>
        <Form>
          <FormItem>
            {getFieldDecorator('check', {})(
              <Checkbox>Checkbox</Checkbox>
            )}
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create({})(SellForm)

