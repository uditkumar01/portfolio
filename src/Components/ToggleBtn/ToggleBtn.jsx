import { useState } from "react";
import Switch from "react-switch";
import { useTheme } from "../../context/ThemeProvider/ThemeProvider";
import styles from "../../styles/Toggle.module.css";

export function ToggleBtn() {
    const [checked, setChecked] = useState(false);
    const { theme, setTheme } = useTheme();

    const handleCheck = () => {
        setTheme((theme) => !theme);
        return setChecked((checked) => !checked);
    };
    return (
        <>
            <Switch
                checked={checked}
                onChange={handleCheck}
                onColor="#888888"
                onHandleColor={theme ? "#323c52" : "#fff"}
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={52}
                className="react-switch"
                id="material-switch"
                checkedIcon={
                    <div className={styles.iconLeft}>
                        <svg
                            stroke="yellow"
                            fill="yellow"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line
                                x1="4.22"
                                y1="4.22"
                                x2="5.64"
                                y2="5.64"
                            ></line>
                            <line
                                x1="18.36"
                                y1="18.36"
                                x2="19.78"
                                y2="19.78"
                            ></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line
                                x1="4.22"
                                y1="19.78"
                                x2="5.64"
                                y2="18.36"
                            ></line>
                            <line
                                x1="18.36"
                                y1="5.64"
                                x2="19.78"
                                y2="4.22"
                            ></line>
                        </svg>
                    </div>
                }
                uncheckedIcon={
                    <div className={styles.iconLeft}>
                        <svg
                            stroke="yellow"
                            fill="yellow"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                }
            />
        </>
    );
}
