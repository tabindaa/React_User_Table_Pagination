import { useEffect, useState } from "react"
import { USER_LIST_URL } from "../helpers/Constants"

const useTableData = () => {
    const [users, setUsers] = useState([])
    const getUserList = async () => {
        const response = await fetch(USER_LIST_URL)
        const list = await response.json();
        setUsers(list);
    }
    useEffect(() => {
        getUserList()
    }, [])

    return users;
}

export default useTableData