# PostHog Analytics Setup Guide

This project uses PostHog for analytics and event tracking.

## 🚀 Quick Start

### 1. Get Your PostHog API Key

1. Go to [PostHog](https://app.posthog.com/)
2. Create an account or sign in
3. Create a new project
4. Copy your **Project API Key** (starts with `phc_`)

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
REACT_APP_POSTHOG_KEY=phc_your_api_key_here
REACT_APP_POSTHOG_HOST=https://us.i.posthog.com  # or https://eu.i.posthog.com for EU
```

### 3. Run the App

```bash
bun install
bun start
```

## 📊 Using PostHog

### Track Events in Your Code

```javascript
import { usePostHogTracker } from './hooks/usePostHog';

function MyComponent() {
  const trackEvent = usePostHogTracker();

  const handleClick = () => {
    trackEvent('button_clicked', { 
      buttonName: 'Sign Up',
      page: 'Home' 
    });
  };

  return <button onClick={handleClick}>Sign Up</button>;
}
```

### Track Page Views

```javascript
import { usePostHogPageView } from './hooks/usePostHog';

function HomePage() {
  usePostHogPageView('Home Page');
  
  return <div>Welcome!</div>;
}
```

### Identify Users

```javascript
import { usePostHogIdentify } from './hooks/usePostHog';

function LoginSuccess({ user }) {
  const identify = usePostHogIdentify();

  useEffect(() => {
    identify(user.id, {
      email: user.email,
      name: user.name,
      plan: 'pro'
    });
  }, [user]);

  return <div>Welcome back!</div>;
}
```

## 🔍 Debugging

### In Development Mode

A **PostHog Debugger** panel appears in the bottom-right corner of your app (only in development mode).

Click the 📊 button to:
- See events in real-time
- View event properties
- Check your User ID
- Send test events

### In Browser Console

```javascript
// Enable debug mode
togglePostHogDebug(true);

// Check your user ID
posthog.get_distinct_id();

// Send a test event
posthog.capture('test_event', { test: true });

// View PostHog instance
console.log(posthog);
```

### Check Network Requests

1. Open DevTools → **Network** tab
2. Filter by `capture` or `batch`
3. You should see POST requests to PostHog API

## 📈 View Events in PostHog Dashboard

1. Go to [PostHog Dashboard](https://app.posthog.com/)
2. Navigate to **Events** (left sidebar)
3. You'll see all captured events in real-time

### Common Events

- `$pageview` - Automatic page views
- `$autocapture` - Auto-captured clicks, form submissions, etc.
- Custom events - Any events you track manually

## 🛠️ Available Hooks

| Hook | Purpose |
|------|---------|
| `usePostHogTracker()` | Track custom events |
| `usePostHogPageView(pageName)` | Track page views |
| `usePostHogIdentify()` | Identify users |

## 🧪 Testing

To test if PostHog is working:

1. Start your app in development mode
2. Open the PostHog Debugger (📊 button)
3. Click "Send Test Event"
4. Check the debugger panel - you should see the event
5. Check PostHog dashboard - event should appear within seconds

## 🔐 Security

- **Never commit** your `.env.local` file
- `.env.local` is already in `.gitignore`
- Use `.env.example` as a template for others

## 📚 Resources

- [PostHog Documentation](https://posthog.com/docs)
- [PostHog React Integration](https://posthog.com/docs/libraries/react)
- [Event Tracking Best Practices](https://posthog.com/docs/integrate/client/js#event-tracking)

## 🎯 Example Events to Track

```javascript
// User actions
trackEvent('signup_completed', { method: 'google' });
trackEvent('form_submitted', { formName: 'Contact' });
trackEvent('video_played', { videoId: '123', duration: 30 });

// Navigation
trackEvent('navigation_clicked', { destination: '/about' });
trackEvent('external_link_clicked', { url: 'https://example.com' });

// Features
trackEvent('feature_used', { feature: 'dark_mode' });
trackEvent('search_performed', { query: 'react hooks' });

// Errors
trackEvent('error_occurred', { errorType: 'network', message: 'Failed to fetch' });
```

## 🐛 Troubleshooting

### Events not showing up?

1. Check if `REACT_APP_POSTHOG_KEY` is set correctly
2. Make sure you're using the correct API host (US vs EU)
3. Check browser console for errors
4. Verify network requests are being sent
5. Try `posthog.debug(true)` in console

### Debugger not appearing?

- Only visible in `development` mode (`NODE_ENV=development`)
- Check if `PostHogDebugger` component is imported in App.js

### "PostHog not initialized" warning?

- Make sure `PostHogProvider` wraps your app (check `index.js`)
- Verify environment variables are loaded
