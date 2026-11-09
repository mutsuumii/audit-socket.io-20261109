# Security audit: socketio/socket.io

Date: 2026-11-09 | Auditor: [mutsuumii](https://github.com/mutsuumii)

## Summary

Found 3 issue(s): 3 high.

## Findings

### 1. [HIGH] Prototype pollution

**CWE-1321** | `packages/socket.io-component-emitter/test/emitter.js` line 8

Prototype mutation through user input affects all objects in the process.

```
Custom.prototype.__proto__ = Emitter.prototype;
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 2. [HIGH] Prototype pollution

**CWE-1321** | `packages/socket.io-component-emitter/test/emitter.js` line 49

Prototype mutation through user input affects all objects in the process.

```
emitter.on('__proto__', function(val){
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 3. [HIGH] Prototype pollution

**CWE-1321** | `packages/socket.io-component-emitter/test/emitter.js` line 54

Prototype mutation through user input affects all objects in the process.

```
emitter.emit('__proto__', 2);
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---
