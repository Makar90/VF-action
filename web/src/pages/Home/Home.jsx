import './index.css';
import Timer from '../../component/timer/Timer';


export default function Home(){
    
    return(
        <>
            
            <section className="promo-info">
                <Timer
                    endDate= 'June 1, 2023 23:59:50'
                    timeZone = '3'
                /> 
            </section>
        </>
    );
}
