import {useContext} from 'react';
import { SccContext} from '../../context/scc';
import {Route, useHistory} from 'react-router-dom'
import NotFound from '../../pages/notfound';
import './eduPoster.scss';
import { useEffect } from 'react';

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
        setSelectEdu(sessionStorage.getItem('edu'));
    }
    },[])
    return(
        <div className="posterWrapper">
            { 
                selectEdu===undefined?
                <Route component={NotFound}/>
                :
                event.map((item,index)=>{
                        console.log(item.landingUrl);
                        if(item.title===selectEdu){
                            return(
                            <div className="posterBox">
                                <img src={item.landingUrl} width="90%"/>
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