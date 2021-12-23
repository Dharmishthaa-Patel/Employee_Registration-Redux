const initData = {
    formikState : {
        ename:'',
        profession:'',
        email:'',
        pwd:'',
        phone:'',
        salary:'',
    },
    list : [],
    tempList: [],  // Temp Array
    searchInput: ''  //For Search field
}

const empReducer = (state = initData, action) => {
    switch (action.type) {
        
        case "ADD_DATA":
        action.data = {
            ...action.data,
            id: new Date().getTime().toString(),
        }
           return{
               list: [...state.list, action.data],
               tempList: [ ...state.tempList, action.data]
           }

        case "EDIT_DATA":
            const editData = state.tempList.find(elem => elem.id === action.id);
            // console.log("editdata",editData);
                return {        
                    ...state,
                    editEmpId: action.id,
                    formikState: editData 
                }

        case "UPDATE_DATA":
            const listId = state.list.findIndex(elem => elem.id === action.id)
            const tempId = state.tempList.findIndex(elem => elem.id === action.id)

            state.list[listId] = action.data
            state.tempList[tempId] = action.data
                //console.log("action data", action.data);
            return {
                ...state     
                }

        case "DELETE_DATA":
            const deleteData = state.list.filter((elem) => elem.id !== action.id)
                return {
                    ...state,
                    list: deleteData
                }

        case "SEARCH_FILTER":
            return {
                ...state,
                searchInput : action.data,
                list : state.tempList.filter((elem) =>{ 
                        elem.ename.toLowerCase().startsWith(state.searchInput) || 
                        elem.salary.toLowerCase().toString().startsWith(state.searchInput)
                    })
                } 

        default:
            return {
                ...state
            }
    }
};

export default empReducer;