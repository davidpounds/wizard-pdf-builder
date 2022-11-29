import { FC } from 'react';
import WizardStore from '../../store/WizardStore';
import { SidebarPositionEnum, PaperSizeEnum } from '../../types/store.types';
import styles from './PDFPreview.module.scss';
import Sidebar from './Sidebar';
import { makeCSSCustomProperties, mmToInch } from '../../utils';

const PDFPreview: FC<{}> = () => {
    const layoutColumns = WizardStore.useState(s => s.layoutColumns);
    const backgroundColors = WizardStore.useState(s => s.backgroundColors);
    const typography = WizardStore.useState(s => s.typography);
    const paperSize = WizardStore.useState(s => s.paperSize);
    const widthInInches = paperSize === PaperSizeEnum.A4 ? mmToInch(210) : 8.5;

    const { sidebar, sidebarPosition } = layoutColumns;
    const cssCustomProperties = makeCSSCustomProperties({
        layoutColumns,
        backgroundColors,
        typography,
        widthInInches,
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
            <div className={styles.main}>
                <h1>Heading</h1>
                <h2>Subheading</h2>
                <p>Body text</p>
            </div>
            {sidebar && sidebarPosition === SidebarPositionEnum.Right && sidebarElement}
        </div>
    )
};

export default PDFPreview;
