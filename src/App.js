import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [description, setDescription] = useState('');
    const [generatedName, setGeneratedName] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerateName = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: "gpt-4",
                    messages: [
                        { role: "system", content: "You are a helpful assistant." },
                        { role: "user", content: `Generate a creative name for a song or production based on the following description: ${description}` }
                    ]
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    },
                }
            );
            setGeneratedName(response.data.choices[0].message.content.trim());
        } catch (error) {
            console.error('Error generating name:', error);
            setGeneratedName('Error generating name. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app-container">
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Describe the type of name..." 
                className="description-input"
            />
            <button onClick={handleGenerateName} className="generate-button" disabled={loading}>
                {loading ? 'Generating...' : 'Generate Name'}
            </button>
            {generatedName && (
                <div className="generated-name">
                    <h2>Generated Name:</h2>
                    <p>{generatedName}</p>
                </div>
            )}
        </div>
    );
}

export default App;
