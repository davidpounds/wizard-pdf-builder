import { FC, useRef, useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './PreviewPane.module.scss';
import { PaperSizeEnum } from '../types/store.types';
import { paperSizeAspectRatios } from './form/PaperSize';
import WizardStore from '../store/WizardStore';
import PDFPreview from './preview/PDFPreview';

const PreviewPane: FC<{}> = () => {
    const paneRef = useRef<HTMLDivElement>(null);
    const paperSize = WizardStore.useState(s => s.paperSize);
    const paperSizeProperties = paperSizeAspectRatios.get(paperSize) ?? paperSizeAspectRatios.get(PaperSizeEnum.A4) ?? null;
    const [useFullHeight, setUseFullHeight] = useState<boolean>(true);

    useEffect(() => {
        const resizeHandler = () => {
            if (paneRef.current === null || !paperSizeProperties?.aspectRatio) return;
            const aspectRatio = paperSizeProperties.aspectRatio;
            const { clientHeight, clientWidth } = paneRef.current;
            const paneAspectRatio = clientWidth / clientHeight;
            setUseFullHeight(paneAspectRatio > aspectRatio);
        };

        setTimeout(resizeHandler, 50);
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [paperSizeProperties?.aspectRatio]);


    return (
        <div
            ref={paneRef}
            className={styles.PreviewPane}
        >

            <div
                className={classnames(styles.PreviewContainer, {
                    [styles.fullHeight]: useFullHeight,
                    [styles.A4]: paperSizeProperties?.size === PaperSizeEnum.A4,
                    [styles.Letter]: paperSizeProperties?.size === PaperSizeEnum.Letter,
                })}
            >
                <PDFPreview />
            </div>
        </div>
    )
};

export default PreviewPane;
