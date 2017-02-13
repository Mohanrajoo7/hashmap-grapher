import React, {Component} from 'react';

class InsertModal extends Component {
  constructor(props) {
    super(props)
    this.handleInsert = this.handleInsert.bind(this);
  }

  handleInsert() {
    let key = this.refs.key.value;
    let value = this.refs.value.value;
    this.props.push({index: this.props.hash(key), key: key, value: value})
  }
  
  render() {
    return (
      <div className="text-left modal fade" id="insert-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New entry</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="key" className="form-control-label">Key:</label>
                  <input type="text" className="form-control" id="key" ref="key" />
                </div>
                <div className="form-group">
                  <label htmlFor="value" className="form-control-label">Value:</label>
                    <input type="text" className="form-control" id="value" ref="value" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary"
                 onClick={() => this.handleInsert()}>
                Insert
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InsertModal;
