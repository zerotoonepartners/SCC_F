import {useEffect, useState} from "react";
import "./hideshow.scss";

function HideShow(){
    const [iso,setIso] =useState(false);
    const Iso = ['ISO 9001','ISO 14001','ISO 45001','ISO 22000','ISO 22716','ISO 13485'];
    const [oper,setOper] =useState(false);
    const Oper = ['성과공유기업','여성기업','이노비즈','메인비즈','벤처기업','뿌리기술 전문기업'];
    const [product,setProduct] =useState(false);
    const Product = ['FSSC 22000'];
    const [welfare,setWelfare] =useState(false);
    const Welfare = ['가족친화인증','병역특례','노사문화 우수기업','청년친화 강소기업','인재육성형 중소기업','공동근로복지기금설립'];
    const [labor,setLabor] =useState(false);
    const Labor = ['기업부설연구소','기업전담부서','기업창작연구소','창작전담부서'];
    const selection = [];

    const addHandler = (e) => {
        let 중복=false;
        selection.map((value,key)=>{
            if(value===e){중복=true;}
        });
        if(중복){}
        else{selection.push(e);}
        console.log(selection);
    }
    const tmp = () => {
        selection.map((value,key)=>{
            console.log(typeof(value));
        });
    }

    return(
        <>
            <div>
                <ul>
                    
                    <li onClick={()=>{if(iso){setIso(false);}else{setIso(true);}}}>ISO 인증</li>
                    <div>{iso? Iso.map((value,key)=>{return(<div className="btn"><input type="button" onClick={()=>{addHandler(value)}}/>{value}</div>);}):<></>}</div>
                    <li onClick={()=>{if(oper){setOper(false);}else{setOper(true);}}}>경영인증</li>
                    <div>{oper? Oper.map((value,key)=>{return(<div className="btn"><button>{value}</button></div>);}):<></>}</div>
                    <li onClick={()=>{if(product){setProduct(false);}else{setProduct(true);}}}>품질인증</li>
                    <div>{product? Product.map((value,key)=>{return(<div className="btn"><button>{value}</button></div>);}):<></>}</div>
                    <li onClick={()=>{if(welfare){setWelfare(false);}else{setWelfare(true);}}}>복지인증</li>
                    <div>{welfare? Welfare.map((value,key)=>{return(<div className="btn"><button>{value}</button></div>);}):<></>}</div>
                    <li onClick={()=>{if(labor){ setLabor(false); }else{setLabor(true);}}}>연구소인증</li>
                    <div>{labor? Labor.map((value,key)=>{return(<div className="btn"><button>{value}</button></div>);}):<></>}</div>
                    <button onClick={()=>{tmp();}}>temp</button>
                    <div>{selection.map((value)=>{return(<div>{value}</div>)})}</div>
                </ul>
            </div>
        </>
    );
}

export default HideShow;