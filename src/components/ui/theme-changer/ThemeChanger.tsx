'use client';

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Moon, Sun} from "lucide-react";

export const ThemeChanger = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    if (!mounted) {
        return null; // ou um placeholder invisível
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative cursor-pointer bg-base-100 hover:shadow-sm rounded-full p-4 w-8 h-8 text-base-content flex items-center justify-center overflow-hidden"
        >
            <AnimatePresence mode="wait" initial={false}>
                {resolvedTheme === "dark" ? (
                    <motion.div
                        key="sun"
                        initial={{ y: -20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                    >
                        <Sun className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ y: -20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                    >
                        <Moon className="w-6 h-6 text-base-content" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
};
