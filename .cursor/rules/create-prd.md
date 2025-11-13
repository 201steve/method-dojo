# Rule: Generating a Product Requirements Document (PRD)

## Activation Trigger

To activate the PRD generation mode, start your request with the keyword `!prd` or `PRD 생성:`. The system will then follow the PRD generation rule for the content that follows.

**Examples:**

- `!prd 소셜 로그인 기능`
- `PRD 생성: 사용자 프로필 편집 기능`

## Goal

To guide an AI assistant in creating a detailed Product Requirements Document (PRD) in Markdown format, based on an initial user prompt. The PRD should be clear, actionable, and suitable for a junior developer to understand and implement the feature.

## Process

1.  **Receive Initial Prompt:** The user provides a brief description or request for a new feature or functionality.
2.  **Ask Clarifying Questions:** Before writing the PRD, the AI _must_ ask clarifying questions to gather sufficient detail. The goal is to understand the "what" and "why" of the feature, not necessarily the "how" (which the developer will figure out). Make sure to provide options in letter/number lists so I can respond easily with my selections.
3.  **Generate PRD:** Based on the initial prompt and the user's answers to the clarifying questions, generate a PRD using the structure outlined below.
4.  **Save PRD:** Save the generated document as `prd-[feature-name].md` inside the `/tasks` directory.

## Clarifying Questions (Examples)

The AI should adapt its questions based on the prompt, but here are some common areas to explore:

- **Problem/Goal:** "What problem does this feature solve for the user?" or "What is the main goal we want to achieve with this feature?"
- **Target User:** "Who is the primary user of this feature?"
- **Core Functionality:** "Can you describe the key actions a user should be able to perform with this feature?"
- **User Stories:** "Could you provide a few user stories? (e.g., As a [type of user], I want to [perform an action] so that [benefit].)"
- **Acceptance Criteria:** "How will we know when this feature is successfully implemented? What are the key success criteria?"
- **Scope/Boundaries:** "Are there any specific things this feature _should not_ do (non-goals)?"
- **Data Requirements:** "What kind of data does this feature need to display or manipulate?"
- **Design/UI:** "Are there any existing design mockups or UI guidelines to follow?" or "Can you describe the desired look and feel?"
- **Edge Cases:** "Are there any potential edge cases or error conditions we should consider?"

## PRD Structure

The generated PRD should include the following sections:

1.  **Introduction/Overview:** Briefly describe the feature and the problem it solves. State the goal.
2.  **Goals:** List the specific, measurable objectives for this feature.
3.  **User Stories:** Detail the user narratives describing feature usage and benefits.
4.  **Functional Requirements:** List the specific functionalities the feature must have. Use clear, concise language (e.g., "The system must allow users to upload a profile picture."). Number these requirements.
5.  **Non-Goals (Out of Scope):** Clearly state what this feature will _not_ include to manage scope.
6.  **Design Considerations (Optional):** Link to mockups, describe UI/UX requirements, or mention relevant components/styles if applicable.
7.  **Technical Considerations (Optional):** Mention any known technical constraints, dependencies, or suggestions (e.g., "Should integrate with the existing Auth module").
8.  **Success Metrics:** How will the success of this feature be measured? (e.g., "Increase user engagement by 10%", "Reduce support tickets related to X").
9.  **Open Questions:** List any remaining questions or areas needing further clarification.

## Target Audience

Assume the primary reader of the PRD is a **junior developer**. Therefore, requirements should be explicit, unambiguous, and avoid jargon where possible. Provide enough detail for them to understand the feature's purpose and core logic.

## Output

- **Format:** Markdown (`.md`)
- **Location:** `/tasks/`
- **Filename:** `prd-[feature-name].md`

## Final instructions

1. Do NOT start implementing the PRD
2. Make sure to ask the user clarifying questions
3. Take the user's answers to the clarifying questions and improve the PRD

# IT'S A COMMENT FROM HERE never mind.

## 효율적인 첫 요청 예시 (한국어)

### 기능 요청 (상세 버전)

#### 1. 기능 이름: [구현하려는 기능의 명칭]

#### 2. 문제 및 목표 (Problem/Goal)

[이 기능이 해결하려는 사용자 문제와, 이를 통해 달성하려는 비즈니스 목표를 설명해주세요.]

#### 3. 주요 사용자 (Target User)

[이 기능의 가장 큰 혜택을 받는 사용자는 누구인지 설명해주세요.]

#### 4. 핵심 기능 (Core Functionality)

[사용자가 이 기능을 통해 할 수 있어야 하는 핵심적인 행동들을 목록으로 설명해주세요.]

#### 5. 사용자 스토리 (User Stories)

[사용자 관점에서의 기능 요구사항을 '어떤 사용자는 ~하기 위해 ~을 원한다' 형식으로 1~3개 작성해주세요.]

#### 6. 성공 기준 (Acceptance Criteria)

[이 기능이 '성공적으로 구현되었다'고 판단할 수 있는 구체적인 조건들을 나열해주세요.]

#### 7. 제외 범위 (Scope/Boundaries)

[이번 버전의 개발 범위에 포함되지 않는 기능이 있다면 명확하게 명시해주세요.]

#### 8. 데이터 요구사항 (Data Requirements)

[이 기능이 다루거나 표시해야 할 데이터가 있다면 설명해주세요.]

#### 9. 디자인/UI (Design/UI)

[참고할 목업(mockup)이 있거나, 원하는 UI/UX에 대한 설명이 있다면 작성해주세요.]

#### 10. 예외 케이스 (Edge Cases)

[고려해야 할 예외적인 상황이나 오류 조건이 있다면 알려주세요.]
