import React, { Fragment, memo } from 'react';

const InfoTable = (props) => {

    const findPercentage = (total, tocal) => {
        const result = (tocal / total) * 100;
        if (!isNaN(result))
            return result.toFixed(2);
        else
            return 0
    }

    const raiseSort = ({ path }) => {
        const sortColumn = { ...props.sortColumn }
        if (sortColumn.path === path)
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        props.onSort(sortColumn);
    };

    const renderSortIcon = column => {
        const { sortColumn } = props;

        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order === "asc") return <i className="fa fa-arrow-up" />;
        return <i className="fa fa-arrow-down" />;
    };


    return (
        <Fragment>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"
                                onClick={() => raiseSort({ path: 'country' })}>Country {renderSortIcon({ path: 'country' })} </th>
                            <th scope="col" onClick={() => raiseSort({ path: 'tests.total' })}>Tested% {renderSortIcon({ path: 'tests.total' })} </th>
                            <th scope="col" onClick={() => raiseSort({ path: 'deaths.total' })}>Mortality% {renderSortIcon({ path: 'deaths.total' })}</th>
                            <th scope="col" onClick={() => raiseSort({ path: 'cases.recovered' })}>Recovered% {renderSortIcon({ path: 'cases.recovered' })}</th>
                            <th scope="col">Infected </th>
                            <th scope="col">Tested </th>
                            <th scope="col">Mortality </th>
                            <th scope="col">Recovered</th>
                            <th scope="col">Population</th>

                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(result => (
                            <tr key={result.country} style={{ backgroundColor: result.deaths.total > 1000 ? '#ffcccb' : '' }}>
                                <td><strong>{result.country}</strong></td>
                                <td style={{ color: 'darkgoldenrod' }} > {findPercentage(result.population, result.tests.total)}</td>
                                <td style={{ color: 'red' }}>{findPercentage(result.cases.total, result.deaths.total)}</td>
                                <td style={{ color: 'green' }} > {findPercentage(result.cases.total, result.cases.recovered)}</td>
                                <td>{result.cases.total}</td>
                                <td>{result.tests.total}</td>
                                <td>{result.deaths.total}</td>
                                <td>{result.cases.recovered}</td>
                                <td>{result.population}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >

        </Fragment >
    );
}

export default memo(InfoTable);