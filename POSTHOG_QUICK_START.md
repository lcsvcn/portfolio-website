# PostHog Setup - Quick Reference

## ✅ What's Been Set Up

1. **PostHog Provider** - Already configured in `src/index.js`
2. **Custom Hooks** - Created in `src/hooks/usePostHog.js`
3. **Debug Component** - Created in `src/components/posthog/PostHogDebugger.js`
4. **Environment Files** - `.env.example` and `.env.local` templates

## 🚀 Getting Started (3 Steps)

### Step 1: Get Your PostHog API Key

Visit: https://app.posthog.com/
- Sign up or login
- Create a project
- Copy your API key (starts with `phc_`)

### Step 2: Update `.env.local`

```bash
REACT_APP_POSTHOG_KEY=phc_YOUR_KEY_HERE
REACT_APP_POSTHOG_HOST=https://us.i.posthog.com
```

### Step 3: Start the App

```bash
bun start
```

## 🎯 Quick Usage Examples

### Track a Button Click

```javascript
import { usePostHogTracker } from './hooks/usePostHog';

function MyButton() {
  const trackEvent = usePostHogTracker();
  
  return (
    <button onClick={() => trackEvent('button_clicked', { name: 'Subscribe' })}>
      Subscribe
    </button>
  );
}
```

### Track Page Views

```javascript
import { usePostHogPageView } from './hooks/usePostHog';

function HomePage() {
  usePostHogPageView('Home');
  return <div>Home Page</div>;
}
```

## 🔍 Debug in Development

1. Look for the **📊** button in bottom-right corner
2. Click it to see live events
3. Or use browser console:
   ```javascript
   togglePostHogDebug(true);  // Enable debug logging
   posthog.capture('test');    // Send test event
   ```

## 📊 View Events in Dashboard

1. Go to: https://app.posthog.com/
2. Click **Events** in left sidebar
3. See all your tracked events in real-time

## 🎨 What You Can Track

- ✅ Page views (automatic)
- ✅ Button clicks
- ✅ Form submissions  
- ✅ Video plays
- ✅ Feature usage
- ✅ Errors and exceptions
- ✅ User properties
- ✅ Custom events

## 📖 Full Documentation

See `POSTHOG_SETUP.md` for complete guide.

---

**Need help?** Check the browser console for PostHog debug logs (enabled in development mode).
