/****************************************
 *
 * Title: demo use of useReducer react hook
 * Description: useReducer hook helps to keep trackhing multiple pieces of state on complex logic.
 * Author: Tanvir Nayem 
 * Date: 01-24-22
 * 
 ***************************************/
import { useReducer } from "react";

const initialState = [
    {
        id: 1,
        title: 'State 1',
        status: false
    },
    {
        id: 2,
        title: 'State 2',
        status: false
    },
    {
        id: 3,
        title: 'State 3',
        status: false
    }
]

const reducer = (state, action) => {
    switch (action.type) {
        case "Done":
            return state.map((st) => {
                if (st.id === action.id) {
                    return { ...st, status: !st.status };
                } else {
                    return st;
                }
            });
        default:
          return state;
      }
}

function ReducerComponent() {
    const [states, dispatch] = useReducer(reducer, initialState);

    const updateStatus = (st) => {
        dispatch({type: 'Done', id: st.id})
    }

    return (
        <>
            {states.map((st) => (
                <div key={st.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={st.status}
                            onChange={() => updateStatus(st)}
                        />
                    {st.title}
                    </label>
                </div>
            ))}
        </>
    )
}

export default ReducerComponent;