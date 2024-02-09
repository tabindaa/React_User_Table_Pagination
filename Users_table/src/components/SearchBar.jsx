import { useRef } from "react";

const SearchBar = ({ searchTable }) => {
    const searchRef = useRef()

    const submitForm = (e) => {
        e.preventDefault();
        searchTable(searchRef.current.value)
    }

    return (
        <div className="search-bar">
            <form onSubmit={submitForm}>
                <input className="search-input" ref={searchRef} type="text" placeholder="Search by name, email, role" />
            </form >
        </div>
    )
}

export default SearchBar