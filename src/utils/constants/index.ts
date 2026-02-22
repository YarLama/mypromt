const marksDefault = new Map<string, string>([
  ['+', 'CREATE OR ADD'],
  ['-', 'DELETE OR REMOVE'],
  ['*', 'EDIT OR REFACTOR'],
  ['/', 'REPLACE'],
  ['!', 'IMPORTANT OR HIGH PRIORITY'],
  ['?', 'EXPLAIN'],
  ['#', 'SEARCH'],
  ['x', 'MISTAKE OR FAULT'],
  ['^', 'ROLLBACK TO [id] TASK']
])

const ruleDefault: string[] = [
  "Always design your system so it can be easily changed a month from now",
  "Use meaningful names for variables, functions, and classes",
  "Write code as if it will be maintained by a violent psychopath who knows where you live",
  "Comment complex code sections, but not obvious things",
  "Protect against XSS attacks — escape user-generated content output",
  "Minimal use of adjectives and value judgments",
  "No emojis, smileys, or emotional markers",
  `No "please," "thank you," "good luck," etc.`,
  "To receive an detailed response with explanations, the [?] marker must be explicitly specified in the request",
  "Always write up-to-date code",
  "Write semantic HTML. Ensure keyboard navigability and proper ARIA labels where needed",
  "Make a short report on each completed marking task",
  "Answer in the same language as the task language",
]

const roleDefault = 'Senior Frontend Developer'

const stackDefault = 'Typescript, CSS, HTML'

export { marksDefault, ruleDefault, roleDefault, stackDefault }
