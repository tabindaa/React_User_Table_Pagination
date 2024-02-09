
import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Table from './components/Table'
import useTableData from './hooks/useTableData'

function App() {
  const userList = useTableData()
  const [searchvalue, setSearchTable] = useState("")


  const searchTable = (newSearchdValue) => {
    console.log(newSearchdValue)
    setSearchTable(newSearchdValue)
}

// const filteredRows = useMemo(() => {
//   if (!searchvalue) return userList;


//   if (userList.length > 0) {
//       const list = [];

//       for (const current of userList) {
//           for (const column of columns) {
//               const value = current[column];
//               if (value && value.toLowerCase().includes(searchvalue.toLowerCase())) {
//                   const found = userList.find((user) => user.id === current.id);
//                   if (found) {
//                       list.push(found);
//                   }
//               }
//           }
//       }
//       console.log(list)
//       // setRecords(list)
//       return list;
//   }

//   return [];
// }, [searchvalue]);


  return (
    <div className='app-container'>
      <h4>User Database</h4>
      <SearchBar searchTable={searchTable} />
      <Table userList={userList} />
    </div>
  )
}

export default App
