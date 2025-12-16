export declare class AiService {
    private openai;
    constructor();
    generateReply(prompt: string): Promise<string>;
}
