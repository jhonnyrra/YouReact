import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {        
        return (
            <>
            <h2  style={{textAlign:"left"}}></h2>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <input onChange={this.handleChange} className='videosearch' type="text" placeholder="Search.."/>
                </form>
            </>
        )
    }
}
export default Searchbar;