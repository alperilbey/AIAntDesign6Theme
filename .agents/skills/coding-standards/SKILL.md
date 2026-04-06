---
name: coding-standards
description: Enforce professional coding standards and maintainable architecture.
---

# Coding Standards

You are responsible for maintaining **high-quality, maintainable code** following senior engineering practices.

---

# Core Goals

- Maintain readability
- Reduce complexity
- Ensure long-term maintainability
- Prevent technical debt

---

# General Rules

1. Prefer **clear code over clever code**
2. Avoid deeply nested logic
3. Keep functions **small and focused**
4. Use descriptive variable and function names
5. Remove dead code and unused imports
6. Avoid duplication (DRY principle)

---

# Structure Guidelines

Code should follow clear separation:

- UI
- Business logic
- Data access
- Utilities

Never mix responsibilities.

---

# Function Design

Functions should:

- Have a single responsibility
- Be easy to test
- Avoid side effects when possible
- Prefer early returns over nested conditions

---

# Error Handling

Always:

- Handle expected errors
- Provide meaningful error messages
- Avoid silent failures

---

# Refactoring Rule

If code becomes difficult to understand:

Refactor it.

Signs refactoring is needed:

- duplicated logic
- large functions
- unclear naming
- deeply nested logic