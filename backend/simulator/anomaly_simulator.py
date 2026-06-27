import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import random

from datetime import datetime, timedelta


class TelemetrySimulator:

    def __init__(
        self,
        sampling_interval_secs=1.0,
        total_duration_hr=24.0
    ):

        self.dt = sampling_interval_secs
        self.total_duration_hr = total_duration_hr

        #Adding this so that our normal system changes over day
        self.time = 0
        self.total_steps = int(
            (total_duration_hr * 3600) / self.dt
        )

        self.base_voltage = 28.0
        self.base_temp = 20.0
        self.base_current = 3.0

        self.internal_resistance = 0.15
        self.thermal_coupling = 0.8

    def generate_data(self, anomaly_probability=0.01):

        timestamps = []

        voltages = []
        temperatures = []
        currents = []
        powers = []

        anomaly_labels = []
        anomaly_types = []

        start_time = datetime.now()

        current_state = self.base_current
        temp_state = self.base_temp

        active_fault = None
        fault_steps_remaining = 0

        for step in range(self.total_steps):

            current_time = (
                start_time +
                timedelta(seconds=step * self.dt)
            )

            timestamps.append(current_time)

            # Normal system dynamics

            self.time += self.dt

            # Slowly changing operating conditions
            current_offset = 0.4 * np.sin(2 * np.pi * self.time / 1800)
            temp_offset = 1.0 * np.sin(2 * np.pi * self.time / 3600)

            base_current = self.base_current + current_offset
            base_temp = self.base_temp + temp_offset

            current_flux = np.random.normal(
                0,
                0.08
            )

            current_state = max(
                1.0,
                current_state * 0.95
                + base_current * 0.05
                + current_flux
            )

            voltage_state = (
                self.base_voltage
                - (current_state * self.internal_resistance)
                + np.random.normal(0, 0.20)
            )

            temp_target = (
                base_temp
                + current_state * self.thermal_coupling
            )

            temp_state = (
                temp_state * 0.98
                + temp_target * 0.02
                + np.random.normal(0, 0.06)
            )
            # So that our normal system slowly changes over day

            v_out = voltage_state
            t_out = temp_state
            i_out = current_state

            is_anomaly = 0
            a_type = "Normal"


            # Start a fault

            if (
                fault_steps_remaining == 0
                and random.random() < anomaly_probability
            ):

                active_fault = random.choice([
                    "voltage_drop",
                    "temp_spike",
                    "current_surge",
                    "multivariable",
                    "battery_degradation",
                    "cooling_failure",
                    "sensor_noise",
                    "mixed_fault"
                ])

                # Make fault duration depend on the fault

                fault_duration = {
                  "voltage_drop": random.randint(8,20),
                  "temp_spike": random.randint(5,15),
                  "current_surge": random.randint(8,20),
                  "multivariable": random.randint(20,40),
                  "battery_degradation": random.randint(60,180),
                  "cooling_failure": random.randint(40,120),
                  "sensor_noise": random.randint(5,15),
                  "mixed_fault": random.randint(20,40)
                }
                fault_steps_remaining = fault_duration[active_fault]

            # Apply fault
            # Give every anomaly side effects

            if fault_steps_remaining > 0:

                is_anomaly = 1

                if active_fault == "voltage_drop":

                   v_out -= np.random.uniform(0.4,1.0)

                   t_out += np.random.uniform(0,0.6)

                   i_out += np.random.uniform(-0.2,0.2)


                   a_type = "Voltage Drop"

                elif active_fault == "temp_spike":

                    t_out += np.random.uniform(
                        2.0,
                        4.0
                    )
                    v_out -= np.random.uniform(0, 0.5)

                    i_out += np.random.uniform(0, 1)

                    a_type = "Temp Spike"

                elif active_fault == "current_surge":

                    i_out += np.random.uniform(2,4)

                    v_out -= np.random.uniform(0.2,0.8)

                    t_out += np.random.uniform(0.5,2)

                    a_type = "Current Surge"

                elif active_fault == "multivariable":

                    i_out += np.random.uniform(
                        3.0,
                        6.0
                    )

                    v_out -= np.random.uniform(
                        1.0,
                        2.5
                    )

                    t_out += np.random.uniform(
                        5.0,
                        10.0
                    )

                    a_type = (
                        "Multi-Variable Fault"
                    )

                elif active_fault == "battery_degradation":

                    v_out -= np.random.uniform(
                        0.3,
                        1.0
                    )

                    t_out += np.random.uniform(
                        1.0,
                        3.0
                    )

                    i_out += np.random.uniform(0,0.5)

                    a_type = (
                        "Battery Degradation"
                    )

                elif active_fault == "cooling_failure":

                    t_out += np.random.uniform(
                        2.0,
                        5.0
                    )

                    v_out -= np.random.uniform(0,0.3)

                    a_type = (
                        "Cooling Failure"
                    )

                elif active_fault == "sensor_noise":

                    v_out += np.random.normal(
                        0,
                        1.0
                    )

                    t_out += np.random.normal(
                        0,
                        1.5
                    )

                    i_out += np.random.normal(
                        0,
                        0.5
                    )

                    a_type = "Sensor Noise"

                elif active_fault == "mixed_fault":

                    v_out -= np.random.uniform(
                        0.3,
                        1.2
                    )

                    t_out += np.random.uniform(
                        2.0,
                        5.0
                    )

                    i_out += np.random.uniform(
                        2.0,
                        5.0
                    )

                    a_type = "Mixed Fault"



                fault_steps_remaining -= 1

            power_out = v_out * i_out

            voltages.append(v_out)
            temperatures.append(t_out)
            currents.append(i_out)
            powers.append(power_out)

            anomaly_labels.append(
                is_anomaly
            )

            anomaly_types.append(
                a_type
            )

        df = pd.DataFrame({
            "Timestamp": timestamps,
            "Battery_Voltage_V": voltages,
            "Temperature_C": temperatures,
            "Current_Draw_A": currents,
            "Power_W": powers,
            "Is_Anomaly": anomaly_labels,
            "Anomaly_Type": anomaly_types
        })

        return df

    def export_to_csv(
        self,
        df,
        filename="telemetry_stream.csv"
    ):

        df.to_csv(
            filename,
            index=False
        )

        print(
            f"Telemetry data exported to {filename}"
        )

    def plot_telemetry(self, df):

        fig, axes = plt.subplots(
            4,
            1,
            figsize=(14, 12),
            sharex=True
        )

        anomalies = df[
            df["Is_Anomaly"] == 1
        ]

        axes[0].plot(
            df["Timestamp"],
            df["Battery_Voltage_V"]
        )

        axes[0].scatter(
            anomalies["Timestamp"],
            anomalies["Battery_Voltage_V"],
            s=10
        )

        axes[0].set_ylabel("Voltage")

        axes[1].plot(
            df["Timestamp"],
            df["Temperature_C"]
        )

        axes[1].scatter(
            anomalies["Timestamp"],
            anomalies["Temperature_C"],
            s=10
        )

        axes[1].set_ylabel("Temp")

        axes[2].plot(
            df["Timestamp"],
            df["Current_Draw_A"]
        )

        axes[2].scatter(
            anomalies["Timestamp"],
            anomalies["Current_Draw_A"],
            s=10
        )

        axes[2].set_ylabel("Current")

        axes[3].plot(
            df["Timestamp"],
            df["Power_W"]
        )

        axes[3].scatter(
            anomalies["Timestamp"],
            anomalies["Power_W"],
            s=10
        )

        axes[3].set_ylabel("Power")
        axes[3].set_xlabel("Time")

        plt.tight_layout()
        plt.show()


