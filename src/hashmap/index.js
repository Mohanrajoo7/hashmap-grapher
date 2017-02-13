import React, { Component } from 'react';
import './hashmap.css';
import InsertModal from './insert-modal';

const Entry = entry => (
  <tr>
    <th scope="row">{entry.index}</th>
    <td>{entry.key || ""}</td>
    <td>{entry.value || ""}</td>
  </tr>
)

const Table = (dataset, filtered) => (
  <table className="table text-left">
    <thead className="thead-inverse">
      <tr>
        <th>#</th>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {dataset.filter(x => x.hasOwnProperty('key') || !filtered).map(Entry)}
    </tbody>
  </table>
)

class Hashmap extends Component {
  constructor(props) {
    super(props);
    this.state = { dataset: [
        {index: 1, key: "bar", value: 123},
        {index: 2, key: "arroz", value: 123},
        {index: 3, key: "zorra", value: 123},
        {index: 4, key: "foo", value: 123}
      ]
    }
    this.push = this.push.bind(this);
    this.hash = this.hash.bind(this);
  }

  hash(key) {
    return key.split('').reduce((a, c, i) => {
      return a + c.charCodeAt(0) - 65;
    }, 0);
  }

  push(entry) {
      let {dataset} = this.state;
      if (entry.index > dataset.length) {
        let delta = entry.index - dataset.length;
        for (var i = 0; i < delta; i++)
          dataset.push({index: dataset.length - 1})
      }
      dataset[entry.index] = entry;
      this.setState({dataset});
  }

  render() {
    console.log(this.state.dataset);
    return (
      <div className="hashmap">
        {Table(this.state.dataset, this.props.filtered)}
        <InsertModal push={this.push} hash={this.hash}/>
      </div>
    );
  }
}

export default Hashmap;
