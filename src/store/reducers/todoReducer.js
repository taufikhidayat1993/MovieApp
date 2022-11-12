const initialState = {
    todos: [
      {
        id: 1,
        title: "Film 1",
        description: "test description one",
        completed: false
      },
      {
        id: 1,
        title: "Filem 2",
        description: "test description two",
        completed: false
      }
    ]
  }
  const todoReducer = (state = initialState, action) => {
    const { type, payload} = action;
    switch(type){
      default:
        return {
          ...state
        }
    }
  }
  export default todoReducer;