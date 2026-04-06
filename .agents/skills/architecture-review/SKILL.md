---
name: architecture-review
description: Ensure architectural decisions remain simple, scalable and compatible with project standards including Ant Design 6 dynamic theme architecture.
---

# Architecture Review

You act as a **Senior Software Architect** responsible for protecting the long-term architecture of the project.

Your job is to **review structural decisions before implementation** and prevent architectural mistakes.

---

# Primary Goals

- Maintain a clean architecture
- Prevent unnecessary complexity
- Ensure compatibility with existing project standards
- Protect long-term maintainability

---

# When To Use This Skill

Use this skill when:

- Adding a new feature
- Creating a new module
- Introducing a new dependency
- Changing application structure
- Creating reusable components
- Designing data flow

---

# Architecture Review Checklist

Before implementing a solution, verify:

1. Does this change introduce unnecessary complexity?
2. Is there an existing component or utility that should be reused?
3. Does the change follow the project's coding standards?
4. Does the change align with UI architecture and theming rules?
5. Does the solution scale as the project grows?

If the answer to any of these is **no**, redesign the solution.

---

# Simplicity First Rule

Always prefer:

- smaller modules
- clearer code paths
- fewer dependencies

Avoid:

- unnecessary abstractions
- speculative architecture
- premature optimization

---

# Project Compatibility Rules

All architecture decisions must remain compatible with existing project skills:

- `coding-standards`
- `performance`
- `debugging`
- `ui-quality`
- `Ant Design 6 Development Skill`

These skills define the official development environment and must be respected when making architectural decisions.

---

# Ant Design 6 Architecture Constraints

The project uses a **dynamic theme architecture based on Ant Design Design Tokens**.

Architecture decisions must respect:

### Theme Integrity

Never introduce:

- hardcoded colors
- inline styling that bypasses theme tokens
- CSS systems that override Ant Design token logic

Always prefer:

- `theme.useToken()`
- token-based styling

---

### Component Imports

All UI components must follow the project bridge architecture:
Always import UI components from:

`@/components/theme/antd-ui`

Never import UI components directly from:

`antd`

This prevents rendering issues with Server Components in Next.js.

---

# Component Architecture

New UI components must:

- be reusable
- respect design tokens
- follow UI quality rules
- remain compatible with layout standards

Avoid:

- duplicated UI logic
- tightly coupled components
- deeply nested component trees

---

# Dependency Evaluation

Before adding a dependency ask:

1. Is this already solvable with existing libraries?
2. Does it increase bundle size significantly?
3. Does it conflict with Ant Design or Next.js architecture?

If the dependency adds unnecessary complexity → do not add it.

---

# Structural Boundaries

Maintain clear separation:

- UI layer
- business logic
- data access
- utilities

Do not mix responsibilities.

---

# Verification Step

Before approving an architecture decision ask:

> Would a senior staff engineer approve this structure?

If the answer is uncertain, simplify the solution.

---

# Final Rule

The best architecture is:

- simple
- scalable
- understandable
- consistent with existing project standards

# Architecture Red Flags

If any of these appear, reconsider the design:

- unnecessary new dependencies
- duplicated components
- bypassing theme token system
- mixing UI and business logic
- large monolithic components
- deeply nested component trees

When these appear → simplify the architecture.