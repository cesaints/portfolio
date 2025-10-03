export const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: .6, delay },
    viewport: { once: true, amount: .3 }
});

export const scaleIn = (delay = 0) => ({
    initial: { opacity: 0, scale: .96 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: .5, delay },
    viewport: { once: true }
});
