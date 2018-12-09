import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bins'
import BinsEditor from './binsEditor'
import BinsViewer from './binsViewer'
import BinsShare from './binsShare'

class BinsMain extends Component {
  render () {
    if (!this.props.bin) { return <div>LOADING...</div> }
    return (
      <div>
        <BinsEditor bin={this.props.bin} />
        <BinsViewer bin={this.props.bin} />
        <BinsShare bin={this.props.bin} />
      </div>
    )
  }
}

export default withTracker((props) => {
  const { binId } = props.params
  Meteor.subscribe('bins')
  Meteor.subscribe('sharedBins')
  return { bin: Bins.findOne(binId) }
})(BinsMain)
