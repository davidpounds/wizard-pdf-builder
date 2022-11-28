import { FC } from "react";
import FormItemWrapper from './FormItemWrapper';
import RangeLabel from './RangeLabel';
import WizardStore from '../../store/WizardStore';
import { TypographyTypeEnum } from '../../types/store.types';

const Typography: FC = () => {
    const {
        base,
        heading,
        subHeading,
        sidebar,
        sidebarHeading,
        sidebarSubHeading,
    } = WizardStore.useState(s => s.typography);
    const hasSidebar = WizardStore.useState(s => s.layoutColumns.sidebar);

    const changeFontSizeFactory = (type: TypographyTypeEnum) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.valueAsNumber;
        WizardStore.update(s => {
            s.typography[type].fontSizePt = value;
        });
    };

    return (
        <>
            <h2>Main page</h2>
            <fieldset>
                <legend>Body text</legend>
                <FormItemWrapper>
                    <label htmlFor="base-size">Size</label>
                    <input
                        id="base-size"
                        type="range"
                        min={8}
                        max={18}
                        step={1}
                        value={base.fontSizePt}
                        onChange={changeFontSizeFactory(TypographyTypeEnum.BASE)}
                    />
                    <RangeLabel>{base.fontSizePt}pt</RangeLabel>
                </FormItemWrapper>
            </fieldset>

            <fieldset>
                <legend>Heading</legend>
                <FormItemWrapper>
                    <label htmlFor="heading-size">Size</label>
                    <input
                        id="heading-size"
                        type="range"
                        min={12}
                        max={72}
                        step={2}
                        value={heading.fontSizePt}
                        onChange={changeFontSizeFactory(TypographyTypeEnum.HEADING)}
                    />
                    <RangeLabel>{heading.fontSizePt}pt</RangeLabel>
                </FormItemWrapper>
            </fieldset>

            <fieldset>
                <legend>Subheading</legend>
                <FormItemWrapper>
                    <label htmlFor="subheading-size">Size</label>
                    <input
                        id="subheading-size"
                        type="range"
                        min={12}
                        max={72}
                        step={2}
                        value={subHeading.fontSizePt}
                        onChange={changeFontSizeFactory(TypographyTypeEnum.SUB_HEADING)}
                    />
                    <RangeLabel>{subHeading.fontSizePt}pt</RangeLabel>
                </FormItemWrapper>
            </fieldset>

            {hasSidebar && (
                <>
                    <h2>Sidebar</h2>
                    <fieldset>
                        <legend>Sidebar text</legend>
                        <FormItemWrapper>
                            <label htmlFor="sidebar-size">Size</label>
                            <input
                                id="sidebar-size"
                                type="range"
                                min={8}
                                max={18}
                                step={1}
                                value={sidebar.fontSizePt}
                                onChange={changeFontSizeFactory(TypographyTypeEnum.SIDEBAR)}
                            />
                            <RangeLabel>{sidebar.fontSizePt}pt</RangeLabel>
                        </FormItemWrapper>
                    </fieldset>

                    <fieldset>
                        <legend>Sidebar heading</legend>
                        <FormItemWrapper>
                            <label htmlFor="sidebar-heading-size">Size</label>
                            <input
                                id="sidebar-heading-size"
                                type="range"
                                min={12}
                                max={72}
                                step={2}
                                value={sidebarHeading.fontSizePt}
                                onChange={changeFontSizeFactory(TypographyTypeEnum.SIDEBAR_HEADING)}
                            />
                            <RangeLabel>{sidebarHeading.fontSizePt}pt</RangeLabel>
                        </FormItemWrapper>
                    </fieldset>

                    <fieldset>
                        <legend>Sidebar subheading</legend>
                        <FormItemWrapper>
                            <label htmlFor="sidebar-subheading-size">Size</label>
                            <input
                                id="sidebar-subheading-size"
                                type="range"
                                min={12}
                                max={72}
                                step={2}
                                value={sidebarSubHeading.fontSizePt}
                                onChange={changeFontSizeFactory(TypographyTypeEnum.SIDEBAR_SUB_HEADING)}
                            />
                            <RangeLabel>{sidebarSubHeading.fontSizePt}pt</RangeLabel>
                        </FormItemWrapper>
                    </fieldset>
                </>
            )}
        </>
    )
};

export default Typography;
