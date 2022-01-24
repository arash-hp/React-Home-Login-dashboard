import React, { Component } from 'react';


export class Pagination extends Component {
    handleChange = (pageNumber) => {
        return () => {
            this.props.onChange(pageNumber)
        }
    }

    render() {
        const { page, pageCount } = this.props;
        return (
            <div >
                {Array(pageCount).fill().map((item, index) => <button 
                onClick={this.handleChange(index)}>{index + 1}</button>)}
            </div>
        )
    }
}
