import { FC } from 'react';
import WizardStore from '../../store/WizardStore';
import { SidebarPositionEnum } from '../../types/store.types';
import styles from './PDFPreview.module.scss';
import Sidebar from './Sidebar';

const PDFPreview: FC<{}> = () => {
    const layoutColumns = WizardStore.useState(s => s.layoutColumns);
    const backgroundColors = WizardStore.useState(s => s.backgroundColors);
    const { sidebar, sidebarPosition, sidebarWidth } = layoutColumns;

    return (
        <div className={styles.wrapper}>
            {sidebar && sidebarPosition === SidebarPositionEnum.Left && (
                <Sidebar sidebarWidth={sidebarWidth} sidebarColour={backgroundColors.sidebar}>Sidebar {sidebarPosition}</Sidebar>
            )}
            <div className={styles.main} style={{ "--main-background-colour": backgroundColors.main } as React.CSSProperties}>PDF Preview</div>
            {sidebar && sidebarPosition === SidebarPositionEnum.Right && (
                <Sidebar sidebarWidth={sidebarWidth} sidebarColour={backgroundColors.sidebar}>Sidebar {sidebarPosition}</Sidebar>
            )}
        </div>
    )
};

export default PDFPreview;
