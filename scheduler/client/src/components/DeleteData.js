import React from 'react';

class DeleteData extends React.Component {

    deleteData(id) {
        const url = '/api/main/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={ (e) => {this.deleteData(this.props.id)} }> 삭제 </button>
        )
    }
}

export default DeleteData;