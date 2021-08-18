import './Porfilio.scss'
import PortfilioList from './PortfilioList'
export default function Portfilio() {
    const list = [
        {
           id:'features',
           tittle:'Features'         
        },
        {
           id:'web',
           tittle:'Web App'         
        },
        {
           id:'mobile',
           tittle:'Mobile App'         
        },
        {
           id:'design',
           tittle:'Design'         
        },
        {
           id:'branding',
           tittle:'Branding'         
        }
    ]
    return (
        <div className='Portfilio' id='portfilio'>
            <h1>Portfilio</h1>
            <ul>
                {
                    list.map(item => (
                        <PortfilioList tittle={item.tittle}/>
                     ))
                }
            </ul>
            <div className="container">
                <div className="item" >
                    <img src="https://cdn.dribbble.com/users/2768987/screenshots/14668214/media/5c145c66d071199cb0a745c7983519d3.png?compress=1&resize=1600x1200" alt="" />
                    <h3>Ranking App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.dribbble.com/users/2768987/screenshots/14668214/media/5c145c66d071199cb0a745c7983519d3.png?compress=1&resize=1600x1200" alt="" />
                    <h3>Ranking App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.dribbble.com/users/2768987/screenshots/14668214/media/5c145c66d071199cb0a745c7983519d3.png?compress=1&resize=1600x1200" alt="" />
                    <h3>Ranking App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.dribbble.com/users/2768987/screenshots/14668214/media/5c145c66d071199cb0a745c7983519d3.png?compress=1&resize=1600x1200" alt="" />
                    <h3>Ranking App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.dribbble.com/users/2768987/screenshots/14668214/media/5c145c66d071199cb0a745c7983519d3.png?compress=1&resize=1600x1200" alt="" />
                    <h3>Ranking App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.dribbble.com/users/2768987/screenshots/14668214/media/5c145c66d071199cb0a745c7983519d3.png?compress=1&resize=1600x1200" alt="" />
                    <h3>Ranking App</h3>
                </div>
            </div>
        </div>
    )
}
