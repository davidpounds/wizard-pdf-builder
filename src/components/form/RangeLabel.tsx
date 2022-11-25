import { FC } from 'react';
import styles from './RangeLabel.module.scss';

const RangelLabel: FC<{ children: any }> = ({ children }) => (
    <span className={styles.RangeLabel}>{children}</span>
);

export default RangelLabel;
