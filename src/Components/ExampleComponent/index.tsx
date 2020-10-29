import React from 'react';
import StyledExampleText from './styles';

interface Props {
    textValue: string;
}
const exampleComponent: React.FunctionComponent<Props> = ({
    textValue
}: Props) => {
    return <StyledExampleText>{textValue}</StyledExampleText>;
};

export default exampleComponent;
