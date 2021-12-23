export const addData = (data) => {
    return {
        type : "ADD_DATA",
        data
    }
}

export const editData = (id) => {
    return {
        type : "EDIT_DATA",
        id
    }
}

export const updateData = (id,data) => {
    return {
        type : "UPDATE_DATA",
        id,
        data 
    }
}

export const deleteData = (id) => {
    return {
        type : "DELETE_DATA",
        id
    }
}

export const searchFilter = (data) => {
    return{
        type : "SEARCH_FILTER",
        data
    }
}