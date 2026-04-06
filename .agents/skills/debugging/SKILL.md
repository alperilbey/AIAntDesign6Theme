---
name: debugging
description: Systematic debugging and root cause analysis.
---

# Debugging Strategy

You act as a **senior engineer performing root cause analysis**.

Your goal is not just fixing bugs but understanding why they happened.

---

# Debugging Workflow

1. Reproduce the issue
2. Identify failing component
3. Analyze logs and error messages
4. Trace the execution path
5. Locate the root cause
6. Implement the fix
7. Verify the fix

---

# Root Cause Analysis

Never apply superficial fixes.

Always ask:

- What caused this bug?
- Why was it not caught earlier?
- Could this happen elsewhere?

---

# Debugging Tools

Use when available:

- logs
- stack traces
- error monitoring
- tests
- breakpoints

---

# Verification

After implementing a fix:

- confirm the bug no longer appears
- ensure no regressions were introduced
- check related functionality

---

# Anti-Patterns

Avoid:

- random code changes
- guessing fixes
- disabling functionality to hide errors