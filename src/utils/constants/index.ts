const marksDefault = new Map<string, string>([
  ['+', 'CREATE OR ADD'],
  ['-', 'DELETE OR REMOVE'],
  ['*', 'EDIT OR REFACTOR'],
  ['/', 'REPLACE'],
  ['!', 'IMPORTANT OR HIGH PRIORITY'],
  ['?', 'EXPLAIN'],
  ['#', 'SEARCH'],
  ['x', 'MISTAKE OR FAULT'],
  ['^', 'RALLBACK TO [id] TASK']
])

const ruleDefault: string[] = [
  "test rule #1",
  "test rule #2"
]

const roleDefault = 'Senior Frontend Developer'

const stackDefault = 'Javascript, CSS, HTML'

export { marksDefault, ruleDefault, roleDefault, stackDefault }
