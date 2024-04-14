import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import NavbarBody from "./components/NavbarBody";
import { getUsersSuccess } from "../../redux/state/userState";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { EMPTY_DETAIL_PANELS } from "@mui/x-data-grid/internals";

interface data {
    emp_id: number;
    fname: string;
}
export default function Navbar() {
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.state;
    
    const userData: data [] = useSelector(
        (state: RootState) => state.userReducer.users);

        useEffect(() => {
            dispatch(getUsersSuccess(id));
        }, [dispatch])
    const [stateData, setStateData] = useState(id);
    
    const { emp_id,fname } = stateData ?? {};
    
    useEffect(() => {
        console.log("id:", id);
    }, [id]);
    
    useEffect(() => {
        console.log("userData:", userData);
    }, [userData]);
    
    useEffect(() => {
        console.log("stateData:", stateData);
    }, [stateData]);

    
    console.log(stateData);
    return(<>
    {stateData.emp_id && (
        {fname}
    
)}<NavbarBody />
    </>)
}