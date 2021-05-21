import React, { FunctionComponent } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Constants } from "../../constants";

interface UseEffectPageProps { };

const UseEffectPage: FunctionComponent<UseEffectPageProps> = () => {
    return (
        <React.Fragment>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                const [state, setState] = useState(initialState);
            </SyntaxHighlighter>
        </React.Fragment>
    );
};

export default UseEffectPage;
