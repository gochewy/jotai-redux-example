import useContent from "../hooks/useContent";
import useInterest from "../hooks/useInterest";

export default function Header() {
    const { content } = useContent();
    const { interest, setInterest } = useInterest();

    return (
        <article>
            <h1>{content?.page.title}</h1>
            <h5>{content?.page.subtitle}</h5>

            <div className="grid">
                <p>
                    <a role="button" href={content?.page.cta.url}>{content?.page.cta.text}</a>
                </p>

                <p>
                    <label htmlFor="range">
                        How interested are you in our stuff?
                        <input
                            id="range"
                            type="range"
                            min={1}
                            max={5}
                            value={interest}
                            onChange={(e) => {
                                setInterest(parseInt(e.target.value))
                            }}
                        />
                    </label>
                </p>
            </div>
        </article>
    )
}