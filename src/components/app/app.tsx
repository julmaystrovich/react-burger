import React, { FC } from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import { useDispatch } from '../../services/hooks';
import { getUser } from '../../services/actions/authorization';
import { getBurgerIngredients } from '../../services/actions/ingredients';
import ModalSwitch from '../modal-switch/modal-switch';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
      dispatch(getBurgerIngredients());
      dispatch(getUser());
    }, [dispatch]);

    return (
        <Router>
            <ModalSwitch />
        </Router>
    );
}

export default App;
