import { FC, useRef, useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './PreviewPane.module.scss';
import { PaperSizeEnum } from '../types/store.types';
import { paperSizeAspectRatios } from './form/PaperSize';
import WizardStore from '../store/WizardStore';

const PreviewPane: FC<{}> = () => {
    const pane = useRef<HTMLDivElement>(null);
    const paperSize = WizardStore.useState(s => s.paperSize);
    const aspectRatio = paperSizeAspectRatios.get(paperSize) ?? paperSizeAspectRatios.get(PaperSizeEnum.A4) ?? 1;
    const [useFullHeight, setUseFullHeight] = useState(true);


    useEffect(() => {
        const resizeHandler = () => {
            if (pane.current === null) return;
            const { clientHeight, clientWidth } = pane.current;
            const paneAspectRatio = clientWidth / clientHeight;
            setUseFullHeight(paneAspectRatio > aspectRatio);
        };

        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [aspectRatio]);


    return (
        <div
            ref={pane}
            className={styles.PreviewPane}
        >
            <iframe
                title="Preview"
                className={classnames(styles.PreviewIframe, {
                    [styles.fullHeight]: useFullHeight,
                })}
                style={{ aspectRatio }}
            ></iframe>
        </div>
    )
};

export default PreviewPane;
