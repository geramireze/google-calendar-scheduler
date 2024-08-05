import React, { useEffect, useRef } from 'react';

interface CalendarButtonProps {
  url: string;
  color?: string;
  label?: string;
}

const CalendarButton: React.FC<CalendarButtonProps> = ({ url, color = '#039BE5', label = 'Book an appointment' }) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'google-calendar-scheduling-script';
    const linkId = 'google-calendar-scheduling-link';
    const buttonContainerId = 'google-calendar-button-container';

    const loadSchedulingButton = () => {
      if ((window as any).calendar && (window as any).calendar.schedulingButton) {
        // Verificar si el contenedor del botón ya existe
        if (!document.getElementById(buttonContainerId)) {
          // Crear un nuevo contenedor de botón
          const newButtonContainer = document.createElement('div');
          newButtonContainer.id = buttonContainerId;
          buttonRef.current?.appendChild(newButtonContainer);

          (window as any).calendar.schedulingButton.load({
            url,
            color,
            label,
            target: newButtonContainer,
          });
        }
      }
    };

    const ensureScriptAndStyles = () => {
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
        script.async = true;
        script.id = scriptId;
        script.onload = loadSchedulingButton;
        document.body.appendChild(script);
      } else {
        loadSchedulingButton();
      }

      if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
        link.rel = 'stylesheet';
        link.id = linkId;
        document.head.appendChild(link);
      }
    };

    if (typeof window !== 'undefined') {
      ensureScriptAndStyles();
    }
  }, [url, color, label]);

  return <div ref={buttonRef}></div>;
};

export default CalendarButton;