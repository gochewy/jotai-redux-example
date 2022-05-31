import useContent from "../hooks/useContent"
import useInterest from "../hooks/useInterest";
import Widget from "./Widget";

export default function Widgets() {
    const content = useContent();
    const interest = useInterest();
    const widgets = content?.widgets.slice(0, interest);
    return (
        <>
            <h3>Check out some of our stuff!</h3>
            <div className="grid">
                {widgets?.map(widget => (
                    <Widget widget={widget} key={widget.id} />
                ))}
            </div>
        </>
    )
}