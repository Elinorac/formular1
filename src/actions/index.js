import ergast from '../apis/ergast';

export const fetchDrivers = () => async dispatch => {
    const response = await ergast.get('/api/f1/2019/drivers.json');
    dispatch({type: 'FETCH_DRIVERS', payload: response.data.MRData.DriverTable.Drivers})
};

export const fetchResults = () => async dispatch => {
    const response = await ergast.get('/api/f1/2019/results.json');
    dispatch({type: 'FETCH_RESULTS', payload: response.data.MRData.RaceTable.Races.Results})
};

export const fetchRaces = () => async dispatch => {
    const response = await ergast.get('/api/f1/2019/races.json');
    dispatch({type: 'FETCH_RACES', payload: response.data.MRData.RaceTable.Races})
};