import { FC, ChangeEvent } from 'react';
import FormItemWrapper from './FormItemWrapper';
import WizardStore from '../../store/WizardStore';
import { SidebarPositionEnum } from '../../types/store.types';
import RangeLabel from './RangeLabel';
import styles from './PageLayout.module.scss';

const SIDEBAR_WIDTH_MIN = 10;
const SIDEBAR_WIDTH_MAX = 70;

const PageLayout: FC<{}> = () => {
    const layoutColumns = WizardStore.useState(s => s.layoutColumns);

    const checkboxChangeHandler = () => {
        WizardStore.update(s => {
            s.layoutColumns.sidebar = !s.layoutColumns.sidebar;
        });
    };

    const sidebarPositionChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number.parseInt(e.target.value, 10);
        WizardStore.update(s => {
            s.layoutColumns.sidebarPosition = newValue;
        });
    };

    const sidebarWidthChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number.parseInt(e.target.value, 10);
        WizardStore.update(s => {
            s.layoutColumns.sidebarWidth = newValue;
        });
    };

    return (
        <>
            <FormItemWrapper>
                <label htmlFor="sidebar">Sidebar?</label>
                <input
                    id="sidebar"
                    type="checkbox"
                    checked={layoutColumns.sidebar}
                    onChange={checkboxChangeHandler}
                />
            </FormItemWrapper>

            {layoutColumns.sidebar && (
                <>
                    <FormItemWrapper>
                        <fieldset className={styles.sidebarPosition}>
                            <legend>Sidebar position</legend>
                            <input
                                type="radio"
                                id="sidebar_left"
                                value={SidebarPositionEnum.Left}
                                checked={layoutColumns.sidebarPosition === SidebarPositionEnum.Left}
                                onChange={sidebarPositionChangeHandler}
                            />
                            <label htmlFor="sidebar_left">Left</label>
                            <input
                                type="radio"
                                id="sidebar_right"
                                value={SidebarPositionEnum.Right}
                                checked={layoutColumns.sidebarPosition === SidebarPositionEnum.Right}
                                onChange={sidebarPositionChangeHandler}
                            />
                            <label htmlFor="sidebar_right">Right</label>
                        </fieldset>
                    </FormItemWrapper>
                    <FormItemWrapper>
                        <label htmlFor="sidebarWidth">Sidebar width</label>
                        <div className={styles.rangeWrapper}>
                            <input
                                id="sidebarWidth"
                                type="range"
                                min={SIDEBAR_WIDTH_MIN}
                                max={SIDEBAR_WIDTH_MAX}
                                step={1}
                                value={layoutColumns.sidebarWidth}
                                onChange={sidebarWidthChangeHandler}
                            />
                            <RangeLabel>{layoutColumns.sidebarWidth}%</RangeLabel>
                        </div>
                    </FormItemWrapper>
                </>
            )}
        </>
    )
};

export default PageLayout;
