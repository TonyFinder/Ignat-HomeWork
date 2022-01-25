import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from './bll/store';
import {useDispatch, useSelector} from 'react-redux';
import {loadingAC} from './bll/loadingReducer';

function HW10() {
    let loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 2000)
        console.log('loading...')
    };


    return (
        <div>
            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img alt="Загрузка" src="https://pcvector.ru/800/600/https/www.ngi.no/bundles/ngino/images/spinner.gif" width={"30px"}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
        </div>
    )
}

export default HW10
