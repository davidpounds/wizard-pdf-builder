import { FC } from 'react';
import PaperSize from './form/PaperSize';
import PageLayout from './form/PageLayout';

const SizeAndLayout: FC<{}> = () => (
    <>
        <PaperSize />
        <PageLayout />
    </>
);

export default SizeAndLayout;
