import { FC, ChangeEvent } from 'react';
import FormItemWrapper from './FormItemWrapper';
import WizardStore from '../../store/WizardStore';

const SIDEBAR_WIDTH_MIN = 10;
const SIDEBAR_WIDTH_MAX = 70;

const PageLayout: FC<{}> = () => {
    const layoutColumns = WizardStore.useState(s => s.layoutColumns);

    const checkboxChangeHandler = () => {
        WizardStore.update(s => {
            s.layoutColumns.sidebar = !s.layoutColumns.sidebar;
        });
    };

    const rangeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
                <FormItemWrapper>
                    <label htmlFor="sidebarWidth">Sidebar width</label>
                    <input
                        id="sidebarWidth"
                        type="range"
                        min={SIDEBAR_WIDTH_MIN}
                        max={SIDEBAR_WIDTH_MAX}
                        step={1}
                        value={layoutColumns.sidebarWidth}
                        onChange={rangeChangeHandler}
                    />
                    <span>{layoutColumns.sidebarWidth}%</span>
                </FormItemWrapper>
            )}
        </>
    )
};

export default PageLayout;
