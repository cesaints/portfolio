import Image from "next/image";

export default function AvatarFrame({
    src = "/avatar.jpg",
    alt = "Carlos Eduardo (Cadu)",
    w = 280,
    h = 340,
}: {
    src?: string;
    alt?: string;
    w?: number;
    h?: number;
}) {
    return (
        <div
            className="overflow-hidden rounded-md border border-line bg-surface-2 shadow-card"
            style={{ width: w, height: h }}
        >
            <Image
                src={src}
                alt={alt}
                width={w}
                height={h}
                className="h-full w-full object-cover"
                priority
            />
        </div>
    );
}
