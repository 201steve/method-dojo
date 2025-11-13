# Task List Management

Guidelines for managing task lists in markdown files to track progress on completing a PRD

## Task Implementation

- **One sub-task at a time:** Do **NOT** start the next sub‑task until you ask the user for permission and they say "yes" or "y"
- **Completion protocol:**
  1. When you finish a **sub‑task**, immediately mark it as completed by changing `[ ]` to `[x]`.
  2. If **all** subtasks underneath a parent task are now `[x]`, follow this sequence:
  - **First**: Run the full test suite (`pytest`, `npm test`, `bin/rails test`, etc.)
  - **Only if all tests pass**: Stage changes (`git add .`)
  - **Clean up**: Remove any temporary files and temporary code before committing
  - **Commit**: Use a descriptive commit message that:
    - Uses conventional commit format (`feat:`, `fix:`, `refactor:`, etc.)
    - Summarizes what was accomplished in the parent task
    - Lists key changes and additions
    - References the task number and PRD context
    - **Formats the message as a single-line command using `-m` flags**, e.g.:

      ```
      git commit -m "feat: add payment validation logic" -m "- Validates card type and expiry" -m "- Adds unit tests for edge cases" -m "Related to T123 in PRD"
      ```
  3. Once all the subtasks are marked completed and changes have been committed, mark the **parent task** as completed.

- Stop after each sub‑task and wait for the user's go‑ahead.

## Task List Maintenance

1. **Update the task list as you work:**
   - Mark tasks and subtasks as completed (`[x]`) per the protocol above.
   - Add new tasks as they emerge.

2. **Maintain the "Relevant Files" section:**
   - List every file created or modified.
   - Give each file a one‑line description of its purpose.

## AI Instructions

When working with task lists, the AI must:

1. Regularly update the task list file after finishing any significant work.
2. Follow the completion protocol:
   - Mark each finished **sub‑task** `[x]`.
   - Mark the **parent task** `[x]` once **all** its subtasks are `[x]`.
3. Add newly discovered tasks.
4. Keep "Relevant Files" accurate and up to date.
5. Before starting work, check which sub‑task is next.
6. After implementing a sub‑task, update the file and then pause for user approval.

## 작업 실행 시작을 위한 요청 템플릿

아래 템플릿을 복사하여 [ ] 안의 내용을 채워 저에게 보내주시면, Task List에 명시된 개발 작업을 시작하겠습니다.

### 1. 실행할 Task List 파일

[작업을 시작할 Task List 파일의 전체 경로 또는 파일명을 알려주세요.]

(예: /tasks/tasks-prd-social-login.md)

### 2. 작업 시작 지시

[어떤 작업부터 시작할지 알려주세요. 보통은 첫 번째 하위 작업부터 시작합니다.]

(예: 첫 번째 하위 작업(1.1)부터 순서대로 작업을 시작해주세요.)

### 3. 추가 지침 (선택사항)

[작업 시작 전 특별히 염두에 두어야 할 사항이나 규칙이 있다면 알려주세요.]

(예: 커밋하기 전에 항상 저에게 커밋 메시지 초안을 먼저 보여주고 확인받아주세요. 테스트 실행 시 `--ci` 플래그를 사용해주세요.)
