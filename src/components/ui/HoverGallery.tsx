import { useState } from 'react'
import clsx from 'clsx'

type HoverGalleryProps = {
    images: string[]
    className?: string
    alt?: string
}

export const HoverGallery = ({ images, className, alt = "Gallery image" }: HoverGalleryProps) => {
    const [activeIndex, setActiveIndex] = useState(0)

    // Ensure we only render up to 10 images
    const displayImages = images.slice(0, 10)
    // The interactive columns correspond to images 1..N (since 0 is the base)
    const interactiveCount = Math.max(0, displayImages.length - 1)

    const handleMobileTap = () => {
        setActiveIndex((prev) => (prev + 1) % displayImages.length)
    }

    return (
        <div
            className={clsx("relative overflow-hidden group select-none", className)}
            onMouseLeave={() => setActiveIndex(0)}
            onClick={handleMobileTap}
        >
            {/* Image Layer */}
            <div className="relative h-full w-full">
                {displayImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`${alt} ${index + 1}`}
                        className={clsx(
                            "absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-in-out",
                            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0",
                            // Keep the base image (index 0) always present in background to prevent flickering? 
                            // Actually, if we fade between them, we just need the active one on top.
                            // If we want index 0 to show when others fade out, we can keep it opacity 1 if activeIndex is 0.
                            // But for smoother transitions, let's just use the active index logic.
                            // Optimization: Index 0 can always be opacity 1 but lower z-index if we want "reveal" effect.
                            // But standard fade is cleaner.
                        )}
                    />
                ))}
            </div>

            {/* Overlay Layer (Numbers & Lines) - Only visible when showing default image (index 0) */}
            {interactiveCount > 0 && (
                <div
                    className={clsx(
                        "hidden md:grid",
                        "absolute inset-0 w-full h-full pointer-events-none z-20 transition-opacity duration-300",
                        activeIndex === 0 ? "opacity-100" : "opacity-0"
                    )}
                    style={{ gridTemplateColumns: `repeat(${interactiveCount}, 1fr)` }}
                >
                    {Array.from({ length: interactiveCount }).map((_, i) => (
                        <div
                            key={i}
                            className={clsx(
                                "flex items-center justify-center h-full",
                                i > 0 && "border-l border-white/20"
                            )}
                        >
                            <span className="text-white font-bold text-2xl drop-shadow-md opacity-80">
                                {i + 2}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Trigger Layer - Always on top to capture hover */}
            {interactiveCount > 0 && (
                <div
                    className="hidden md:grid absolute inset-0 w-full h-full z-30"
                    style={{ gridTemplateColumns: `repeat(${interactiveCount}, 1fr)` }}
                >
                    {Array.from({ length: interactiveCount }).map((_, i) => (
                        <div
                            key={i}
                            className="h-full w-full cursor-pointer"
                            onMouseEnter={() => setActiveIndex(i + 1)}
                            onClick={(e) => e.stopPropagation()}
                        />
                    ))}
                </div>
            )}

            {/* Mobile hint: show 'Tap' on small screens so users know they can tap to cycle images */}
            {interactiveCount > 0 && (
                <div className="md:hidden absolute bottom-3 right-3 z-30 pointer-events-none">
                    <div className="px-3 py-1 rounded-full bg-black/60 text-white text-sm font-semibold animate-pulse">
                        Tap
                    </div>
                </div>
            )}
        </div>
    )
}
