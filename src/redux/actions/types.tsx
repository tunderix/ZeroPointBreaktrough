export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

interface IncrementAction {
    type: typeof INCREMENT_COUNT;
}

interface DecrementAction {
    type: typeof DECREMENT_COUNT;
}

type ModificationActions = IncrementAction | DecrementAction;

export default ModificationActions;
