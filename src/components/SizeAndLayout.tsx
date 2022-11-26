import { FC } from 'react';
import PaperSize from './form/PaperSize';
import PageLayout from './form/PageLayout';
import './SizeAndLayout.module.scss';

const SizeAndLayout: FC<{}> = () => (
    <>
        <PaperSize />
        <PageLayout />
    </>
);

export default SizeAndLayout;
