document.getElementById('calculateButton').addEventListener('click', async () => {
    const query = document.getElementById('queryInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Calculating...';

    try {
        const response = await fetch('/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        });
        const data = await response.json();
        if (response.ok) {
            resultDiv.textContent = `Expression: ${data.expression} = ${data.result}`;
        } else {
            resultDiv.textContent = `Error: ${data.error}`;
        }
    } catch (error) {
        resultDiv.textContent = 'An error occurred. Please try again.';
    }
});