# Google Calendar Scheduler

A React component library to integrate Google Calendar scheduling buttons into your application.

## Installation

To install the library, use npm or yarn:

`npm install google-calendar-scheduler` or 
`yarn add google-calendar-scheduler`

### Props

- `url` (string, required): The URL for the Google Calendar scheduling.
- `color` (string, optional): The color of the button. Default is `#039BE5`.
- `label` (string, optional): The label of the button. Default is `Book an appointment`.

## Usage

Import the `CalendarButton` component and use it in your React application:

```
import React from 'react'; 
import { CalendarButton } from 'google-calendar-scheduler'; 
 
const App = () => { 
  return ( 
    <div> 
      <h1>Schedule an Appointment</h1> 
      <CalendarButton url="https://your-calendar-url.com" /> 
    </div> 
  ); 
}; 
 
export default App;


```