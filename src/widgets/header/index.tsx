import { useNavigate } from 'react-router-dom';

import * as styles from './styles.module.scss';

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        navigate('/auth');
    };

    return (
        <div className={styles.wrapper} onClick={logout}>
            HEADER
        </div>
    );
};

export default Header;
