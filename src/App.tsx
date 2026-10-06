import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Current Date and Time</h1>
      <p>{format(now, 'MMMM d, yyyy h:mm:ss a')}</p>
    </div>
  );
}

export default App;
