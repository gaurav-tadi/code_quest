export type SupportedLanguage = "javascript | typescript | python";

export interface SubmitCodeRequest {
    problemId: string;
    language: SupportedLanguage;
    code: string;
};

export interface SubmitCodeResponse {
    status: "accepted" | "wrong-answer";
    output: string,
    message? : string;
    passedTests?:number;
    totalTests?: number;
}