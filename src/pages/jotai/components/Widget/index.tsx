import { Provider } from "jotai";
import { createContext } from "react";
import { GetContentQuery } from "../../../../generated/graphql";
import { createInitialValues } from "../../../../lib/jotai/helpers/createInitialValues";
import useWidgetQuantity, { quantityAtom } from "../../hooks/useWidgetQuantity";

interface WidgetProps {
    widget: GetContentQuery['widgets'][0];
}

const jotaiContext = createContext<WidgetProps | undefined>(undefined);

function Inner() {
    const { quantity, increase, decrease } = useWidgetQuantity();
    return (
        <jotaiContext.Consumer>
            {(props) => {
                if (!props) {
                    return;
                }
                const { widget } = props;
                return (
                    <article>
                        <p>{widget.name} &times; {quantity || 0}</p>
                        <div className="grid">
                            <button
                                className="outline"
                                onClick={decrease}
                            >
                                -
                            </button>
                            <button
                                className="outline"
                                onClick={increase}
                            >
                                +
                            </button>
                        </div>
                    </article>
                );
            }}
        </jotaiContext.Consumer>
    )
}

export default function Widget(props: WidgetProps) {
    const { get, set } = createInitialValues();
    set(quantityAtom, 0);
    const initialValues = get();
    return (
        <jotaiContext.Provider value={props}>
            <Provider
                initialValues={initialValues}
            >
                <Inner />
            </Provider>
        </jotaiContext.Provider>
    )
}