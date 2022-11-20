import { FC } from 'react';
import styles from './WizardStepPane.module.scss';

const WizardStepPane: FC<{ children: any }> = ({ children }) => {
    return (
        <div className={styles.WizardStepPane}>
            {children}
        </div>
    );
};

export default WizardStepPane;
