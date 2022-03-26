import {RequestUseEffect} from './Requests/RequestUseEffect';
import {RequestCallback} from './Requests/RequesCallback';

export const HW13 = () => {
    return <div>
        <h3 style={{maxWidth: "500px", textAlign: "center", color: "white"}}>Нужно уточнить, можно ли делать запросы на сервер только в теле useEffect или при помощи колбека тоже будет правильно.</h3>
        <RequestUseEffect/>
        <RequestCallback/>
    </div>
}