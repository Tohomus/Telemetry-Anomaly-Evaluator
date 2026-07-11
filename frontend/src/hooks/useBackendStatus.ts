import { useEffect } from "react";
import { checkBackendStatus } from "../services/healthService";
import { useTelemetryStore } from "../store/telemetryStore";

export function useBackendStatus() {

    const { setBackendStatus } = useTelemetryStore();

    useEffect(() => {

        const checkBackend = async () => {

            try {

                await checkBackendStatus();

                setBackendStatus("online");

            } catch {

                setBackendStatus("offline");

            }

        };

        checkBackend();

        const interval = setInterval(
          checkBackend,
          30000
        );

        return () => clearInterval(interval);

    }, []);

}