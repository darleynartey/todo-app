import{useLocalStorage} from "usehooks-ts";
import TodoItem from "../todo-item";




function TodoList() {
    //let todos = ["take fufu", "take ginger"];
    const[todos, setTodos] = useLocalStorage("TODO_KEY", []);

    // function getTodos() {
    //     //Get all todos from local storage and store it.
    //     let todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];
    //     //Update React State
    //     setTodos(todos);

     function deleteAll() {
        setTodos([]);
     }


    // }

    // useEffect(getTodos, []);


    return (
        <section>
            <button onClick={deleteAll} className="btn btn-danger">Delete All</button>
            <ul className="list-group">
            {todos.map(function(todo, index) {
               return <TodoItem  todo={todo} index="index"/>
            })}

        </ul>
        </section>
    );
}

export default TodoList;
