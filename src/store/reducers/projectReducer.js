const initState = {
    projects:[
        {id:'1',title:'mary',content:'this is a content'},
        {id:'2',title:'mary',content:'this is a content'},
        {id:'3',title:'mary',content:'this is a content'}
    ]
}
const  projectReducer = (state = initState, action) =>{
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}
export default projectReducer
