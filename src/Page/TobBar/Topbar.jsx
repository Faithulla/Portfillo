import './style.scss'
import {Person,Mail} from '@material-ui/icons'


export default function Topbar({setMenuOpen,menuOpen}) {
    return (
        <div className={"TopBar " + (menuOpen && 'active') }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>faihulla.</a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+998-99-189-31-91</span>
                    </div>
                    <div className="itemContainer" >
                        <Mail className='icon'/>
                        <span>fayzullashakirov01@gmail.com</span>
                    </div>
                </div>
                
                <div className="borgir">
                    <div className="borgir-exe" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
