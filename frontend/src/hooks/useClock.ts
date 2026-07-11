import { useEffect, useState } from "react";

export function useClock() {

    const [time, setTime] = useState("");

    useEffect(() => {

        const updateClock = () => {

            const now = new Date();

            setTime(
                now.toLocaleTimeString([],{
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit"
                })
            );

        };

        updateClock();

        const interval = setInterval(
            updateClock,
            1000
        );

        return () => clearInterval(interval);

    }, []);

    return time;

}