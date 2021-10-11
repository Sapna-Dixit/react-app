let nextTodoId =0

export const addTodo =text=>({
    type:'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter=>({
    type :'SET_VISIBITY_FILTER',
    filter
})

export const toggleTODO = id=>({
    type:'TOGGLE_TODO',
    id
})

export const VisibilityFilters ={
        SHOW_ALL :'SHOW_ALL',
        SHOW_CMPLETEd :'SHOW_OMPLTED',
        SHOW_ACTIVE:'SHOW ACTIVE'
}