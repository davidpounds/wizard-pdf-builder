import { FC } from 'react';
import styles from './Sidebar.module.scss';

const Sidebar: FC<{ sidebarWidth: number, children: any }> = ({ sidebarWidth, children }) => {
    return (
        <div
            className={styles.sidebar}
            style={{ "--sidebarWidth": `${sidebarWidth}%` } as React.CSSProperties}
        >{children}</div>
    );
};

export default Sidebar;
