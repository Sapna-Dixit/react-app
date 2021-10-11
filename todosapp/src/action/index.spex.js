import * as actions from './index'

const describe('todo acctions',()=>{
    it("addTodo should create ADD_TODO action",()=>{
        expect(actions.addTodo("Use Redux")).toEqual({
            type:'ADD_ToDo',
            id:0,
            text:'Use Redux'
        })
    })
})

it('setVisibilityFilter  should create SET_VISIBITY_FILTER',()=>{
    expect(actions.setVisibilityFilter("actions")).toEqual({
        type:'SET_VISIBILTY_FILTER',
        filter:'active'
    })
})

it("toggle Todo should create TOGGLE_TODO action",()=>{
    expect(actions.toggleTODO(1)).toEqual({
        type:"TOGGLE_TODO",
        id:1
    })
})