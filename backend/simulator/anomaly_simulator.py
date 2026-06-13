import numpy as np
import pandas as pd
import random
from datetime import datetime, timedelta


class TelemetrySimulator:

    def __init__(
        self,
        sampling_interval_secs=1.0,
        total_duration_hr=2.0
    ):
        self.dt = sampling_interval_secs
        self.total_duration_hr = total_duration_hr
        self.total_steps = int(
            (total_duration_hr * 3600) / self.dt
        )

        self.base_voltage = 28.0
        self.base_temp = 20.0
        self.base_current = 3.0

        self.internal_resistance = 0.15
        self.thermal_coupling = 0.8

    def generate_data(
        self,
        anomaly_probability=0.01
    ):

        timestamps = []
        voltages = []
        temperatures = []
        currents = []
        anomaly_labels = []
        anomaly_types = []

        start_time = datetime.now()

        current_state = self.base_current
        temp_state = self.base_temp

        for step in range(self.total_steps):

            current_time = start_time + timedelta(
                seconds=step * self.dt
            )

            timestamps.append(current_time)

            current_flux = np.random.normal(
                0,
                0.05
            )

            current_state = max(
                1.0,
                current_state * 0.95
                + self.base_current * 0.05
                + current_flux
            )

            voltage_state = (
                self.base_voltage
                - current_state * self.internal_resistance
                + np.random.normal(0, 0.05)
            )

            temp_target = (
                self.base_temp
                + current_state * self.thermal_coupling
            )

            temp_state = (
                temp_state * 0.98
                + temp_target * 0.02
                + np.random.normal(0, 0.03)
            )

            v_out = voltage_state
            t_out = temp_state
            i_out = current_state

            is_anomaly = 0
            a_type = "Normal"

            if random.random() < anomaly_probability:

                is_anomaly = 1

                choice = random.choice(
                    [
                        "voltage_drop",
                        "temp_spike",
                        "current_surge",
                        "multivariable"
                    ]
                )

                if choice == "voltage_drop":
                    v_out -= np.random.uniform(
                        2.5,
                        4.0
                    )
                    a_type = "Voltage Drop"

                elif choice == "temp_spike":
                    t_out += np.random.uniform(
                        8.0,
                        15.0
                    )
                    a_type = "Temp Spike"

                elif choice == "current_surge":
                    i_out += np.random.uniform(
                        4.0,
                        7.0
                    )
                    a_type = "Current Surge"

                elif choice == "multivariable":

                    i_out += np.random.uniform(
                        5.0,
                        8.0
                    )

                    v_out -= (
                        i_out
                        * self.internal_resistance
                        * 2
                    ) + np.random.uniform(
                        1.5,
                        3.0
                    )

                    t_out += np.random.uniform(
                        10.0,
                        18.0
                    )

                    a_type = "Multi-Variable Fault"

            voltages.append(v_out)
            temperatures.append(t_out)
            currents.append(i_out)
            anomaly_labels.append(is_anomaly)
            anomaly_types.append(a_type)

        return pd.DataFrame({
            "Timestamp": timestamps,
            "Battery_Voltage_V": voltages,
            "Temperature_C": temperatures,
            "Current_Draw_A": currents,
            "Is_Anomaly": anomaly_labels,
            "Anomaly_Type": anomaly_types
        })
    
