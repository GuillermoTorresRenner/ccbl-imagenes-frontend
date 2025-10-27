import { json } from "stream/consumers"
import { api } from "./api"
interface ImageVariant {
    url: string;
}

interface Image {
    variants: ImageVariant[];
}

interface RandomImageProps {
    count: number;
    variant: "full" | "medium" | "thumbnail";
}
export const getRandomImages = async ({ count, variant = "medium" }: RandomImageProps) => {
    const res = await api.get(`/images/random?count=${count}`);
    const imgs: Image[] = res.data;
    const variantIndex = variant === "thumbnail" ? 0 : variant === "medium" ? 0 : 1;
    const urls = imgs.map(img => img.variants[variantIndex]?.url);
    return urls;
}
 