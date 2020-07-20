import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatisticData } from '../redux/statistics/statistics-actions-types';
import InfoTable from './InfoTable';
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import _ from "lodash";

const sortColumnInit = { path: "country", order: "asc" }

const HomoComponent = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);
    const [sortColumn, setSortedColumn] = useState(sortColumnInit);

    const { statisticsData } = useSelector(store => store);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStatisticData());
        // eslint-disable-next-line
    }, []);


    const handlePageChange = page => {
        setCurrentPage(page)
    };

    const handleSort = sortColumn => {
        setSortedColumn(sortColumn);
    };


    const sorted = _.orderBy(statisticsData.data, [sortColumn.path], [sortColumn.order]);

    const statisticsDataPaged = paginate(sorted, currentPage, pageSize);

    const getStyle = () => {
        return {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }


    return (
        <>
            <div className="jumbotron my-2" style={{ textAlign: 'center', padding: '1rem 2rem' }}>
                <h3>COVID-19 Detials for Each Country</h3>
                <small>To understand what Infected BPS , Tested%, Motality% and Recovered% means <a href="/">click here</a></small>
            </div>

            <div className="container my-3">

                {statisticsData.loading &&
                    <div style={getStyle()}>
                        <div className="spinner-border " role="status" style={{ width: '8rem', height: '8rem' }}>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                {!statisticsData.loading &&
                    <Fragment>
                        <div className="my-2">
                            <span className="my-badge"></span> <small>
                                <strong>Country's with more then 1000  Mortality </strong>
                            </small>
                        </div>
                        <InfoTable data={statisticsDataPaged} onSort={handleSort} sortColumn={sortColumn} />
                    </Fragment>
                }
                <div className="table-responsive my-3">
                    <Pagination
                        itemsCount={statisticsData.data.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>

            </div>
        </>
    );
}

export default HomoComponent;