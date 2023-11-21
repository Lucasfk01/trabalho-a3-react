import React, { useState } from 'react';
import axios from 'axios';
import "../style/style.css";

function Home() {
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/api/data', { text });
            setSummary(response.data.resumo);
        } catch (error) {
            console.error('Erro ao enviar texto:', error);
        } finally {
            setIsLoading(false); // Finalizar o loading
        }
    };
    
    return (
        <div className="Home">
            <div className="container">
                <div className="form">
                    <div className="contact-form">
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <h3 className="title">Coloque o Texto a ser resumido</h3>
                            <div className="input-container textarea">
                                <textarea 
                                    name="message" 
                                    className="input" 
                                    value={text}
                                    onChange={handleTextChange}></textarea>
                                <span>Texto</span>
                            </div>
                            <div className="btn-send">
                                <input type="submit" value="Send" className="btn" />
                            </div>
                        </form>
                    </div>
                    {isLoading ? (
                        <div className="loading-container">
                            <p>Carregando...</p> 
                        </div>
                    ) : (
                        <div className="contact-info">
                            <h3 className="title">Resumo</h3>
                            <p className="text-result">
                                {summary}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );    
}

export default Home;