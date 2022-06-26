import { fetchResults } from "../actions"
import React from 'react'
import {connect} from 'react-redux'

class ResultList extends React.Component{
    componentDidMount(){ this.props.fetchResults(); } 


    renderList() {
        console.log(this.props.results)
        return this.props.results.map(result => {
            return (
                <div key={result.round}>
                    {result.Results[0].Driver.driverId}, {result.Results[0].number}, {result.Results[0].position}
                </div>
            )
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-1"></div>
                    <div className="col-4">
                        <h1>F1 Results in 2019:</h1>
                        <ul className="namelist">
                            {this.renderList()}
                        </ul>
                    </div>
                
                <div className="col-7"></div>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
        return { result: state.result };
    }
export default connect(mapStateToProps, {fetchResults})(ResultList);