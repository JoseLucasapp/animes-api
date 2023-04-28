import { randomUUID } from "crypto";

export class Anime {
    public readonly id: string;
    public name: string;
    public episodes: number;

    constructor(props: Omit<Anime, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) this.id = randomUUID();
    }
}