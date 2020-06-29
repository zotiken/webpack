const initialState = {
todolist:{
    list:[
        {id: "33", text: "greg", status:true},
        {id: "43", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quia.", status:true},
        {id: "53", text: "lorem afv", status:true},
        {id: "63", text: "greg hello", status:false}
    ],
    total:32
}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "add":
        return { ...state, ...payload }

    default:
        return state
    }
}
