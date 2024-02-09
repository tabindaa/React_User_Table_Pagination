import { useState } from "react";

const Pagination = ({ userList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage
    const records = userList.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(userList.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);
    const [btnIndex, setBtnIndex] = useState(1);

    
    const firstPage = () => {
        setCurrentPage(1);
        setBtnIndex(1)
    }
    const lastPage = () => {
        setCurrentPage(numbers.length);
        setBtnIndex(numbers.length)
    }
    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            setBtnIndex(btnIndex - 1)
        }
    }
    const changePage = (id) => {
        setCurrentPage(id);
        setBtnIndex(id)
    }
    const nextPage = () => {
        if (currentPage !== nPage) {
            setCurrentPage(currentPage + 1);
            setBtnIndex(btnIndex + 1)
        }
    }








    // const filteredRows = useMemo(() => {
    //     if (!searchTerm) return rows;


    //     if (rows.length > 0) {
    //         const attributes = Object.keys(rows[0]);

    //         const list = [];

    //         for (const current of rows) {
    //             for (const attribute of attributes) {
    //                 if (attribute === "key") {
    //                     continue;
    //                 }
    //                 const value = current[attribute];
    //                 if (value && value.toLowerCase() === searchTerm.toLowerCase()) {
    //                     const found = rows.find((row) => row.key === current.key);
    //                     if (found) {
    //                         list.push(found);
    //                     }
    //                 }
    //             }
    //         }
    //         return list;
    //     }

    //     return [];
    // }, [searchTerm, rows]);
    return (

        <nav className="pagination">
            <button className="first-page" title={"First Page"} onClick={firstPage}><img src="src\assets\images\angle-double-small-left.png" /></button>
            <button className="previous-page" disabled={btnIndex == 1} title={"Previous Page"} onClick={prevPage}><img src="src\assets\images\angle-small-left.png" /></button>

            {numbers.map((n, i) => (
                <button key={i} onClick={() => changePage(n)} className={n == btnIndex ? 'active' : ''}>
                    <a>{n}</a>
                </button>
            ))}

            <button className="next-page" title={"Next Page"} onClick={nextPage}><img src="src\assets\images\angle-small-right.png" /></button>
            <button className="last-page" title={"Last Page"} onClick={lastPage}><img src="src\assets\images\angle-double-small-right.png" /></button>
        </nav>

    )
}

export default Pagination