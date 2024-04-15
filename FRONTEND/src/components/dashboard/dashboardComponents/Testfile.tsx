import { useEffect } from "react";
import { RootState } from "../../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { getReservationsWithUserInfoFetch } from "../../../redux/state/reservationState";


export default function TestPage() {
    const dispatch = useDispatch();
    const data: any = useSelector((state: RootState) => state.reservationReducer.reservationWithUserInfo);

    useEffect(() => {
        dispatch(getReservationsWithUserInfoFetch());
    }, [dispatch]);

    const {client_sn} = data ?? {};

    // console.log(client_sn)
    return(<>   
    {data.map (
        (item: any, index: number) => (
            <div key={index}>
                {item.client_sn}
            </div>
        )
    )}
    </>)
}