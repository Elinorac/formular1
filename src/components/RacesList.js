import { fetchRaces } from "../actions"
import React from 'react'
import {connect} from 'react-redux'

class RaceList extends React.Component{
    componentDidMount(){ this.props.fetchRaces(); } 
    renderList() {
        return this.props.races.map(race => {
            return (
                <li className="item" key={race.round}>
                    <h5>{race.raceName}
                    <small> Date: {race.date}</small></h5>
                </li>
            )
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-1"></div>
                    <div className="col-4">
                        <h1>F1 Races in 2019</h1>
                        <ul className="racelist">
                            {this.renderList()}
                        </ul>
                    </div>
                
                <div className="col-7"></div>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
        return { races: state.races };
    }
export default connect(mapStateToProps, {fetchRaces})(RaceList);