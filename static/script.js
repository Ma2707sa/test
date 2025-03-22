document.getElementById("generate").addEventListener('click', () => {
  const input = document.getElementById("user-prompt").value;
  fetch('/run_command', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ command: input }),
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
  });
});

document.getElementById("voice-search").addEventListener('click', () => {
  fetch('/voice_command', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById("user-prompt").value = data.command;
      fetch('/run_command', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ command: data.command }),
      });
  });
});