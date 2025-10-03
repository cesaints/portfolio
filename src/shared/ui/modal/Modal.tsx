"use client";
export default function Modal(
    { open, onClose, children }: {
        open: boolean; onClose: () => void; children: React.ReactNode;
    }
) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={onClose}>
            <div className="max-w-xl w-full rounded-2xl bg-neutral-900 border border-neutral-800 p-6"
                onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
