import { useTheme } from "../../context/ThemeProvider/ThemeProvider";
import styles from "../../styles/TechStack.module.css";
export function TechStack() {
    const { theme } = useTheme();
    const techData = [
        {
            name: "JavaScript",
            logoText: "#212121",
            logoBg: "#efd81d",
            logoTextDark: "#fff",
            logoBgDark: "#bfae21",
            svg: (
                <>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"></path>
                    </svg>
                </>
            ),
        },
        {
            name: "React",
            logoText: "#5ed3f3",
            logoBg: "#212121",
            logoTextDark: "#fff",
            logoBgDark: "#26acd1",
            svg: (
                <>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill-rule="evenodd">
                            <circle cx="11.996" cy="11.653" r="2.142"></circle>
                            <path
                                fill-rule="nonzero"
                                d="M11.9957722,7.80914159 C14.763782,7.80914159 17.3932297,8.19939152 19.3922491,8.88758063 C21.6123871,9.6518808 22.9666335,10.7818833 22.9666335,11.652558 C22.9666335,12.5799965 21.5040812,13.7840336 19.1293161,14.5708627 C17.2387355,15.1972602 14.7092455,15.538679 11.9957722,15.538679 C9.14520032,15.538679 6.58717845,15.203913 4.71853163,14.565185 C3.54866968,14.1653247 2.58256656,13.6456709 1.92037292,13.0785821 C1.32532838,12.5689984 1.02491103,12.0630628 1.02491103,11.652558 C1.02491103,10.7789546 2.32734001,9.66464781 4.49959681,8.90729393 C6.49945246,8.21010004 9.19325759,7.80914159 11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 M11.9957722,6.78423056 C9.08437994,6.78423056 6.2777499,7.20198239 4.1621939,7.93951199 C1.62214541,8.82509585 0,10.2129394 0,11.652558 C0,13.1394248 1.74140227,14.6307252 4.38703934,15.5350074 C6.37567236,16.2147483 9.04125041,16.56359 11.9957722,16.56359 C14.8115523,16.56359 17.4474553,16.2078081 19.4516644,15.5437626 C22.2020573,14.632477 23.9915445,13.1592927 23.9915445,11.652558 C23.9915445,10.2077356 22.3170688,8.81052922 19.7258695,7.91848823 C17.6128656,7.19105846 14.871718,6.78423056 11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 M8.64782576,9.74318674 C10.0306294,7.34537922 11.6822995,5.26251432 13.2771145,3.87459857 C15.0483324,2.33318986 16.7037652,1.72455661 17.4580053,2.15950561 C18.2614273,2.62281187 18.5738182,4.49132292 18.0690455,6.94154209 C17.6671734,8.89223963 16.6992742,11.2540339 15.3437168,13.6046372 C13.9196524,16.0740185 12.3517605,18.1226845 10.8648902,19.4223695 C9.93407029,20.2360369 9.00127666,20.8133347 8.17921011,21.1036655 C7.44050831,21.3645543 6.85214323,21.3720417 6.49651234,21.1669615 C5.73974814,20.7305244 5.42512511,19.045619 5.85426462,16.7855049 C6.24932455,14.7048419 7.24772098,12.1710157 8.64782671,9.74318508 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 M7.759974,9.23116928 C6.30547459,11.7533204 5.26525979,14.3932772 4.84734364,16.5943171 C4.34554839,19.2370813 4.73740525,21.3355983 5.98449631,22.0548141 C7.2725788,22.7976074 9.43439148,22.0341158 11.5394159,20.1940284 C13.121755,18.8108935 14.7555742,16.6760844 16.2315707,14.1166508 C17.6382359,11.6774242 18.6468519,9.21627599 19.0728759,7.1483441 C19.6574939,4.31054745 19.2752706,2.02434609 17.9700071,1.27164481 C16.7184046,0.549880923 14.6715337,1.30242953 12.6042836,3.1014613 C10.9185312,4.56851694 9.19669947,6.73986025 7.75997496,9.23116762 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 M8.65102932,13.6102163 C7.26423584,11.2147037 6.28457878,8.74353725 5.87862056,6.66870559 C5.42774955,4.36439699 5.72720706,2.6262057 6.48072727,2.18999639 C7.28337846,1.72531755 9.05821175,2.38783711 10.9288592,4.04883669 C12.4181905,5.37119379 13.9809502,7.38921897 15.3404734,9.7376059 C16.7686644,12.2045881 17.7605533,14.5861039 18.1440168,16.5233658 C18.384086,17.7361541 18.4183857,18.8326057 18.2593637,19.6898062 C18.1164684,20.4600771 17.8291151,20.9735449 17.473831,21.1792215 C16.7177635,21.6169189 15.1008664,21.0480332 13.3571194,19.5474962 C11.7518336,18.1661133 10.0552117,16.0356933 8.65102599,13.6102105 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 M7.76403451,14.1237168 C9.2227685,16.6434222 10.9904487,18.863069 12.6886037,20.3243677 C14.727583,22.0789594 16.7414064,22.7874988 17.9873239,22.0662207 C19.2741476,21.3212689 19.6923336,19.0670565 19.1494202,16.3243517 C18.741335,14.2627011 17.7077401,11.7810493 16.2274688,9.22410641 C14.8166895,6.78718171 13.1881856,4.68425955 11.6093526,3.2824351 C9.4428116,1.3587035 7.27122101,0.548080175 5.96723274,1.30299809 C4.71682218,2.02685487 4.34655386,4.17606524 4.87278214,6.8655093 C5.30188762,9.05864543 6.32316039,11.6347867 7.76403118,14.1237111 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168"
                            ></path>
                        </g>
                    </svg>
                </>
            ),
        },
        {
            name: "NextJS",
            logoText: "#fff",
            logoBg: "#212121",
            logoTextDark: "#212121",
            logoBgDark: "#fff",
            svg: (
                <>
                    <svg
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 207 124"
                        stroke="currentColor"
                        fill="currentColor"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                    >
                        <defs />
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g
                                id="Black-Next.js"
                                transform="translate(-247.000000, -138.000000)"
                                fill="currentColor"
                                fill-rule="nonzero"
                            >
                                <g
                                    id="next-black"
                                    transform="translate(247.000000, 138.000000)"
                                >
                                    <g id="EXT-+-Type-something">
                                        <path
                                            d="M48.9421964,32.6320058 L87.9011585,32.6320058 L87.9011585,35.7136421 L52.5134345,35.7136421 L52.5134345,58.9070103 L85.7908813,58.9070103 L85.7908813,61.9886466 L52.5134345,61.9886466 L52.5134345,87.4526941 L88.306981,87.4526941 L88.306981,90.5343303 L48.9421964,90.5343303 L48.9421964,32.6320058 Z M91.3912326,32.6320058 L95.5306221,32.6320058 L113.8738,58.0960534 L132.622801,32.6320058 L158.124498,0.286809811 L116.22757,60.7722112 L137.817329,90.5343303 L133.51561,90.5343303 L113.8738,63.4483691 L94.1508254,90.5343303 L89.9302715,90.5343303 L111.682358,60.7722112 L91.3912326,32.6320058 Z M139.359455,35.713642 L139.359455,32.6320058 L183.756439,32.6320058 L183.756439,35.7136421 L163.302983,35.7136421 L163.302983,90.5343303 L159.731745,90.5343303 L159.731745,35.7136421 L139.359455,35.713642 Z"
                                            id="EXT"
                                        />
                                        <polygon
                                            id="Type-something"
                                            points="0.202923647 32.6320058 4.66697141 32.6320058 66.2235778 124.303087 40.785176 90.5343303 3.93649086 37.0111732 3.77416185 90.5343303 0.202923647 90.5343303"
                                        />
                                    </g>
                                    <path
                                        d="M183.396622,86.5227221 C184.134938,86.5227221 184.673474,85.9601075 184.673474,85.233037 C184.673474,84.5059658 184.134938,83.9433513 183.396622,83.9433513 C182.666993,83.9433513 182.11977,84.5059658 182.11977,85.233037 C182.11977,85.9601075 182.666993,86.5227221 183.396622,86.5227221 Z M186.905793,83.1297235 C186.905793,85.2763149 188.460599,86.678523 190.727662,86.678523 C193.142388,86.678523 194.601647,85.233037 194.601647,82.7229099 L194.601647,73.8855335 L192.655968,73.8855335 L192.655968,82.7142542 C192.655968,84.1078073 191.952397,84.8521899 190.710289,84.8521899 C189.598473,84.8521899 188.842785,84.1597409 188.816727,83.1297235 L186.905793,83.1297235 Z M197.146664,83.0172011 C197.285642,85.2503478 199.153145,86.678523 201.932686,86.678523 C204.903321,86.678523 206.762139,85.1811034 206.762139,82.792155 C206.762139,80.9138876 205.702439,79.8752151 203.131364,79.2779777 L201.750279,78.9404092 C200.117298,78.5595622 199.457158,78.0488813 199.457158,77.1573541 C199.457158,76.0321243 200.482113,75.296398 202.019547,75.296398 C203.478806,75.296398 204.48639,76.0148135 204.668797,77.1660091 L206.562359,77.1660091 C206.44944,75.0626962 204.590622,73.5825873 202.045605,73.5825873 C199.309495,73.5825873 197.48542,75.0626962 197.48542,77.2871878 C197.48542,79.1221767 198.519063,80.2127835 200.786126,80.7407758 L202.401734,81.1302779 C204.060773,81.5197807 204.790402,82.091051 204.790402,83.0431676 C204.790402,84.1510859 203.643842,84.9560573 202.08035,84.9560573 C200.403939,84.9560573 199.240006,84.2030196 199.074971,83.0172011 L197.146664,83.0172011 Z"
                                        id=".JS"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                </>
            ),
        },
        {
            name: "Python",
            logoText: "#fed74b",
            logoBg: "#376d9c",
            logoTextDark: "#376d9c",
            logoBgDark: "#fed74b",
            svg: (
                <>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M314 36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09 311.09 0 00-51.66 4.38c-45.74 8-54.07 24.7-54.07 55.54V128h112v16H107.62C66.06 144 32.33 193.67 32 255.12v.88a162.91 162.91 0 003.13 32c9.29 46.28 38.23 80 72.49 80H128v-54c0-31.3 20.84-59.95 55-66.1l9.87-1.23H314a56.05 56.05 0 0015.06-2A52.48 52.48 0 00368 193.68V91.92c0-28.92-24.68-50.73-54-55.54zM194.93 105.5a20.37 20.37 0 1120.3-20.3 20.29 20.29 0 01-20.3 20.3z"></path>
                        <path d="M475.28 217c-10.7-42.61-38.41-73-70.9-73h-17.71v47.45c0 39.57-26 68.22-57.74 73.13a63.54 63.54 0 01-9.69.75H198.08a60 60 0 00-15.23 1.95C160.54 273.14 144 291.7 144 315.77v101.77c0 29 29.14 46 57.73 54.31 34.21 9.95 71.48 11.75 112.42 0 27.19-7.77 53.85-23.48 53.85-54.31V384H256v-16h148.38c29.44 0 54.95-24.93 67.45-61.31A156.83 156.83 0 00480 256a160.64 160.64 0 00-4.72-39zM316.51 404a20.37 20.37 0 11-20.3 20.3 20.29 20.29 0 0120.3-20.3z"></path>
                    </svg>
                </>
            ),
        },
        {
            name: "TypeScript",
            logoText: "#0076c7",
            logoBg: "#212121",
            logoTextDark: "#0076c7",
            logoBgDark: "#dce2e3",
            svg: (
                <>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title></title>
                        <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"></path>
                    </svg>
                </>
            ),
        },
        {
            name: "MongoDB",
            logoText: "#9bfc8b",
            logoBg: "#4cab3d",
            logoTextDark: "#4cab3d",
            logoBgDark: "#9bfc8b",
            svg: (
                <>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title></title>
                        <path d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z"></path>
                    </svg>
                </>
            ),
        },
        {
            name: "ExpressJS",
            logoText: "#fff",
            logoBg: "#212121",
            logoTextDark: "#212121",
            logoBgDark: "#fff",
            svg: (
                <>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 32 32"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
                    </svg>
                </>
            ),
        },
        {
            name: "NodeJS",
            logoText: "#7ce37b",
            logoBg: "#3e863d",
            logoTextDark: "#3e863d",
            logoBgDark: "#7ce37b",
            svg: (
                <>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M11.8988601,24 C11.5774615,24 11.2582643,23.9156879 10.9764902,23.7534477 L8.04053599,22.0152536 C7.60202502,21.7700221 7.81599724,21.6832885 7.96062661,21.6333176 C8.54530789,21.4285911 8.66396121,21.3823625 9.28804684,21.0279435 C9.35364738,20.9905204 9.43950043,21.0037286 9.50664192,21.043353 L11.7621556,22.3817801 C11.843606,22.4258073 11.9591774,22.4258073 12.034684,22.3817801 L20.8291183,17.3054433 C20.9105686,17.2592148 20.9634012,17.1645563 20.9634012,17.0676964 L20.9634012,6.91942563 C20.9634012,6.81816306 20.9105686,6.72790729 20.8273572,6.677276 L12.0364451,1.60534197 C11.9549948,1.55691204 11.8471281,1.55691204 11.7656778,1.60534197 L2.97652685,6.677276 C2.89133421,6.72570593 2.83718075,6.82036442 2.83718075,6.91722427 L2.83718075,17.0654951 C2.83718075,17.1623549 2.89001339,17.254812 2.97366508,17.3010406 L5.3819532,18.6923003 C6.6895612,19.3461043 7.48865497,18.5756282 7.48865497,17.8007494 L7.48865497,7.78456021 C7.48865497,7.64147179 7.60092434,7.53140378 7.74401276,7.53140378 L8.85790105,7.53140378 C8.99658675,7.53140378 9.11105748,7.64147179 9.11105748,7.78456021 L9.11105748,17.8051521 C9.11105748,19.5486294 8.16006985,20.5502483 6.50684829,20.5502483 C5.99833407,20.5502483 5.59768651,20.5502483 4.4793955,19.9999083 L2.17236995,18.6702867 C1.60221764,18.3400826 1.25,17.7237018 1.25,17.0654951 L1.25,6.91722427 C1.25,6.25681619 1.60221764,5.64043532 2.17236995,5.314634 L10.9756096,0.236095888 C11.5325538,-0.0786986292 12.2722108,-0.0786986292 12.8247522,0.236095888 L21.6169851,5.31683536 C22.184936,5.64483804 22.539355,6.25901755 22.539355,6.91942563 L22.539355,17.0676964 C22.539355,17.7259031 22.184936,18.3400826 21.6169851,18.6702867 L12.8247522,23.7488248 C12.5429781,23.9117255 12.2237809,23.9953771 11.8979796,23.9953771 L11.8988601,24 Z M14.6153387,17.007159 C10.7673609,17.007159 9.9605624,15.2407875 9.9605624,13.7592721 C9.9605624,13.618385 10.0741526,13.5061157 10.2152598,13.5061157 L11.3511617,13.5061157 C11.4766392,13.5061157 11.5823045,13.5974721 11.6021167,13.7214087 C11.7738228,14.8788839 12.2845384,15.4626847 14.6113762,15.4626847 C16.4649216,15.4626847 17.2530085,15.0439859 17.2530085,14.0610786 C17.2530085,13.495329 17.0284698,13.0748692 14.1490906,12.7930951 C11.7408024,12.5553482 10.2526829,12.0248203 10.2526829,10.0986301 C10.2526829,8.32433374 11.7496079,7.26768082 14.2569572,7.26768082 C17.072497,7.26768082 18.4681594,8.24508478 18.6442682,10.3451825 C18.6508723,10.4178273 18.624456,10.4882709 18.576026,10.5411035 C18.5275961,10.5917348 18.4593539,10.6225539 18.3889104,10.6225539 L17.2464044,10.6225539 C17.127531,10.6225539 17.0240671,10.5389022 16.9998521,10.4244314 C16.7246821,9.20707921 16.0598713,8.81743844 14.2525545,8.81743844 C12.2295044,8.81743844 11.9939589,9.52187372 11.9939589,10.0502002 C11.9939589,10.690796 12.2713303,10.8779116 15.001017,11.2389347 C17.7042874,11.5977564 18.9876804,12.1040693 18.9876804,14.0038432 C18.9876804,15.9190266 17.3894929,17.0175054 14.6025708,17.0175054 L14.6153387,17.007159 Z"></path>
                    </svg>
                </>
            ),
        },
        {
            name: "HTML5",
            logoText: "#fff",
            logoBg: "#dd4b25",
            logoTextDark: "#dd4b25",
            logoBgDark: "#fff",
            svg: (
                <>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        version="0.9"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0.946 0l1.284 14.4 5.762 1.6 5.777-1.602 1.286-14.398h-14.108zM12.26 4.71h-6.758l0.161 1.809h6.437l-0.485 5.422-3.623 1.004-3.618-1.004-0.247-2.774h1.773l0.126 1.41 1.967 0.53 0.004-0.001 1.968-0.531 0.204-2.29h-6.121l-0.476-5.341h8.847l-0.158 1.766z"></path>
                    </svg>
                </>
            ),
        },
        {
            name: "CSS3",
            logoText: "#fff",
            logoBg: "#254bdd",
            logoTextDark: "#254bdd",
            logoBgDark: "#fff",
            svg: (
                <>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1.1em"
                        width="1.1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M256.282 339.488zM64 32l34.946 403.219L255.767 480l157.259-44.85L448 32H64zm290.676 334.898l-98.607 28.125-98.458-28.248L150.864 289h48.253l3.433 39.562 53.586 15.163.132.273h.034l53.467-14.852L315.381 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z"></path>
                    </svg>
                </>
            ),
        },
        {
            name: "Flask",
            logoText: "#fff",
            logoBg: "#212121",
            logoTextDark: "#212121",
            logoBgDark: "#fff",
            svg: (
                <>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title></title>
                        <path d="M7.172 20.655c-.914-.72-1.89-1.41-2.556-2.38-1.402-1.712-2.482-3.694-3.22-5.777C.95 11.143.796 9.69.222 8.388-.38 7.444.325 6.41 1.36 6.109c.46-.088 1.272-.523.293-.212-.878.644-.963-.585-.063-.662.615-.082.84-.585.63-1.037-.659-.43 1.6-.903.463-1.544C1.501 1.376 4.34 1.13 3.64 2.58c-.167 1.115 1.984-.204 1.485 1.083.507.619 1.9.141 1.865 1.009.74.05.993.672 1.687.72.72.325 2.023.58 2.267 1.391-.713.565-2.365-1.166-2.444.397.215 2.31.16 4.689 1.005 6.888.4 1.332 1.369 2.38 2.244 3.418.837 1.016 1.971 1.73 3.127 2.333 1.014.478 2.107.795 3.213.994.448-.343 1.24-1.617 1.938-1.08.033.604-1.388 1.263-.067 1.196.776-.234 1.314.6 1.953-.152.588.697 2.446-.446 2.027.98-.566.364-1.392.144-1.959.646-.935-.467-1.68.418-2.715.306-1.15.206-2.319.29-3.484.291-1.912-.151-3.865-.215-5.684-.88-1.025-.298-2.024-.882-2.925-1.465zm1.615.7c1 .432 1.979.888 3.075 1.026 1.74.241 3.537.614 5.283.274-.79-.357-1.608.14-2.395-.255-.944.203-1.957-.052-2.917-.177-1.092-.486-2.27-.82-3.292-1.452-1.277-.466.66.598 1.006.685.798.453-.878-.233-1.115-.421-.668-.375-.754-.297-.066.084.139.081.276.166.42.235zm-1.904-1.346c.97.359-.004-.682-.449-.622-.197-.341-.752-.557-.36-.74-.705.244-.738-.93-1.07-.763-.745-.235-.29-1.069-1.177-1.58-.081-.54-.882-1.008-1.138-1.822-.113-.416-.905-1.613-.418-.5.414 1.072 1.143 1.99 1.75 2.907.47.873 1.027 1.786 1.885 2.33.29.278.568.703.977.79zM4.09 16.942c.033-.146.177.317 0 0zm3.954 3.497c.215-.096-.309-.12 0 0zm.526.192c-.054-.265-.24.148 0 0zm.66.275c.313-.299-.484-.188 0 0zm1.128.63c.191-.282-.61-.107 0 0zM8.19 20.023c.487-.315-.63-.004 0 0zm.494.246c-.014-.166-.176.075 0 0zm2.47 1.542c.398.25 2.32.55 1.116.103-.201.042-2.231-.574-1.116-.103zm-3.921-3.054c-.039-.167-.616-.185 0 0zm1.15.67c.3-.209-.621-.16 0 0zm.967.593c.43-.162-.697-.163 0 0zm-2.585-1.773c.466.358 1.88.046.714-.213-.53-.283-1.727-.476-.912.17l.198.043zm3.24 1.978c.194-.33-.814-.189 0 0zm-.984-.783c1.14.323-.958-.72-.281-.118l.15.068.13.05zm1.974 1.141c1.079.01-.975-.148 0 0zm-4.645-2.96c-.042-.201-.266.017 0 0zm6.47 3.984c.029-.363-.352.27 0 0zm-4.629-2.856c-.065-.191-.337-.008 0 0zm-1.739-1.254c.62-.037-.848-.273 0 0zm-2.06-1.332c-.077-.297-.674-.534 0 0zM9.8 19.6c-.114-.13-.054.028 0 0zm3.366 2.065c-.01-.197-.183.075 0 0zm-3.664-2.373c.06-.255-.529-.077 0 0zM6.995 17.7c.46-.049-.739-.311 0 0zm4.242 2.637c.718-.285-.7-.14 0 0zM9.03 18.84c.828.106-.985-.563-.181-.06zm2.877 1.768c.773-.462.518 1.082 1.311.13.782-.57-.675.707.289.103.697-.467 1.727.22 2.377.445.468-.023.923.405 1.403.145.923-.25-1.806-.37-1.09-.81-.845.245-1.47-.294-1.885-.835-.948-.219-2.044-.703-2.517-1.542-.192-.315.279.044-.166-.47-.571-.508-.856-1.085-1.24-1.702-.457-.244-.51-.963-.557-.024.004-.593-.553-.992-.689-.826-.002-.571.596-.285.177-.707-.09-.592-.387-1.209-.476-1.877-.138-.322-.02-1.011-.473-.282-.165.77-.055-.947.202-.38.337-.579-.12-.51-.14-.43.22-.488.14-1.18-.057-.916.117-.517.185-1.902-.175-1.656.218-.54.414-2.473-.534-1.736-.384.005-1.048.14-1.363.296.986.543-.099.196-.5.11-.052.502-.45.285-.946.29.793.098-.386.81-.841.534-.59.282.51.987.012 1.205.061.328-.905-.119-.83.64-.573-.241-.078.9.209.514.975.264.686.866.711 1.437-.159.333-.785-.783-.14-.731-.508-.827-.562-.299-.985.085-.099.028 1.079.547.34.803.65.1.668.67.8 1.03.391.407.311-.45.779.04-.296-.436-1.567-1.228-.544-.974-.005-.439-.185-.793.129-.784.31-.562-.325 1.387.375.672.193-.085.241-.563.59.045.505.498.182.858-.531.403.127.433.954.587.799 1.265.165.595.395.376.596.342.158.578.247.153.255-.123.721.155.552.581.778.88.497.224-.712-1.522.142-.526.898.811.337 1.15-.47 1.02.51-.041.675.69 1.313.664.582.277.976 1.34-.027.897-.348-.313-1.579-.7-.573-.104.929.43 1.666.688 2.562 1.227.64.458.918.982 1.16 1.086-.538.257-1.623-.206-.817-.348-.503-.091-1.068-.345-.587.28.41.343 1.45.306 1.637.345-.159.348-.43.376.006.403-.486.26.156.3.201.448zm-.994-2.808c-.296-.31-.373-.89-.053-.385.164.066.525.947.053.385zm3.238 2.057c.185-.011.006.14 0 0zm-3.706-2.816c-.011-.468.107.361 0 0zm-.322-.433c-.372-.719.47.204 0 0zm-3.9-2.692c.218-.059.107.374 0 0zm3.104 1.682c.134-.504.158.424 0 0zm-2.193-1.525c-.155-.278.323.261 0 0zm1.882.604c-.352-.79.25-.432.078.13zM5.77 12.512c-.158-.26-.418-1.02-.334-1.252.076.378.804 1.627.357.518-.494-.93.59.302.702.534.051.23-.305-.063-.064.478-.44-.617-.26.34-.661-.278zm-1.003-.691c.041-.603.23.413 0 0zm.451.155c.215-.455.365.634 0 0zm-1.085-.84c-.374-.37-.644-.713.017-.23.255.01-.566-.778.061-.25.66.12.326 1.082-.078.48zm.57-.015c.217-.215.115.212 0 0zm.35.113c-.328-.617.4.258 0 0zm-.697-.667c-1.086-.966 1.365.506.177.18l-.177-.18zm3.111 1.808c-.47-.282-.124-1.984.036-.82.457-.148-.025.601.315.594-.053.473-.206.643-.35.226zm1.15.68c.047-.513.098.35 0 0zm-.2-.198c.053-.219.006.258 0 0zM4.57 10.25c-.697-.963 2.027.973.447.244-.165-.043-.364-.059-.447-.244zm2.216 1.175c-.066-.81.147.134 0 0zm1.682 1.079c.13-.462.01.305 0 0zM4.676 9.882c.415-.088 1.718.729.521.234-.133-.148-.417-.08-.521-.234zm3.56 1.775c.044-.829.248-.495.002.118l-.002-.118zM4.985 9.594c.169-.248-.449-1.12.089-.313.232.185.672.31.283.387.611.539-.149.146-.372-.074zm3.075 1.804c.117-.944.103.553 0 0zM4.632 8.722c.129-.055.068.172 0 0zm.802.478c.206-.434.38.483 0 0zm2.263 1.259c-.002-.167.043.242 0 0zm-.131-.29c-.314-.776.292.41 0 0zm-.193-.509c-.053-.32.18.403 0 0zm.314-.51c-.216-.38.272-1.674.326-.871-.227.625-.065.975.093.136.293-.66-.063 1.303-.42.735zm.322-1.924c.094-.115.021.139 0 0zm-.538 10.613c-.128-.111.016.071 0 0zm1.11.561c.616.159.613-.096.055-.171-.3-.28-1.246-.575-.399-.035.056.142.234.139.343.206zm-2.192-1.455c.34.253 1.28.719.484.096.269-.312-.514-.478-.254-.686-.66-.404-.52-.368-.058-.356-.794-.354.114-.328.071-.51-.306-.06-1.52-.539-.805.04-.726-.37-.173.138-.392.084-.743-.202.66.565-.118.375.425.337 1.146.864.18.357-.128.183.691.46.892.6zm1.16.667c1.411.454-.691-.556 0 0zm5.94 3.598c.02-.28-.192.24 0 0zm.612.257c.325-.315.013.503.539-.077.006-.415-.016-.66-.605-.156-.162.09-.234.473.066.233zM4.408 15.38c-.1-.393-.7-.39 0 0zm.652.428c-.242-.402-.864-.364 0 0zm3.71 2.237c.362.321 1.663.236.44.04-.182-.269-1.151-.204-.44-.04zm5.098 3.149c.558-.468-.54.208 0 0zm1.16.796c.003-.15-.24.066 0 0zm.001-.21c.617-.654-.598.039 0 0zM2.805 14.038c-.526-.75-.327-1.088-.835-1.7-.096-.47-.87-1.533-.4-.406.43.659.558 1.679 1.235 2.106zm12.03 7.534c1.136-.734-.465-.32 0 0zm.867.34c.57-.488-.36-.102 0 0zM4.215 14.55c.163-.242-.42-.031 0 0zm11.306 7.129c.551-.355-.126-.3-.1.032zM8.05 16.97c-.02-.24-.291.02 0 0zm.461.266c-.146-.297-.225.047 0 0zm7.894 4.684c.705-.51-.428-.098-.148.096zm-.27-.13c.574-.482-.607.213 0 0zm1.38.918c.386-.258-.469-.083 0 0zM4.569 14.376c.517.116 2.066 1.274 1.152.08-.468-.138-.187-1.283-.665-1.08.32.535.264.763-.409.426-.846-.413-.475.204-.31.374-.225.052.298.196.232.2zm-2.356-1.86c.092-.383-.853-2.107-.446-.864.146.26.131.754.446.864zm4.324 2.666c-.266-.223-.013-.032 0 0zm.656.152c0-.405-.725-.164 0 0zm5.682 3.583c-.108-.278-.428-.006 0 0zm.273.199c-.04-.155-.157.03 0 0zm2.253 1.419c.216-.16-.27-.02 0 0zM3.39 12.816c.62-.24-.664-.171 0 0zm8.985 5.661c-.007-.401-.395.1 0 0zm-9.23-6.231c.398-.135-.368-.089 0 0zm1.155.56c-.007-.133-.122.05 0 0zm14.09 8.64c.513-.104 1.679.26 1.867-.136-.621-.015-2.15-.438-2.222.101l.136.022.22.013zM4.668 12.898c.009-.407-.317-.015 0 0zM1.63 10.79c-.138-.775-.525-.118 0 0zm.724.182c.009-.249-.663-.224 0 0zm.414.203c-.12-.097-.094.122 0 0zm2.605 1.67c.122-.112-.29-.083 0 0zm-2.88-2.128c-.07-.585-.84-.088 0 0zm-1.486-.964c-.02-.27-.144.102 0 0zm.221-.167c-.036-.32-.19.04 0 0zm1.22.729c.517-.203-.94-.42-.105-.039zm16.334 10.089c.33-.303-.42-.094 0 0zm1.974 1.023c.132-.392-.334.051 0 0zM2.573 9.676c.055-.379-.409.075 0 0zM.837 8.513c-.093-.535-.08-1.474.812-1.156-1.191.236.824 1.48.57.498.5.024.98-.296.716.19.987-.109 1.671-.964 2.624-.845.742-.098 1.554-.172 2.354-.471.658-.048 1.291-.756.93-1.175-.896-.076-1.835.036-2.827.233-1.098.228-2.096.662-3.205.849-1.08.145.217.4-.092.456-.564.196.672.328-.073.534-.46-.088-.94-.246-.743-.73-1.035.133-1.945.563-1.127 1.616h.061zm2.494-1.27c.243-.894 1.3.735.398.118-.108-.08-.285-.146-.398-.119zm.047-.434c.35-.26.186.146 0 0zm.445.008c.032-.411 1.018.218.163.148zm.608-.245c.222-.26.064.231 0 0zm.156-.104c.37-.444 2.095-.283.832-.043-.338-.255-.598.15-.832.043zm2.251-.347c-.056-1.214 1.118.432 0 0zm.639-.004c.233-.612.906-.245.108-.123.017.065-.024.316-.108.123zM2.322 9.362c.697-.427-.741-.37 0 0zm.515.144c.245-.26-.531-.106 0 0zm-1.52-1.08c.399-.305-.471-.116 0 0zm20.603 12.89c.012-.355-.304.16 0 0zm-2.093-1.429c.06-.409-.27.036 0 0zm2.67 1.567c.557 0 1.688-.173.475-.173-.19.03-1.109.024-.476.173zM3.29 9.254c.451-.03.706-.497-.087-.47-1.23-.127 1.084.42-.158.264-.167.11.236.237.245.207zm.398.202c-.048-.29-.14.154 0 0zm.47-1.257c.197-.243-.27-.065 0 0zm-1.5-2.508c.806-.274 1.907-.581 2.287.135-.387-.466-.156-.924.21-.243.516.689.775-.313.438-.545.383.476.819.701.257.03.61-.734-1.223.097-1.64.088-.2.09-2.071.477-1.551.535zm.472-.903c.46-.347 1.588.206.864-.345-.07-.062-1.586.418-.864.345zm1.674.069c.538.013-.231-.722.409-.389-.105-.344-.746-.408-1.059-.545-.177.314.36.938.65.934zm-1.38-1.52c.186-.252-.326.128 0 0zm.684.164c.866-.115-.22-.373-.174-.01zm-1.277-1c-.61-.796 1.146.134.527-.7-.522-.415-1.023.468-.527.7zm7.825 4.215c.28-.496-1.155-.668-.188-.175.089.03.069.21.188.175z"></path>
                    </svg>
                </>
            ),
        },
        {
            name: "Heroku",
            logoText: "#fff",
            logoBg: "#430098",
            logoTextDark: "#430098",
            logoBgDark: "#fff",
            svg: (
                <>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M20.4425631,0 L3.16168659,0 C1.96912351,0 1,0.966467463 1,2.16168659 L1,21.8403054 C1,23.0335325 1.96912351,24 3.16168659,24 L20.4425631,24 C21.6354582,24 22.6015936,23.0335325 22.6015936,21.8403054 L22.6015936,2.16168659 C22.6015936,0.966467463 21.6354582,0 20.4425631,0 L20.4425631,0 Z M21.4013944,21.8403054 C21.4013944,22.3701859 20.9721116,22.7991368 20.4425631,22.7991368 L3.16168659,22.7991368 C2.63247012,22.7991368 2.2001992,22.3701859 2.2001992,21.8403054 L2.2001992,2.16168659 C2.2001992,1.62981408 2.63247012,1.2001992 3.16168659,1.2001992 L20.4425631,1.2001992 C20.9721116,1.2001992 21.4013944,1.62981408 21.4013944,2.16168659 L21.4013944,21.8403054 Z M6.40036521,20.4013612 L9.10222444,18.0002988 L6.40036521,15.5999004 L6.40036521,20.4013612 L6.40036521,20.4013612 Z M16.1577357,10.6722776 C15.672012,10.1838977 14.7852258,9.60056441 13.302158,9.60056441 C11.675,9.60056441 9.99903718,10.0245352 8.80116202,10.4126494 L8.80116202,3.60122842 L6.40043161,3.60122842 L6.40043161,14.0085989 L8.09697875,13.2400066 C8.1251992,13.2273904 10.860259,12.0012948 13.302158,12.0012948 C14.5202855,12.0012948 14.7902058,12.6719456 14.8031541,13.2323705 L14.8031541,20.4013612 L17.2012284,20.4013612 L17.2012284,13.201494 C17.2038845,13.0474436 17.1886122,11.7157703 16.1577357,10.6722776 M13.0012948,7.50039841 L15.4020252,7.50039841 C16.4866866,6.27164675 17.0394754,4.96354582 17.201494,3.60099602 L14.8030876,3.60099602 C14.5358234,4.96088977 13.9445219,6.26135458 13.0012948,7.50039841"
                        ></path>
                    </svg>
                </>
            ),
        },
        {
            name: "Firebase",
            logoText: "#fff",
            logoBg: "#f5820b",
            logoTextDark: "#f5820b",
            logoBgDark: "#fff",
            svg: (
                <>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title></title>
                        <path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 0 0-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 0 0 1.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984 14.3 7.148z"></path>
                    </svg>
                </>
            ),
        },
    ];
    return (
        <div
            className={`${styles.techstack} ${
                theme ? styles.darkTechStack : ``
            }`}
        >
            <h1 className={`${styles.textLg}`}>Tools and Technologies</h1>
            <div className={`${styles.skillBadges}`}>
                {techData.map(
                    ({
                        name,
                        svg,
                        logoBg,
                        logoBgDark,
                        logoText,
                        logoTextDark,
                    }) => {
                        return (
                            <a
                                className={styles.badge}
                                title={name}
                                style={
                                    theme
                                        ? {
                                              color: logoTextDark,
                                              background: logoBgDark,
                                          }
                                        : {
                                              color: logoText,
                                              background: logoBg,
                                          }
                                }
                            >
                                {svg}
                            </a>
                        );
                    }
                )}
            </div>
        </div>
    );
}
