import { Suspense, useEffect } from "react";
import "./twitter.css";
import Loading from "../loading/Loading";
import { twitterDetails } from "../../portfolio";

const renderLoader = () => <Loading />;
const cantDisplayError = "<div class='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut() {
  setTimeout(() => {
    const el = document.getElementById("twitter");
    if (el && !el.innerHTML.includes("iframe")) {
      el.innerHTML = cantDisplayError;
    }
  }, 10000);
}

var _widthScreen = typeof window !== 'undefined' ? window.screen.width : 0;

export default function Twitter() {
  useEffect(() => {
    if (!twitterDetails.userName) return;

    // Load widgets.js if not present
    if (!window.twttr) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        timeOut();
      };
    } else {
      timeOut();
    }
  }, []);

  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="tw-main-div" id="twitter">
          <div className="centerContent">
            <a
              className="twitter-timeline"
              data-height="400"
              data-chrome="nofooter noheader"
              href={`https://twitter.com/${twitterDetails.userName}`}
            >
              Tweets by {twitterDetails.userName}
            </a>
          </div>
        </div>
      </Suspense>
    );
  } else {
    return null;
  }
}