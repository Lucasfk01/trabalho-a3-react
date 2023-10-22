import "../style/style.css";

function Home() {
    return (
        <div className="Home">
            <div class="container">


                <div class="form">


                    <div class="contact-form">


                        <form action="index.html" autocomplete="off">
                            <h3 class="title">Coloque o Texto a ser resumido</h3>

                            <div class="input-container textarea">
                                <textarea name="message" class="input"></textarea>

                                <span>Texto</span>
                            </div>
                            <div className="btn-send">
                                <input type="submit" value="Send" class="btn" />
                            </div>


                        </form>
                    </div>

                    <div class="contact-info">
                        <h3 class="title">Resumo</h3>
                        <p class="text-result">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                            dolorum adipisci recusandae praesentium dicta!
                        </p>




                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;