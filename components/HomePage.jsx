function HomePage() {
    return(
        <div id='home'>
            <h1 className='header-play' >Featured Playlist</h1>
            <div className='music-container'>
                    <div>
                        <h3 className='sub-header'>Previous Release</h3>
                        <iframe 
                            id="disco-playlist-17672832" 
                            name="disco-playlist-17672832" 
                            allowfullscreen frameborder="0" 
                            class="disco-embed" 
                            src="https://domolo.disco.ac/e/p/17672832?download=false&s=1z6N222TFjMTZvhFqwy6PsUInh8%3Ay6vUw6Hq&artwork=true&color=%2332B57C&theme=dark" 
                            width="480" 
                            height="580"
                            ></iframe>
                    </div>
                
                <div>
                    <h3 className='sub-header'>Latest Release</h3>
                    <iframe 
                    id="disco-playlist-18365508" 
                    name="disco-playlist-18365508" 
                    allowfullscreen frameborder="0" 
                    class="disco-embed" 
                    src="https://domolo.disco.ac/e/p/18365508?download=false&s=uFM5f2zfZkJJvqguTKcoSbobl04%3AlfahHRWK&artwork=true&color=%234B6CD3&theme=dark" 
                    width="480" 
                    height="580"
                    ></iframe>
                </div>
            
            </div>
        </div>
    )
}

export default HomePage;