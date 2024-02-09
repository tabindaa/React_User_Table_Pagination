import { useEffect, useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

const Table = ({ userList }) => {
    const columns = ['id', 'name', 'email', 'role']

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage
    const records = (userList.slice(firstIndex, lastIndex));
    const nPage = Math.ceil(userList.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);




    useEffect(() => {

    }, [])


    const handleUserEdit = (userId) => { }
    const handleUserDelete = (userId) => {

    }

    return (
        <>
            <div className="table-height">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th className="users-table-cell" key={'check'}> <input type="checkbox" /></th>

                            {columns.map((column) => {
                                return <th key={column} className="users-table-cell">{column.toUpperCase()}</th>
                            })}
                            <th className="users-table-cell" key={'action'}>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((user, i) => {
                            return <tr key={'user' + user.id} >

                                <td className="users-table-cell" key={i + user}> <input type="checkbox" /></td>
                                {columns.map((col, j) => {
                                    return <td key={user.id + (j + 1).toString()} className="users-table-cell">{user[col]}</td>
                                })}
                                <th className="users-table-cell" key={'action'}>
                                    <button onClick={() => handleUserEdit(user.id)}><img src="src\assets\images\edit.png" /></button>
                                    <button onClick={() => handleUserDelete(user.id)}><img src="src\assets\images\trash.png" /></button>
                                </th>

                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination userList={userList} />
            {/* <nav className="pagination">
                <button className="first-page" title={"First Page"} onClick={firstPage}><img src="src\assets\images\angle-double-small-left.png" /></button>
                <button className="previous-page" disabled={btnIndex == 1} title={"Previous Page"} onClick={prevPage}><img src="src\assets\images\angle-small-left.png" /></button>

                {numbers.map((n, i) => (
                    <button key={i} onClick={() => changePage(n)} className={n == btnIndex ? 'active' : ''}>
                        <a>{n}</a>
                    </button>
                ))}

                <button className="next-page" title={"Next Page"} onClick={nextPage}><img src="src\assets\images\angle-small-right.png" /></button>
                <button className="last-page" title={"Last Page"} onClick={lastPage}><img src="src\assets\images\angle-double-small-right.png" /></button>
            </nav> */}
        </>
    )
}

export default Table