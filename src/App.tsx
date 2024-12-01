import pheonixImage from './assets/pheonix.png';
function App() {
    return (
        <div className="container p-2">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6 text-center display-4 font-weight-bold font-monospace order-2">Hey,<br/> I am George!!
                    <p className="smallParagraph">What to know more about me? Well, get scrolling.</p>
                </div>
                <div className="col-12 col-md-6 text-center order-1">
    <img src={pheonixImage} alt="Pheonix" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</div>
            </div>
        </div>
    );
}


export default App;