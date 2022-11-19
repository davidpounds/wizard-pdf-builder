import { FC } from 'react';
import WizardStep from './WizardStep';
import WizardStore from '../store/WizardStore';
import styles from './Wizard.module.scss';

const Wizard: FC<{}> = () => {

    const steps = WizardStore.useState(s => s.steps);

    return (
        <div className={styles.Wizard}>
            <h1>Wizard</h1>
            {steps.map(step => (
                <WizardStep
                    key={step.id}
                    {...step}
                />
            ))}
        </div>
    );
};

export default Wizard;
