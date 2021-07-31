import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getData, getServiesData, getSideInfoData, getContactData, getUserQuriesData } from '../../Redux/action';
const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const changesData1 = () => {
        dispatch(getSideInfoData()), dispatch(getData()), dispatch(getServiesData()), dispatch(getContactData(), );
    };
    useEffect(() => {
        changesData1();
    }, []);

    const data = useSelector((state) => {
        return {
            fetchData: state,
            siteData: state.sideInfo
        };
    });

    return <div > { data.siteData ? < div > { children } < /div> : <p>loading...</p > } < /div>;
};
export default Layout;