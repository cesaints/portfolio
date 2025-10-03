"use client";
import Modal from "@shared/ui/modal/Modal";

export default function ProjectModal({ open, onClose }: {
    open: boolean; onClose: () => void;
}) {
    return (
        <Modal open={open} onClose={onClose}>
            <h4 className="text-lg font-semibold">Portal de Orações — Case</h4>
            <p className="mt-3 text-neutral-300">
                Planejamento, arquitetura (Next.js + MongoDB), hospedagem na Vercel,
                decisões de UX/UI, aprendizado e resultados.
            </p>
            <div className="mt-5 text-right">
                <button onClick={onClose} className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700">
                    Fechar
                </button>
            </div>
        </Modal>
    );
}
