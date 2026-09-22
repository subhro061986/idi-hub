import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    footer,
    width = "max-w-xl",
}) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-backdropFade"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className={`relative w-full ${width} bg-white rounded-2xl shadow-2xl p-6 z-10 animate-modalPop`}
            >
                {/* Header */}
                {title && (
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-black text-xl transition-colors cursor-pointer"
                        >
                            ✕
                        </button>
                    </div>
                )}

                {/* Body */}
                <div className="mb-4">{children}</div>

                {/* Footer */}
                {footer && (
                    <div className="flex justify-end gap-3">
                        {footer}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}