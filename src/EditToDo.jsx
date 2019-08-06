import React, {Component} from 'react';

export default EditTodo;

class EditTodo extends Component {
    render() {
      return (
        <div className='h-50 col-lg-8'>
          <div className='card'>
            <div className='card-header'>Edit To Do Item</div>
              <div className='card-body'>
                <h5>Description:</h5>
                <textarea></textarea>
                <h5>Priority Level:</h5>
                <select>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
              <div className='card-footer'> 
                <div className='text-right'>
                  <button className='btn btn-success'>SAVE</button>
                </div>
              </div>
          </div>    
        </div>
      )
    }
  }
  