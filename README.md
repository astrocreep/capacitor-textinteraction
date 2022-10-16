# capacitor-textinteraction

Toggle text interaction in Capacitor based iOS apps

## Install

```bash
npm install capacitor-textinteraction
npx cap sync
```

## API

<docgen-index>

* [`toggle(...)`](#toggle)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### toggle(...)

```typescript
toggle(options: TextInteractionOptions) => any
```

Toggle text interaction (selection) on the Capacitor WebView.

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#textinteractionoptions">TextInteractionOptions</a></code> |

**Returns:** <code><code>Promise&lt;<a href="#TextInteractionResult">TextInteractionResult</a>&gt;</code>

--------------------


### Interfaces


#### TextInteractionOptions

| Prop          | Type                 | Description                                                                                                                                   |
| ------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **`enabled`** | <code>boolean</code> | Whether text interaction should be enabled or disabled. Disabling suppresses the magnifier lens that Apple reintroduced with iOS 15. iOS only |


#### TextInteractionResult

| Prop          | Type                 | Description                                      |
| ------------- | -------------------- | ------------------------------------------------ |
| **`success`** | <code>boolean</code> | true if supported (&gt;= iOS 14.5), false if not |

</docgen-api>
