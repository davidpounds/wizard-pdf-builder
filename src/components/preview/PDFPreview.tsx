import { FC } from 'react';
import WizardStore from '../../store/WizardStore';
import { SidebarPositionEnum } from '../../types/store.types';
import styles from './PDFPreview.module.scss';
import Sidebar from './Sidebar';

const PDFPreview: FC<{}> = () => {
    const layoutColumns = WizardStore.useState(s => s.layoutColumns);
    const { sidebar, sidebarPosition, sidebarWidth } = layoutColumns;

    return (
        <div className={styles.wrapper}>
            {sidebar && sidebarPosition === SidebarPositionEnum.Left && (
                <Sidebar sidebarWidth={sidebarWidth}>Sidebar {sidebarPosition}</Sidebar>
            )}
            <div className={styles.main}>PDF Preview</div>
            {sidebar && sidebarPosition === SidebarPositionEnum.Right && (
                <Sidebar sidebarWidth={sidebarWidth}>Sidebar {sidebarPosition}</Sidebar>
            )}
        </div>
    )
};

export default PDFPreview;
