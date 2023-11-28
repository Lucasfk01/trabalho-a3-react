import { useState } from 'react';
import axios from 'axios';
import "../style/style.css";

function Home() {
    const [inputText, setInputText] = useState('');
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setSummary('');
            const response = await axios.post('http://localhost:3001/api/data', { text: inputText });
            setSummary(response.data.resumo);
        } catch (error) {
            console.error('Erro ao enviar o texto:', error);
        } finally {
            setLoading(false);
        }


    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
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
                                    value={inputText}
                                    onChange={handleInputChange}
                                ></textarea>
                                <span>Texto</span>
                            </div>
                            <div className="btn-send">
                                <input
                                    type="submit"
                                    value={loading ? 'Loading...' : 'Enviar'}
                                    className="btn"
                                    disabled={loading}
                                />
                            </div>
                        </form>
                    </div>

                    <div className="contact-info">
                        <h3 className="title">Resumo</h3>

                        <p className="text-result">{summary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
