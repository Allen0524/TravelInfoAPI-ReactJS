import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        const pageNumbers = []
        for(let i = 1; i <= Math.ceil(this.props.totalPosts / this.props.postPerPage); i++){
            pageNumbers.push(i);
        }
        return (
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item page-li">
                            <a onClick={() => this.props.paginate(number)} className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Pagination;