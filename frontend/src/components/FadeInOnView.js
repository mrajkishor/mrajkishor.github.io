import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeInOnView = ({ children, delay = 0.1 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInOnView;
