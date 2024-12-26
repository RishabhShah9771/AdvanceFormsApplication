import { useFormStatus } from "react-dom";

const Submit = () => {
    const { pending } = useFormStatus();
    return (
        <p className="actions">
            <button type="submit" disabled={pending}>
                {pending ? "Processing..." : "Submit"}
            </button>
        </p>
    );
};
export default Submit;
