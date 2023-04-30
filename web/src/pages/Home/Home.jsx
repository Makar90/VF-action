import { useState } from "react";
import './index.css';

export default function Home(){
    //const [TimerYears, setTimerYears] = useState();
    //const [TimerMonthes, setTimerMonthes] = useState();
    const [TimerDays, setTimerDays] = useState();
    const [TimerHours, setTimerHours] = useState();
    const [TimerMinutes, setTimerMinutes] = useState();
    const [TimerSeconds, setTimerSeconds] = useState();

    function setTimerValues(FutureDate, TimeZone){
        FutureDate = new Date(`${FutureDate} GMT+${TimeZone}:00`); 
        let TimerDelay = 1000;
        let Timer = setTimeout(function request() {
            let CurrentDate = new Date();
            if(CurrentDate<=FutureDate){
                let secondsLag = Math.floor(Math.abs(FutureDate.getTime() - CurrentDate.getTime()) / 1000 );
                
                setTimerDays(Math.floor(secondsLag / (60*60*24)));
                setTimerHours(Math.floor(secondsLag / (60*60)) %24);
                setTimerMinutes(Math.floor(secondsLag / 60) %60);
                setTimerSeconds(secondsLag%60);    
                Timer = setTimeout(request, TimerDelay);
            }else{
                //alert('Timer out');
                Timer=0;
                console.log(Timer);
            }
        });
    }


    let promoEndDate = 'May 1, 2023 23:59:50';
    setTimerValues(promoEndDate, 3);    
    //setTimerValues(new Date('April 30, 2023 16:00:00 GMT+03:00'));         
    return(
        <>
            
            <section className="timer">
                <div className="timer__image">
                    <h2>
                        {/* {TimerYears}: */}
                        {/* M:{TimerMonthes}<br/> */}
                        D:{TimerDays}<br/>
                        H:{TimerHours}<br/>
                        Min:{TimerMinutes}<br/>
                        Sec:{TimerSeconds}
                    </h2>
                </div>
                <div className="timer__desk">
                    <h2 className="timer__desk-title">Знижки для своїх</h2>
                    <p className="timer__desk-title-period">Період проведення акції по
                        <span className="timer__desk-title-period-date"> {promoEndDate}</span>
                    </p>
                    <p className="timer__desk-title-toend">До кінця акції залишилось:</p>
                    <div className="timer__desk-timebox-row">
                        <div className="timer__desk-timebox">
                            <p className="timer__desk-timebox-time">{TimerDays}</p>
                            <p className="timer__desk-timebox-title">Днів</p>
                        </div>
                        <div className="timer__desk-timebox">
                            <p className="timer__desk-timebox-time">{TimerHours}</p>
                            <p className="timer__desk-timebox-title">Годин</p>
                        </div>
                        <div className="timer__desk-timebox">
                            <p className="timer__desk-timebox-time">{TimerMinutes}</p>
                            <p className="timer__desk-timebox-title">Хвилин</p>
                        </div>
                        <div className="timer__desk-timebox">
                            <p className="timer__desk-timebox-time">{TimerSeconds}</p>
                            <p className="timer__desk-timebox-title">Секунд</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
