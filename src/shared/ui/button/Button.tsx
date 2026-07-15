"use client";
import { buttonClasses, type Variant, type Size } from "./styles";

export type { Variant, Size };
export { buttonClasses };

export default function Button({
    className,
    variant = "primary",
    size = "md",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
}) {
    return <button {...props} className={buttonClasses({ variant, size, className })} />;
}
