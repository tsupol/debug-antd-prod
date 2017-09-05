import React from 'react'
import page from '../hocs/page'
import MainMenu from '../components/menu/MainMenu'
import { compose, bindActionCreators } from 'redux'
import { Form, Icon, Input, Button, Checkbox, message, Modal, Alert, Select } from 'antd'
const Option = Select.Option
import { connect } from 'react-redux'

class IndexPage extends React.Component {
  static async getInitialProps() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <MainMenu {...this.props}/>
        <Checkbox>I cannot toggle this</Checkbox>
        <Select defaultValue="lucy" style={{ width: 120 }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    )
  }
}


export default compose(
  page,
)(IndexPage)