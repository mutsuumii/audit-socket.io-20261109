# Prototype pollution
# CWE-1321 | Severity: HIGH
# File: packages/socket.io-component-emitter/test/emitter.js line 49

**Risk:** Prototype mutation through user input affects all objects in the process.

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
