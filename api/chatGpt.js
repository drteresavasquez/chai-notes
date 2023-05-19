const askChatGpt = (input) => {
  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: input }],
  };
  const mySecret = process.env.NEXT_PUBLIC_CHATGPT_API_KEY;
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${mySecret}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(payload),
  };

  return fetch('https://api.openai.com/v1/chat/completions', requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.warn('error', error));
};

export default askChatGpt;
