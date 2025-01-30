import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './StatCounter.css';

function StatCounter({ end, duration, suffix, title }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className="stat-counter" ref={ref}>
      <div className="counter-value">
        {inView && (
          <CountUp
            end={end}
            duration={duration}
            suffix={suffix}
            separator=","
          />
        )}
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default StatCounter;