import './App.css';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { AddItemPage, UpdateItemPage, DisplayAllPage, DisplayCategoryPage, DisplayLowPage, SearchItemPage, SortItemPage, RemoveItemPage, Main, Welcome } from './components/pages';
import { useEffect, useState } from 'react';
import React from 'react';


function App() {

  //Use States
  const [invData, setInvData] = useState([]);
  const [data, setData] = useState({
    id: "",
    name: "",
    quantity: 0,
    price: 0,
    category: ""
  });

  const [query, setQuery] = useState('');
  const [queryResults, setQueryResults] = useState([]);
  const [categoryData, setCategoryData] = useState(invData);
  const [msg, setMsg] = useState('');
  const [sortState, setSortState] = useState('Quantity');
  const [sortOrderState, setSortOrderState] = useState('Ascending');
  const [sortedItems, setSortedItems] = useState([]);
  const [removeItem, setRemoveItem] = useState('');
  const [removeMsg, setRemoveMsg] = useState('');
  const [updateData, setUpdateData] = useState('');
  const [type, setType] = useState('');
  const [updateMsg, setUpdateMsg] = useState('');
  const [updateID, setUpdateID] = useState('');


  // VALIDATION ========================================================

  const validateID = (id) => {
    return !invData.some(item => item.id === id)
  };

  const handleAddDataSubmit = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');


    const newFormData = { ...data };
    if (newFormData[fieldName] !== null || newFormData[fieldName] !== "") {
      setData(newFormData);
    }


    if (!validateID(data.id)) {
      setMsg('Error! Product ID MUST be UNIQUE!');
      if (newFormData[fieldName] !== null || newFormData[fieldName] !== "") {
        setData(newFormData);
      }
      return;
    }



    if (!data.name) {

      setMsg('Error! Please fill in Name field');

    } else if (!data.id) {

      setMsg('Error! Please fill in ID field');

    } else if (!data.quantity) {

      setMsg('Error! Please fill in Quantity field');

    } else if (data.quantity < 1) {

      setMsg('Error! Please input a valid Quantity');

    } else if (!data.price) {

      setMsg('Error! Please fill in Price field');

    } else if (data.price < 1) {

      setMsg('Error! Please input a valid Price');

    } else if (!data.category) {

      setMsg('Error! Please choose a category field');

    }

    if (data.id && data.name && data.quantity >= 1 && data.price >= 1 && data.category) {
      const newInvData = {
        id: data.id,
        name: data.name,
        quantity: data.quantity,
        price: data.price,
        category: data.category
      };

      const newInvDatas = [...invData, newInvData];
      setInvData(newInvDatas);
      setSortedItems(newInvData);
      setData('');

      setMsg('Item added successfully!')
    } else if (!data.id && !data.name && !data.quantity && !data.price && !data.category) {


      setMsg('Error! Please fill in all missing fields');

    }


  };
  // ========================================================

  // ADD DATA ===============================================

  const addData = (event) => {
    event.preventDefault();


    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...data };
    newFormData[fieldName] = fieldValue;
    setData(newFormData);

  }
  // ========================================================================

  // SEARCH
  const searchHandler = (query) => {

    setQuery(query)
    if (query !== "") {
      const newItemInv = invData.filter((invData) => {
        return Object.values(invData.id).join("").toLowerCase().includes(query.toLowerCase());
      });
      setQueryResults(newItemInv);
    } else {
      setQueryResults(invData);
    }
  }
  // =========================================================================


  // DISPLAY BY CATEGORY =====================================================

  const filterCategory = (categoryItem) => {
    const result = invData.filter((curData) => {
      return curData.category === categoryItem;
    });

    setCategoryData(result);
  }
  // ==========================================================================


  // SORT ITEMS ===============================================================


  useEffect(() => {
    const sorting = (sortOrder, sortType) => {
      let tempData = [...invData]
      if (tempData.length > 0) {

        if (sortOrder === "Quantity" && sortType === "Descending") {
          let result = tempData.sort((a, b) => {
            var keyA = parseInt((a.quantity), 10);
            var keyB = parseInt((b.quantity), 10);
            if (keyA > keyB) {
              return -1;
            }
            if (keyA < keyB) {
              return 1;
            }
            return 0;
          });

          setSortedItems(result);
        }
        if (sortOrder === "Quantity" && sortType === "Ascending") {
          let result = tempData.sort((a, b) => {
            var keyA = parseInt((a.quantity), 10);
            var keyB = parseInt((b.quantity), 10);
            if (keyA < keyB) {
              return -1;
            }
            if (keyA > keyB) {
              return 1;
            }
            return 0;
          });
          setSortedItems(result);
        }

        if (sortOrder === "Price" && sortType === "Ascending") {
          let result = tempData.sort((a, b) => {
            var keyA = parseInt((a.price), 10);
            var keyB = parseInt((b.price), 10);
            if (keyA < keyB) {
              return -1;
            }
            if (keyA > keyB) {
              return 1;
            }
            return 0;
          });

          setSortedItems(result);
        }
        if (sortOrder === "Price" && sortType === "Descending") {
          let result = tempData.sort((a, b) => {
            var keyA = parseInt((a.price), 10);
            var keyB = parseInt((b.price), 10);
            if (keyA > keyB) {
              return -1;
            }
            if (keyA < keyB) {
              return 1;
            }
            return 0;
          });
          setSortedItems(result);
        }



      }
    }
    sorting(sortState, sortOrderState);


  }, [sortedItems])



  // REMOVE ITEM ======================================================

  const deleteHandler = (removeID) => {

    const newData = invData.filter((item) => item.id !== removeID);
    const found = invData.some(el => el.id === removeID);

    setRemoveMsg('Item does not exist!');


    if(found) {
      setInvData(newData)
      setRemoveMsg('Item removed successfully!');
    }

    if (invData.length < 1) {
      setRemoveMsg("No items in the inventory yet");
    }
  }



  // ===================================================================

  // UPDATE ITEM =======================================================

  

  const updateHandle = (id) => {
    const found = invData.some(el => el.id === id);

    if (type && updateData) {
      if (type === "Quantity" && updateData > 0 && updateID) {
        setInvData(
          invData.map((item) => {
            
            if (item.id === id) {
              setUpdateMsg("ID updated successfully!");
              
              return { ...item, quantity: updateData };
            } else {
              setUpdateMsg("ID doesn't exist");
  
              return item;
            }
            
          })
        )
      }
      if (type === "Price" && updateData > 0 && updateID) {
        setInvData(
          invData.map((item) => {
            if (item.id === id) {
              setUpdateMsg("ID updated successfully!");
              
              return { ...item, price: updateData };
            } else {
              setUpdateMsg("ID doesn't exist");
  
              return item;
            }
          })
        )
      }
    } else {
      setUpdateMsg('Please fill in missing fields!');
    }

    
    if (updateData < 1) {
      setUpdateMsg('Please enter a valid number!');
    }
    if (!updateData) {
      setUpdateMsg('Please fill in a new value!');
    }
    
    if (!type) {
      setUpdateMsg('Please choose a type to update!');
    }
    
    if (!updateID) {
      setUpdateMsg('Please enter Item ID!');
    }
    if (invData.length < 1) {
      setUpdateMsg("No items in the inventory yet");
    } 

   

  }

  // ==================================================================



  // MAIN HTML =============================================================
  return (
    <>
      <div className="App">

        <Routes>
          <Route index element={<Welcome />}></Route>
        </Routes>


        <Routes>

          <Route path='/main' element={<Main invData={invData} />} />
          <Route path='/addPage' element={<AddItemPage addData={addData} addDataSubmit={handleAddDataSubmit} msg={msg} setMsg={setMsg} />} />
          <Route path='/updatePage' element={<UpdateItemPage setType={setType} updateHandle={updateHandle} setUpdateData={setUpdateData} updateMsg={updateMsg} setUpdateMsg={setUpdateMsg} updateID={updateID} setUpdateID={setUpdateID} />} />
          <Route path='/displayAllPage' element={<DisplayAllPage invData={invData} />} />
          <Route path='/displayCategoryPage' element={<DisplayCategoryPage categoryData={categoryData} filterCategory={filterCategory} />} />
          <Route path='/displayLowPage' element={<DisplayLowPage invData={invData} />} />
          <Route path='/searchPage' element={<SearchItemPage invData={query.length < 1 ? invData : queryResults} query={query} searchHandler={searchHandler} />} />
          <Route path='/sortPage' element={<SortItemPage invData={sortedItems.length < 1 ? invData : sortedItems} setSortState={setSortState} setSortOrderState={setSortOrderState} />} />
          <Route path='/removePage' element={<RemoveItemPage deleteHandler={deleteHandler} removeMsg={removeMsg} setRemoveMsg={setRemoveMsg} setRemoveItem={setRemoveItem} removeItem={removeItem} />} />
        </Routes>

      </div>

    </>

  );
}

export default App;
