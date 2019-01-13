import React from 'react';

class List extends React.Component {
    render() {
        return (
            <ol>
                {
                    this.props.items.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ol>
        )
    }
};

export default List;
