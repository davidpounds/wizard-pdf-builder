import { FC, ReactNode } from 'react';
import styles from './Sidebar.module.scss';

const Sidebar: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={styles.sidebar}>{children}</div>
    );
};

export default Sidebar;
