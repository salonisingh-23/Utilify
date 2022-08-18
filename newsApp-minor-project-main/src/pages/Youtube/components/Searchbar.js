import React from 'react';
import '../../../App.css';

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
            {/* https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png */}
            <h2  style={{textAlign:"center"}}><img style={{width:'200px', height:'100px',justifyContent:'center'}} src='D:\web dev projects\react-news-website-master\src\pages\assets\youtube.png'></img></h2>
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search    </label>
                        <input className="search_bar_box" onChange={this.handleChange} name='video-search' type="text" placeholder="  Search.."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;