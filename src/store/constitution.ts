import { marksDefault, roleDefault, ruleDefault, stackDefault } from "../utils/constants";

class Constitution {

  private _marks: Map<string, string>;
  private _rules: string[];
  private _stack: string;
  private _role: string;

  constructor(role: string, stack: string, marks: Map<string, string>, rules: string[]) {
    this._marks = marks;
    this._rules = rules;
    this._stack = stack;
    this._role = role;
  }

  public updateStack(stack: string) {
    this._stack = stack;
  }

  public updateRole(role: string) {
    this._role = role;
  }

  public addRule(rule: string) {
    this._rules.push(rule);
  }

  public removeRule(rule: string) {
    this._rules = this._rules.filter(r => r !== rule);
  }

  public updateRule(indexRule: number, newRule: string) {
    if (this._rules[indexRule]) this._rules[indexRule] = newRule;
  }

  public getFullText(): string {
    return [
      `## ROLE\nYou are a ${this._role}`,
      `## CORE TECH STACK\n ${this._stack}`,
      this.getRulesText(),
      this.getMarksText()
    ].join('\n');
  }
  private getMarksText() {
    const marksText = Array.from(this._marks).map(({ 0: key, 1: value }) => `-[${key}]: ${value}`).join("\n")
    return `### MARKS \n${marksText}`;
  }
  private getRulesText(): string {
    const rulesText = this._rules.map(r => `- ${r}`).join('\n');
    return `## RULES \n${rulesText}`;
  }
}

export const constitution = new Constitution(roleDefault, stackDefault, marksDefault, ruleDefault);
