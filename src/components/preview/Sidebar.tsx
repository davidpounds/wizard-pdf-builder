import { FC } from 'react';
import styles from './Sidebar.module.scss';

const Sidebar: FC<{ sidebarWidth: number, sidebarColour: string, children: any }> = ({ sidebarWidth, sidebarColour, children }) => {
    return (
        <div
            className={styles.sidebar}
            style={{ "--sidebarWidth": `${sidebarWidth}%`, "--sidebar-background-colour": sidebarColour } as React.CSSProperties}
        >{children}</div>
    );
};

export default Sidebar;
