import { FC } from 'react';
import styles from './FormItemWrapper.module.scss';

const FormItemWrapper: FC<{ children: any }> = ({ children }) => (
    <div className={styles.FormItemWrapper}>{children}</div>
);

export default FormItemWrapper;
