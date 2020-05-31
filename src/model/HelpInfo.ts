export default class HelpInfo {

    id: number;
    topic: string;
    questions: Questions[];

    constructor() {
        this.id = 0;
        this.topic = '';
        this.questions = [];
    }
}

export interface Questions {
    question: string;
    answer: string;
}