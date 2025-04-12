"use client";

import { useEffect, createContext, useContext, ReactNode } from "react";
import mixpanel from "mixpanel-browser";
import { MIXPANEL_ANALYTICS_EVENTS } from "./mixpanelEvents";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
type MixpanelEventName =
    (typeof MIXPANEL_ANALYTICS_EVENTS)[keyof typeof MIXPANEL_ANALYTICS_EVENTS];
type MixpanelContextType = {
    track: (
        eventName: MixpanelEventName,
        properties?: { [key: string]: string | number | boolean }
    ) => void;

};
type MixpanelProviderProps = {
    children: ReactNode;
};

const MixpanelContext = createContext<MixpanelContextType>({
    track: () => { },
});

export const useMixpanel = () => useContext(MixpanelContext);

export function MixpanelProvider({ children }: MixpanelProviderProps) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (!MIXPANEL_TOKEN) {
                console.warn("Mixpanel token is missing! Check your .env file.");
                return;
            }

            mixpanel.init(MIXPANEL_TOKEN, {
                debug: process.env.NODE_ENV === "development",
                track_pageview: true,
                persistence: "localStorage",
                ignore_dnt: true,
            });

        }
    }, []);

    const track = (
        eventName: MixpanelEventName,
        properties?: { [key: string]: string | number | boolean }
    ) => {
        mixpanel.track(eventName, {
            ...properties,
            timestamp: Date.now(),
            path:
                typeof window !== "undefined" ? window.location.pathname : undefined,
        });
    };



    const value = { track };

    return (
        <MixpanelContext.Provider value={value}>
            {children}
        </MixpanelContext.Provider>
    );
}