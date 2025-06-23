"use client";
import React from "react";
import CountUp from "react-countup";
import {motion} from "motion/react"

function Milestones() {
    const initialDelay = 0.1;
    const entryQueueDelay = 0.3;
    
    const entryOpacDuration = 2;
    
    const entryScaleType = "spring";
    const entryScaleDuration = 1;
    const entryScaleBounce = 0.3;

    const entryCountupDiff = 0.1;
    const countupDuration = 2;
 
	return (
        
		<div className="stats-showcase-panel bg-topography border-2 border-[#bc6a3c] lg:w-full w-[100%] mx-auto ">
            
            
                <div className="stats-showcase-panel-card card-hover-scale-tl ">
                    <motion.div
                initial={{ opacity: 0, scale:0}}
                whileInView={{ opacity: 1, scale:1}}
                transition={{
                    
                    opacity: {
                        delay: initialDelay + 0*entryQueueDelay,
                        duration: entryOpacDuration
                    },
                    scale: { 
                        delay: initialDelay + 0*entryQueueDelay,
                        type: entryScaleType, 
                        visualDuration: entryScaleDuration, 
                        bounce: entryScaleBounce},
                }}>
                                <div className="stats-showcase-panel-card-title">
                                    <CountUp
                                        start={2030}
                                        end={1998}
                                        duration={3}
                                        delay={initialDelay + 0*entryQueueDelay}
                                        separator=""
                                        enableScrollSpy="true"
                                    />
                                </div>
                                <p className="stats-showcase-panel-card-text">Na trhu od roku</p>
                                    </motion.div>
                            </div>


			
			<div className="stats-showcase-panel-card card-hover-scale-tr">
                <motion.div
                initial={{ opacity: 0, scale:0}}
                whileInView={{ opacity: 1, scale:1}}
                transition={{
                    
                    opacity: {
                        delay: initialDelay + 1*entryQueueDelay,
                        duration: entryOpacDuration
                    },
                    scale: { 
                        delay: initialDelay + 1*entryQueueDelay,
                        type: entryScaleType, 
                        visualDuration: entryScaleDuration, 
                        bounce: entryScaleBounce},
                }}>
				<div className="stats-showcase-panel-card-title">
					<CountUp
						start={0}
						end={150}
						duration={4}
                        delay={initialDelay + 1*entryQueueDelay}
						separator=""
						enableScrollSpy="true"
					/>
					+
				</div>
				<p className="stats-showcase-panel-card-text">Realizovaných staveb</p>
                </motion.div>
			</div>

			<div className="stats-showcase-panel-card card-hover-scale-bl">
                <motion.div
                initial={{ opacity: 0, scale:0}}
                whileInView={{ opacity: 1, scale:1}}
                transition={{
                    
                    opacity: {
                        delay: initialDelay + 2*entryQueueDelay,
                        duration: entryOpacDuration
                    },
                    scale: { 
                        delay: initialDelay + 2*entryQueueDelay,
                        type: entryScaleType, 
                        visualDuration: entryScaleDuration, 
                        bounce: entryScaleBounce},
                }}>
				<div className="stats-showcase-panel-card-title">
					<CountUp
						start={0}
						end={80}
						duration={5}
                        delay={initialDelay + 2*entryQueueDelay}
						separator=""
						enableScrollSpy="true"
					/>
					%
				</div>
				<p className="stats-showcase-panel-card-text">
					Zákazníků na doporučení
				</p>
                </motion.div>
			</div>

			<div className="stats-showcase-panel-card card-hover-scale-br">
                <motion.div
                initial={{ opacity: 0, scale:0}}
                whileInView={{ opacity: 1, scale:1}}
                transition={{
                    
                    opacity: {
                        delay: initialDelay + 3*entryQueueDelay,
                        duration: entryOpacDuration
                    },
                    scale: { 
                        delay: initialDelay + 3*entryQueueDelay,
                        type: entryScaleType, 
                        visualDuration: entryScaleDuration, 
                        bounce: entryScaleBounce},
                }}>
				<div className="stats-showcase-panel-card-title">
					<CountUp
						start={0}
						end={100}
						duration={6}
                        delay={initialDelay + 3*entryQueueDelay}
						separator=""
						enableScrollSpy="true"
					/>
					%
				</div>
				<p className="stats-showcase-panel-card-text">
					Práce poctivých řemeslníků
				</p>
            </motion.div>
			</div>
		</div>
	);
}

export default Milestones;
