import {useContext} from 'react';
import { SccContext} from '../../context/scc';
import {Route, useHistory} from 'react-router-dom'
import NotFound from '../../pages/notfound';
import './eduPoster.scss';
import { useEffect } from 'react';
import p1 from "../../static/images/land_main.jpg"

export default function EduPoster(){
    const {event,selectEdu,setSelectEdu} = useContext(SccContext);
    let history = useHistory();
    useEffect(()=>{
        if(sessionStorage.length===0){
        if(selectEdu!==undefined){
            sessionStorage.setItem('edu',selectEdu);
        }
    }
    else{
        if(selectEdu===undefined){
        setSelectEdu(sessionStorage.getItem('edu'));
        }else{
            sessionStorage.setItem('edu',selectEdu);
        }
        
    }

    },[])
    return(
        <div className="posterWrapper">
            { 
                selectEdu===undefined?
                <Route component={NotFound}/>
                :
                event.map((item,index)=>{
                        
                        if(item.title===selectEdu){
                            console.log(selectEdu);
                            console.log(item.landingUrl);
                            return(
                            <div className="posterBox">
                                <img src={item.landingUrl}/>
                                <div className="posterBtn" onClick={()=>{history.push('/eduform');}}>
                                    신청하기
                                </div>
                            </div>
                            );
                        }
                })
            
            }
        </div>
    );
}