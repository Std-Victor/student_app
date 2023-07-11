import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { fetchStudentsData } from './redux/student_asyncThunk/students.api.calls';
import { SearchBox } from './components/Search-box/search-box.component';
import { View } from './components/View/view.component';
import { Form } from './components/Form/form.component';
import { toggleModal } from './redux/student_asyncThunk/students.slice';
import { SnackBar } from './components/snackBar/SnackBar';
import { useSelector } from 'react-redux';

function App() {
  const { dataFetched, response} = useSelector(state => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentsData())
  },[])

  return (
    <div className="App">
      <h1>Students List</h1>
      <div className="table--up">
          {dataFetched ? <SearchBox /> : null}
          <button className="bg-green-600 px-4 " onClick={() => dispatch(toggleModal())}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
          </button>
        </div>
        <View />
        <Form />
        {response !== null && <SnackBar />}
    </div>
  )
}

export default App
