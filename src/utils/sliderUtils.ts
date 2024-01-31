
export const nextSlide = (prevIndex: number, length: number) => (prevIndex === length - 1 ? 0 : (prevIndex + 1) % length);

export const prevSlide = (prevIndex: number, length: number) => (prevIndex === 0 ? length - 1 : (prevIndex - 1) % length);

export const calculateIndex = (index: number, length: number) => (index + length) % length;
