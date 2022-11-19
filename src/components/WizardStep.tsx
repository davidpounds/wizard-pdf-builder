import { FC } from 'react';
import classnames from 'classnames';
import WizardStore from '../store/WizardStore';
import WizardStepPane from './WizardStepPane';
import styles from './WizardStep.module.scss';

export type WizardStepProps = {
    id: string;
    name: string;
    showPane: boolean;
}

const WizardStep: FC<WizardStepProps> = (props: WizardStepProps) => {
    const { id, name, showPane } = props;

    const togglePane = (e: React.MouseEvent) => {
        WizardStore.update(s => {
            const currentStep = s.steps.find(step => step.id === id);
            const currentlyOpen = currentStep?.showPane === true;
            s.steps.forEach(step => step.showPane = false);
            if (currentStep && !currentlyOpen) {
                currentStep.showPane = true;
            }
        });
    };

    return (
        <div className={styles.WizardStep}>
            <button
                className={classnames(styles.togglePane, { [styles.active]: showPane })}
                onClick={togglePane}
                type="button"
            >
                {name}
            </button>
            {showPane && (
                <WizardStepPane />
            )}
        </div>
    );
};

export default WizardStep;
