import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsData } from '../redux/statistics/news-actions-types';
import InfoTable from './InfoTable';
import Footer from './Footer';
import { useEffect } from 'react';
import { useRef } from 'react';


const HomoComponent = () => {

    const { newsData } = useSelector(state => state);

    const { data, loading, page } = newsData;

    const dispatch = useDispatch();

    let previousPage = useRef();

    useEffect(() => {
        if (previousPage.current !== page) {
            dispatch(getNewsData(newsData.page))
        }
        previousPage.current = page;

        // eslint-disable-next-line
    }, [page]);

    const getStyle = () => {
        return {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }


    return (
        <>

            {loading &&
                <div style={getStyle()}>
                    <div className="spinner-border " role="status" style={{ width: '8rem', height: '8rem' }}>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }
            {
                !loading &&
                <Fragment>
                    <InfoTable newData={data} />
                    <Footer page={page} />
                </Fragment>
            }
        </>
    );


}


export default HomoComponent;