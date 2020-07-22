import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewsData } from '../redux/statistics/news-actions-types';
import InfoTable from './InfoTable';
import Footer from './Footer';

const HomoComponent = () => {

    let { newsData } = useSelector(store => store);
    const dispatch = useDispatch();
    const { data, loading, page } = newsData;

    useEffect(() => {
        dispatch(getNewsData(page));

        // eslint-disable-next-line
    }, [page]);

    data.length > 0 && localStorage.setItem('newsState', JSON.stringify(newsData));

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