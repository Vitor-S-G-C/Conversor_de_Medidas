import { useEffect, useState } from "react";

export default function Tema () {
    const [darkMode, setDarkMode] = useState(false); // Use state for darkMode


    
    useEffect(() => {
        document.body.className = darkMode ? "dark-mode" : "";
    }, [darkMode]);

    return <>

    
    <button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? "☀️" : "🌙"}
</button>
</>
}