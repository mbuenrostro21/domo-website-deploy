import './components.css'

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
                            allowfullscreen 
                            frameborder="0" 
                            className="disco-embed" 
                            src="https://domolo.disco.ac/e/p/17672832?download=true&s=q5LwtRMMZGJPazGt3Y8IICrqz3U%3AD8yVrKSw&artwork=true&color=%23FBE094&theme=dark" 
                            width="480" 
                            height="580">
                        </iframe>
                    </div>
                
                <div>
                    <h3 className='sub-header'>Latest Release</h3>
                    <iframe 
                        id="disco-playlist-18365508" 
                        name="disco-playlist-18365508" 
                        allowfullscreen 
                        frameborder="0" 
                        className="disco-embed" 
                        src="https://domolo.disco.ac/e/p/18365508?download=true&s=N40dfJjCfHeGt2fx85pZKut4g4o%3Az3bn1YNg&artwork=true&color=%23FBE094&theme=dark" 
                        width="480" 
                        height="580">
                    </iframe>
                </div>
            
            </div>
        </div>
    )
}

export default HomePage;