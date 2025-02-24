import { useNavigate } from 'react-router-dom';

import * as styles from './styles.module.scss';

const AuthByPass = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate('/workspace/incidents');
    };

    return (
        <div className={styles.wrapper}>
            <div onClick={login}>LOGIN</div>
        </div>
    );
};

export default AuthByPass;
