import { FC } from 'react';
import WizardStore from '../../store/WizardStore';
import { SidebarPositionEnum } from '../../types/store.types';
import styles from './PDFPreview.module.scss';
import Sidebar from './Sidebar';
import { makeCSSCustomProperties } from '../../utils';

const PDFPreview: FC<{}> = () => {
    const layoutColumns = WizardStore.useState(s => s.layoutColumns);
    const backgroundColors = WizardStore.useState(s => s.backgroundColors);
    const typography = WizardStore.useState(s => s.typography);

    const { sidebar, sidebarPosition } = layoutColumns;
    const cssCustomProperties = makeCSSCustomProperties({
        layoutColumns,
        backgroundColors,
        typography,
    });

    const sidebarElement = (
        <Sidebar>
            <h1>Heading</h1>
            <h2>Subheading</h2>
            <p>Body text</p>
        </Sidebar>
    );

    return (
        <div className={styles.wrapper} style={cssCustomProperties}>
            {sidebar && sidebarPosition === SidebarPositionEnum.Left && sidebarElement}
            <div className={styles.main} style={{ "--main-background-colour": backgroundColors.main } as React.CSSProperties}>
                <h1>Heading</h1>
                <h2>Subheading</h2>
                <p>Body text</p>
            </div>
            {sidebar && sidebarPosition === SidebarPositionEnum.Right && sidebarElement}
        </div>
    )
};

export default PDFPreview;
